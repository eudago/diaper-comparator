import { Effect, pipe } from 'effect'
import { HttpClient, HttpClientRequest, FetchHttpClient } from '@effect/platform'
import { ScrapedOffer, Scraper, ScraperError } from '../Scraper'


interface TargetResponse {
    data: {
        search: {
            products: {
                item: {
                    enrichment: {
                        buy_url: string
                        image_info: {
                            primary_image: {
                                url: string
                            }
                        }
                    },
                    primary_brand: {
                        name: string
                    },
                    product_description: {
                        title: string
                    }
                },
                price: {
                    current_retail: number
                    display_was_now: boolean
                    formatted_current_price: string
                    formatted_current_price_type: string
                    formatted_unit_price: string
                    formatted_unit_price_suffix: string
                    location_id: number
                    reg_retail: number
                }
            }[]
        }
    }
}

const TARGET_API_URL = 'https://redsky.target.com/redsky_aggregations/v1/web/plp_search_v2?category=62fox&count=24&default_purchasability_filter=true&include_sponsored=true&include_review_summarization=true&offset=0&page=%2Fc%2F62fox&platform=desktop&pricing_store_id=1771&spellcheck=true&store_ids=1771%2C1768%2C1113%2C3374%2C1792&visitor_id=019BE1EF1AD50200B1E9B7C40F39A12F&scheduled_delivery_store_id=1771&zip=52404&key=9f36aeafbe60771e321a7cc95a78140772ab3e96&channel=WEB&include_dmc_dmr=true&useragent=Mozilla%2F5.0+%28X11%3B+Linux+x86_64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F144.0.0.0+Safari%2F537.36'

export const TargetScraper: Scraper = {
    retailerName: 'Target',
    country: 'US',

    scrape: () => pipe(
        Effect.gen(function* () {
            const client = yield* HttpClient.HttpClient
            const response = yield* client.execute(HttpClientRequest.get(TARGET_API_URL))
            const data = (yield* response.json) as TargetResponse
            console.log('Target API Sample Product:', JSON.stringify(data.data.search.products[0], null, 2))

            return data.data.search.products
                .filter(p => p.item?.enrichment)
                .map((product) => ({
                    brand: product.item.primary_brand.name,
                    model: product.item.product_description.title,
                    line: '',
                    size: '',
                    weightRange: '',
                    unitsPerPackage: 0,
                    type: 'diaper' as const,
                    price: product.price.current_retail,
                    pricePerUnit: parseFloat(product.price.formatted_unit_price?.replace(/[^0-9.]/g, '')),
                    productUrl: product.item.enrichment.buy_url,
                    imageUrl: product.item.enrichment.image_info.primary_image.url,
                    inStock: true,
                }))
        }),
        Effect.mapError((error) => new ScraperError('Target', 'Failed to fetch Target API', error)),
        Effect.provide(FetchHttpClient.layer)
    )
}
