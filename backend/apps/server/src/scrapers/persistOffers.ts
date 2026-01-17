import { Effect, pipe } from 'effect'
import * as PgDrizzle from '@effect/sql-drizzle/Pg'
import { products, retailers, offers } from '../db/schema/products'
import { ScrapedOffer } from './Scraper'
import { generateProductId, generateRetailerId } from './utils/canonicalId'
import { ProductId, RetailerId, OfferId } from '@effect-api-example/shared'
import { eq } from 'drizzle-orm'
import { syncProductsToMeilisearch } from './syncMeilisearch'

export interface PersistOffersConfig {
    retailerName: string
    retailerUrl: string
    country: 'ES' | 'US'
}

/**
 * Persists scraped offers to the database.
 * 
 * 1. Upserts the retailer (creates if not exists)
 * 2. Upserts products (creates if not exists, by canonical ID)
 * 3. Inserts offers with current timestamp
 */
export const persistOffers = (
    scrapedOffers: ScrapedOffer[],
    config: PersistOffersConfig
) =>
    Effect.gen(function* () {
        const db = yield* PgDrizzle.PgDrizzle

        // 1. Upsert Retailer
        const retailerId = (yield* Effect.promise(() => generateRetailerId(config.retailerName, config.country))) as RetailerId

        const existingRetailer = yield* Effect.tryPromise(() =>
            db.select().from(retailers).where(eq(retailers.id, retailerId)).limit(1)
        )

        if (existingRetailer.length === 0) {
            console.log(`Creating retailer: ${config.retailerName}`)
            yield* Effect.tryPromise(() =>
                db.insert(retailers).values({
                    id: retailerId,
                    name: config.retailerName,
                    url: config.retailerUrl,
                    country: config.country,
                })
            )
        } else {
            console.log(`Retailer already exists: ${config.retailerName}`)
        }

        // 2. Upsert Products and Insert Offers
        const scrapedAt = new Date()
        const productIdsToSync = new Set<ProductId>()
        let productsCreated = 0
        let offersCreated = 0

        for (const offer of scrapedOffers) {
            // Generate canonical product ID
            const productId = (yield* Effect.promise(() => generateProductId(offer, config.country))) as ProductId
            productIdsToSync.add(productId)

            // Check if product exists
            const existingProduct = yield* Effect.tryPromise(() =>
                db.select().from(products).where(eq(products.id, productId)).limit(1)
            )

            if (existingProduct.length === 0) {
                // Create product
                yield* Effect.tryPromise(() =>
                    db.insert(products).values({
                        id: productId,
                        brand: offer.brand,
                        model: offer.model,
                        line: offer.line || '',
                        size: offer.size,
                        weightRange: offer.weightRange,
                        unitsPerPackage: offer.unitsPerPackage,
                        type: offer.type,
                        country: config.country,
                    })
                )
                productsCreated++
            }

            // 3. Insert Offer
            yield* Effect.tryPromise(() =>
                db.insert(offers).values({
                    productId,
                    retailerId,
                    price: String(offer.price),
                    pricePerUnit: String(offer.pricePerUnit),
                    productUrl: offer.productUrl,
                    stock: offer.inStock,
                    scrapedAt,
                })
            )
            offersCreated++
        }

        console.log(`Persisted: ${productsCreated} new products, ${offersCreated} offers`)

        // 4. Sync to Meilisearch
        yield* Effect.catchAll(
            syncProductsToMeilisearch(Array.from(productIdsToSync)),
            (err) => {
                console.error('Failed to sync to Meilisearch:', err)
                return Effect.void
            }
        )

        return {
            retailerId,
            productsCreated,
            offersCreated,
        }
    })
