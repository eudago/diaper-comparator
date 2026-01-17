import { Effect } from 'effect'
import * as PgDrizzle from '@effect/sql-drizzle/Pg'
import { products, offers, retailers } from '../db/schema/products'
import { eq, inArray } from 'drizzle-orm'
import { MeilisearchService } from '../services/Meilisearch'
import { ProductId } from '@effect-api-example/shared'

/**
 * Initializes Meilisearch index settings.
 */
export const initMeilisearch = () =>
    Effect.gen(function* () {
        const { client } = yield* MeilisearchService

        console.log('Initializing Meilisearch index settings...')

        // Products index settings
        const productsIndex = client.index('products')
        yield* Effect.tryPromise(() =>
            productsIndex.updateSettings({
                filterableAttributes: ['brand', 'retailers', 'type', 'size', 'country'],
                searchableAttributes: ['brand', 'model', 'line'],
                sortableAttributes: ['minPrice', 'minPricePerUnit', 'updatedAt'],
            })
        )

        // Offers index settings
        const offersIndex = client.index('offers')
        yield* Effect.tryPromise(() =>
            offersIndex.updateSettings({
                filterableAttributes: ['brand', 'retailer', 'type', 'size', 'country', 'stock'],
                searchableAttributes: ['brand', 'model', 'line', 'retailer'],
                sortableAttributes: ['price', 'pricePerUnit', 'scrapedAt'],
            })
        )
    })

/**
 * Synchronizes a list of products to Meilisearch.
 */
export const syncProductsToMeilisearch = (productIds: ProductId[]) =>
    Effect.gen(function* () {
        if (productIds.length === 0) return

        const db = yield* PgDrizzle.PgDrizzle
        const { client } = yield* MeilisearchService
        const index = client.index('products')

        // Fetch products with their current offers and retailer names
        const rows = yield* Effect.tryPromise(() =>
            db
                .select({
                    product: products,
                    offer: offers,
                    retailer: retailers,
                })
                .from(products)
                .leftJoin(offers, eq(products.id, offers.productId))
                .leftJoin(retailers, eq(offers.retailerId, retailers.id))
                .where(inArray(products.id, productIds))
        )

        // Group rows by product
        const grouped = rows.reduce((acc, curr) => {
            const pid = curr.product.id
            if (!acc[pid]) {
                acc[pid] = {
                    product: curr.product,
                    offers: [] as any[],
                }
            }
            if (curr.offer) {
                acc[pid].offers.push({
                    ...curr.offer,
                    retailerName: curr.retailer?.name,
                })
            }
            return acc
        }, {} as Record<string, { product: typeof products.$inferSelect; offers: any[] }>)

        const documents = Object.values(grouped).map(({ product, offers }) => {
            const prices = offers.map((o) => parseFloat(o.price))
            const ppu = offers.map((o) => parseFloat(o.pricePerUnit))

            return {
                id: product.id,
                brand: product.brand,
                model: product.model,
                line: product.line,
                size: product.size,
                weightRange: product.weightRange,
                unitsPerPackage: product.unitsPerPackage,
                type: product.type,
                country: product.country,
                minPrice: prices.length > 0 ? Math.min(...prices) : null,
                maxPrice: prices.length > 0 ? Math.max(...prices) : null,
                minPricePerUnit: ppu.length > 0 ? Math.min(...ppu) : null,
                maxPricePerUnit: ppu.length > 0 ? Math.max(...ppu) : null,
                retailers: Array.from(new Set(offers.map((o) => o.retailerName).filter(Boolean))),
                offerCount: offers.length,
                updatedAt: Date.now(),
            }
        })

        if (documents.length > 0) {
            console.log(`Syncing ${documents.length} products to Meilisearch...`)
            yield* Effect.tryPromise(() => index.addDocuments(documents))
        }
    })

/**
 * Synchronizes individual offers to Meilisearch index 'offers'.
 * Includes product details in each document for filtering/searching.
 */
export const syncOffersToMeilisearch = (productIds: ProductId[]) =>
    Effect.gen(function* () {
        if (productIds.length === 0) return

        const db = yield* PgDrizzle.PgDrizzle
        const { client } = yield* MeilisearchService
        const index = client.index('offers')

        // Fetch all offers for these products with product and retailer info
        const rows = yield* Effect.tryPromise(() =>
            db
                .select({
                    offer: offers,
                    product: products,
                    retailer: retailers,
                })
                .from(offers)
                .innerJoin(products, eq(offers.productId, products.id))
                .innerJoin(retailers, eq(offers.retailerId, retailers.id))
                .where(inArray(offers.productId, productIds))
        )

        const documents = rows.map(({ offer, product, retailer }) => ({
            id: offer.id,
            productId: product.id,
            retailerId: retailer.id,
            retailer: retailer.name,
            brand: product.brand,
            model: product.model,
            line: product.line,
            size: product.size,
            weightRange: product.weightRange,
            unitsPerPackage: product.unitsPerPackage,
            type: product.type,
            country: product.country,
            price: parseFloat(offer.price),
            pricePerUnit: parseFloat(offer.pricePerUnit),
            productUrl: offer.productUrl,
            stock: offer.stock,
            scrapedAt: offer.scrapedAt.getTime(),
        }))

        if (documents.length > 0) {
            console.log(`Syncing ${documents.length} individual offers to Meilisearch...`)
            yield* Effect.tryPromise(() => index.addDocuments(documents))
        }
    })
