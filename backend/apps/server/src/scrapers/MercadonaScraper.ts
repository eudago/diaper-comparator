import { Effect, pipe } from 'effect'
import { HttpClient, HttpClientRequest, FetchHttpClient } from '@effect/platform'
import { ScrapedOffer, Scraper, ScraperError } from './Scraper'

const MERCADONA_ALGOLIA_URL = 'https://7uzjkl1dj0-dsn.algolia.net/1/indexes/products_prod_2004_es/query'
const ALGOLIA_API_KEY = '9d8f2e39e90df472b4f2e559a116fe17'
const ALGOLIA_APP_ID = '7UZJKL1DJ0'

interface MercadonaProduct {
    id: string
    display_name: string
    brand?: string
    slug: string
    price_instructions: {
        approx_size: boolean
        bulk_price: string
        bunch_selector: boolean
        drained_weight: number | null
        increment_bunch_amount: number
        is_new: boolean
        is_pack: boolean
        iva: number | null
        min_bunch_amount: number
        pack_size: number
        previous_unit_price: string | null
        price_decreased: boolean
        reference_format: string
        reference_price: string
        selling_method: number
        size_format: string
        tax_percentage: string
        total_units: number
        unit_name: string
        unit_price: string
        unit_selector: boolean
        unit_size: number
    }
    thumbnail: string
    categories: string[]
    packaging?: string
    is_available: boolean
}

interface MercadonaAlgoliaResponse {
    hits: MercadonaProduct[]
    nbHits: number
    page: number
    nbPages: number
}

/**
 * Mercadona Spain scraper implementation.
 * 
 * Fetches diaper data from Mercadona's Algolia search API.
 */
export const MercadonaScraper: Scraper = {
    retailerName: 'Mercadona',
    country: 'ES',

    scrape: () =>
        pipe(
            Effect.gen(function* () {
                const client = yield* HttpClient.HttpClient

                // Build the base POST request to Algolia
                const baseRequest = HttpClientRequest.post(MERCADONA_ALGOLIA_URL, {
                    urlParams: {
                        'x-algolia-agent': 'Algolia for JavaScript (5.46.3); Search (5.46.3); Browser',
                        'x-algolia-api-key': ALGOLIA_API_KEY,
                        'x-algolia-application-id': ALGOLIA_APP_ID,
                    },
                }).pipe(
                    HttpClientRequest.setHeader('accept', 'application/json'),
                    HttpClientRequest.setHeader('content-type', 'application/json'),
                    HttpClientRequest.setHeader('referer', 'https://tienda.mercadona.es/'),
                )

                // Add JSON body (returns an Effect)
                const request = yield* HttpClientRequest.bodyJson(baseRequest, {
                    query: 'pañales bebé',
                    clickAnalytics: true,
                    analyticsTags: ['web'],
                    getRankingInfo: true,
                    analytics: true,
                    hitsPerPage: 100,
                })

                // Execute request
                const response = yield* client.execute(request)
                const data = (yield* response.json) as MercadonaAlgoliaResponse

                console.log(`Mercadona API returned ${data.hits.length} products`)

                // Map Mercadona products to ScrapedOffer format
                const offers: ScrapedOffer[] = data.hits.map((product) => {
                    // Parse product name to extract details
                    const name = product.display_name

                    // Extract brand
                    const brand = product.brand || 'Mercadona'

                    // Extract size from name (e.g., "Talla 3", "T3")
                    const sizeMatch = name.match(/T(?:alla)?\s*(\d)/i)
                    const size = sizeMatch ? `Talla ${sizeMatch[1]}` : 'Unknown'

                    // Extract weight range
                    const weightMatch = name.match(/\((\d+-\d+\s*kg)\)/i)
                    const weightRange = weightMatch ? weightMatch[1] : 'Unknown'

                    // Extract units from unit_size or fallback to name
                    const unitsPerPackage = product.price_instructions.unit_size ||
                        (() => {
                            const unitsMatch = name.match(/(\d+)\s*(?:ud|unidades?)/i) ||
                                product.packaging?.match(/(\d+)\s*(?:ud|unidades?)/i)
                            return unitsMatch ? parseInt(unitsMatch[1]) : 1
                        })()

                    // Determine if pants or diaper
                    const isPants = name.toLowerCase().includes('pants') ||
                        name.toLowerCase().includes('braguita')
                    const type: 'diaper' | 'pants' = isPants ? 'pants' : 'diaper'

                    // Extract model from name
                    const model = name
                        .replace(brand, '')
                        .replace(/T\d/gi, '')
                        .replace(/\(.*?\)/g, '')
                        .replace(/\d+\s*ud\.?/gi, '')
                        .trim() || 'Standard'

                    return {
                        brand,
                        model,
                        line: '',
                        size,
                        weightRange,
                        unitsPerPackage,
                        type,
                        price: parseFloat(product.price_instructions.unit_price),
                        pricePerUnit: parseFloat(product.price_instructions.reference_price),
                        productUrl: `https://tienda.mercadona.es/product/${product.id}/${product.slug}`,
                        inStock: true,
                    }
                })

                return offers
            }),
            Effect.mapError((error) =>
                new ScraperError('Mercadona', 'Failed to fetch Mercadona API', error)
            ),
            Effect.provide(FetchHttpClient.layer),
        ),
}

export const MercadonaScraperLive = Effect.succeed(MercadonaScraper)
