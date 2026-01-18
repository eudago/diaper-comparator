import { Effect, pipe } from 'effect'
import { HttpClient, HttpClientRequest, FetchHttpClient } from '@effect/platform'
import { ScrapedOffer, Scraper, ScraperError } from './Scraper'

const CARREFOUR_API_URL = 'https://www.carrefour.es/cloud-api/plp-food-papi/v1/supermercado/bebe/panales/cat20050/c'

interface CarrefourBadge {
    description: string
    name: string
    priority: number
    url: string
}

interface CarrefourPromotion {
    badge_type: string
    color: string
    end_date: string
    icon: string
    link: string
    name: string
    pdp_text: string
    priority: number
    start_date: string
    text_color: string
}

interface CarrefourBadgeMap {
    promotions?: CarrefourPromotion[]
}

interface CarrefourImages {
    desktop: string
    mobile: string
}

interface CarrefourItem {
    app_price: string
    app_price_per_unit: string
    badge?: CarrefourBadge
    badge_map?: CarrefourBadgeMap
    catalog: string
    document_type: string
    images: CarrefourImages
    measure_unit: string
    name: string
    price: string
    price_per_unit: string
    product_id: string
    sell_pack_unit: number
    sku_id: string
    units_in_stock: number
    url: string
}

interface CarrefourApiResponse {
    results: {
        items: CarrefourItem[]
    }
}

/**
 * Carrefour Spain scraper implementation.
 * 
 * Fetches diaper data from the Carrefour API and maps to ScrapedOffer format.
 */
export const CarrefourScraper: Scraper = {
    retailerName: 'Carrefour',
    country: 'ES',

    scrape: () =>
        pipe(
            Effect.gen(function* () {
                // Get the HttpClient service
                const client = yield* HttpClient.HttpClient

                // Build the request
                const request = HttpClientRequest.get(CARREFOUR_API_URL, {
                    urlParams: {
                        offset: '0',
                        platform: 'Desktop',
                        _maxreflevel: '3',
                        preview: 'false',
                    },
                })

                // Execute the request
                const response = yield* client.execute(request)

                // Get JSON response
                const data = (yield* response.json) as CarrefourApiResponse

                const items: CarrefourItem[] = data.results.items

                // Map Carrefour items to ScrapedOffer format
                const offers: ScrapedOffer[] = items.map((item) => {
                    // Parse price string (e.g., "14,05 €" -> 14.05)
                    const parsePrice = (priceStr: string): number => {
                        const cleaned = priceStr.replace('€', '').replace(',', '.').trim()
                        return parseFloat(cleaned) || 0
                    }

                    // Parse product name to extract details
                    // Example: "Pañales ultra dry Carrefour Baby T4 (7-18 kg) 92 ud."
                    const name = item.name

                    // Extract brand (common brands: Dodot, Huggies, Carrefour Baby, etc.)
                    const brandPatterns = ['Dodot', 'Huggies', 'Carrefour Baby', 'Pampers', 'Chelino']
                    const brand = brandPatterns.find(b => name.includes(b)) || 'Unknown'

                    // Extract size/talla (T0, T1, T2, T3, T4, T5, T6 or Talla X)
                    const sizeMatch = name.match(/T(\d)|Talla\s*(\d)/i)
                    const size = sizeMatch ? `Talla ${sizeMatch[1] || sizeMatch[2]}` : 'Unknown'

                    // Extract weight range (e.g., "(7-18 kg)")
                    const weightMatch = name.match(/\((\d+-\d+\s*kg)\)/i)
                    const weightRange = weightMatch ? weightMatch[1] : 'Unknown'

                    // Extract units (e.g., "92 ud.")
                    const unitsMatch = name.match(/(\d+)\s*ud/i)
                    const unitsPerPackage = unitsMatch ? parseInt(unitsMatch[1]) : 1

                    // Determine if pants or diaper
                    const isPants = name.toLowerCase().includes('pants') || name.toLowerCase().includes('braguita')
                    const type: 'diaper' | 'pants' = isPants ? 'pants' : 'diaper'

                    // Extract model/line from name (simplified)
                    const model = name.replace(brand, '').replace(/T\d/g, '').replace(/\(.*?\)/g, '').replace(/\d+\s*ud\.?/gi, '').trim()

                    return {
                        brand,
                        model: model || 'Standard',
                        line: '', // Would need more parsing or API data
                        size,
                        weightRange,
                        unitsPerPackage,
                        type,
                        price: parsePrice(item.price),
                        pricePerUnit: parsePrice(item.price_per_unit),
                        productUrl: `https://www.carrefour.es${item.url}`,
                        inStock: item.units_in_stock > 0,
                    }
                })

                return offers
            }),
            // Handle errors
            Effect.mapError((error) =>
                new ScraperError('Carrefour', 'Failed to fetch Carrefour API', error)
            ),
            // Provide the FetchHttpClient layer
            Effect.provide(FetchHttpClient.layer),
        ),
}

/**
 * Creates the Carrefour scraper Effect Layer.
 * Use this to provide the scraper as a dependency.
 */
export const CarrefourScraperLive = Effect.succeed(CarrefourScraper)
