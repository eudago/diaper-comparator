import { Effect, pipe } from 'effect'
import { HttpClient, HttpClientRequest, FetchHttpClient } from '@effect/platform'
import { ScrapedOffer, Scraper, ScraperError } from '../Scraper'


interface CostcoResponse {
    response: {
        docs: {
          item_product_name: string
          item_short_description: string
          item_location_pricing_pricePerUnit_price: number
          item_location_pricing_salePrice: number
          image: string
          Diaper_Size_attr: string[] // "4 (22-37 lb/10-17 kg)"
        }
    }
}

const TARGET_API_URL = 'https://search.costco.com/api/apps/www_costco_com/query/www_costco_com_navigation?expoption=lws&q=*%3A*&locale=en-US&start=0&expand=false&userLocation=WA&loc=115-bd%2C1-wh%2C1250-3pl%2C1321-wm%2C1456-3pl%2C283-wm%2C561-wm%2C725-wm%2C731-wm%2C758-wm%2C759-wm%2C847_0-cor%2C847_0-cwt%2C847_0-edi%2C847_0-ehs%2C847_0-membership%2C847_0-mpt%2C847_0-spc%2C847_0-wm%2C847_1-cwt%2C847_1-edi%2C847_d-fis%2C847_lg_n1f-edi%2C847_lux_us01-edi%2C847_NA-cor%2C847_NA-pharmacy%2C847_NA-wm%2C847_ss_u362-edi%2C847_wp_r458-edi%2C951-wm%2C952-wm%2C9847-wcs&whloc=1-wh&rows=24&url=%2Fdiapers.html&fq=item_location_availability:(%22in%20stock%22)&chdcategory=true&chdheader=true'

export const CostcoScraper: Scraper = {
    retailerName: 'Costco',
    country: 'US',

    scrape: () => pipe(
        Effect.gen(function* () {
            const client = yield* HttpClient.HttpClient
            const response = yield* client.execute(HttpClientRequest.get(TARGET_API_URL))
            const data = (yield* response.json) as CostcoResponse

            return data.data.search.products
                .filter(p => p.item?.enrichment)
                .map((product) => ({
                    brand: product.item.primary_brand.name,
                    model: product.item.product_description.title,
                    line: '',
                    size: '',
                    price: product.price.current_retail,
                    priceCurrency: 'USD',
                    priceFormatted: product.price.formatted_current_price,
                    unitPrice: product.price.formatted_unit_price,
                    unitPriceSuffix: product.price.formatted_unit_price_suffix,
                    productUrl: product.item.enrichment.buy_url,
                    imageUrl: product.item.enrichment.image_info.primary_image.url,
                }))
        }),
        Effect.mapError((error) => new ScraperError('Costco', 'Failed to fetch Costco API', error)),
        Effect.provide(FetchHttpClient.layer)
    )
}
