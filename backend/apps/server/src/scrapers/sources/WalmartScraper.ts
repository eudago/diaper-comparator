import { Effect, pipe } from 'effect'
import { HttpClient, HttpClientRequest, FetchHttpClient } from '@effect/platform'
import { ScrapedOffer, Scraper, ScraperError } from '../Scraper'

const WALMART_API_URL = 'https://www.walmart.com/orchestra/snb/graphql/Search/9e4478d374afbb1fca6a481ce7c86839fd2697949c1e54a79cd96e09a6e6faad/search?variables=%7B%22id%22%3A%22%22%2C%22affinityOverride%22%3A%22store_led%22%2C%22pap%22%3A%22%7B%5C%22polaris%5C%22%3A%7B%5C%22ms_triggered%5C%22%3Atrue%7D%7D%22%2C%22dealsId%22%3A%22%22%2C%22query%22%3A%22diapers%22%2C%22nudgeContext%22%3A%22%22%2C%22page%22%3A2%2C%22prg%22%3A%22desktop%22%2C%22catId%22%3A%22%22%2C%22facet%22%3A%22%22%2C%22sort%22%3A%22best_match%22%2C%22rawFacet%22%3A%22%22%2C%22seoPath%22%3A%22%22%2C%22ps%22%3A40%2C%22limit%22%3A40%2C%22ptss%22%3A%22%22%2C%22trsp%22%3A%22%22%2C%22beShelfId%22%3A%22%22%2C%22recall_set%22%3A%22%22%2C%22module_search%22%3A%22%22%2C%22min_price%22%3A%22%22%2C%22max_price%22%3A%22%22%2C%22storeSlotBooked%22%3A%22%22%2C%22additionalQueryParams%22%3A%7B%22hidden_facet%22%3Anull%2C%22translation%22%3Anull%2C%22isMoreOptionsTileEnabled%22%3Atrue%2C%22isGenAiEnabled%22%3Atrue%2C%22rootDimension%22%3A%22%22%2C%22altQuery%22%3A%22%22%2C%22selectedFilter%22%3A%22%22%2C%22neuralSearchSeeAll%22%3Afalse%2C%22isModuleArrayReq%22%3Afalse%2C%22isLMPBrowsePage%22%3Afalse%7D%2C%22searchArgs%22%3A%7B%22query%22%3A%22diapers%22%2C%22cat_id%22%3A%22%22%2C%22prg%22%3A%22desktop%22%2C%22facet%22%3A%22%22%7D%2C%22ffAwareSearchOptOut%22%3Afalse%2C%22enableDesktopHighlights%22%3Afalse%2C%22enableVolumePricing%22%3Afalse%2C%22enableCopyBlock%22%3Atrue%2C%22enableVariantCount%22%3Afalse%2C%22enableSlaBadgeV2%22%3Afalse%2C%22fitmentFieldParams%22%3A%7B%22powerSportEnabled%22%3Atrue%2C%22dynamicFitmentEnabled%22%3Atrue%2C%22extendedAttributesEnabled%22%3Atrue%2C%22fuelTypeEnabled%22%3Atrue%7D%2C%22fitmentSearchParams%22%3A%7B%22id%22%3A%22%22%2C%22affinityOverride%22%3A%22store_led%22%2C%22pap%22%3A%22%7B%5C%22polaris%5C%22%3A%7B%5C%22ms_triggered%5C%22%3Atrue%7D%7D%22%2C%22dealsId%22%3A%22%22%2C%22query%22%3A%22diapers%22%2C%22nudgeContext%22%3A%22%22%2C%22page%22%3A2%2C%22prg%22%3A%22desktop%22%2C%22catId%22%3A%22%22%2C%22facet%22%3A%22%22%2C%22sort%22%3A%22best_match%22%2C%22rawFacet%22%3A%22%22%2C%22seoPath%22%3A%22%22%2C%22ps%22%3A40%2C%22limit%22%3A40%2C%22ptss%22%3A%22%22%2C%22trsp%22%3A%22%22%2C%22beShelfId%22%3A%22%22%2C%22recall_set%22%3A%22%22%2C%22module_search%22%3A%22%22%2C%22min_price%22%3A%22%22%2C%22max_price%22%3A%22%22%2C%22storeSlotBooked%22%3A%22%22%2C%22additionalQueryParams%22%3A%7B%22hidden_facet%22%3Anull%2C%22translation%22%3Anull%2C%22isMoreOptionsTileEnabled%22%3Atrue%2C%22isGenAiEnabled%22%3Atrue%2C%22rootDimension%22%3A%22%22%2C%22altQuery%22%3A%22%22%2C%22selectedFilter%22%3A%22%22%2C%22neuralSearchSeeAll%22%3Afalse%2C%22isModuleArrayReq%22%3Afalse%2C%22isLMPBrowsePage%22%3Afalse%7D%2C%22searchArgs%22%3A%7B%22query%22%3A%22diapers%22%2C%22cat_id%22%3A%22%22%2C%22prg%22%3A%22desktop%22%2C%22facet%22%3A%22%22%7D%2C%22ffAwareSearchOptOut%22%3Afalse%2C%22enableDesktopHighlights%22%3Afalse%2C%22enableVolumePricing%22%3Afalse%2C%22enableCopyBlock%22%3Atrue%2C%22enableVariantCount%22%3Afalse%2C%22enableSlaBadgeV2%22%3Afalse%2C%22cat_id%22%3A%22%22%2C%22_be_shelf_id%22%3A%22%22%7D%2C%22searchParams%22%3A%7B%22id%22%3A%22%22%2C%22affinityOverride%22%3A%22store_led%22%2C%22pap%22%3A%22%7B%5C%22polaris%5C%22%3A%7B%5C%22ms_triggered%5C%22%3Atrue%7D%7D%22%2C%22dealsId%22%3A%22%22%2C%22query%22%3A%22diapers%22%2C%22nudgeContext%22%3A%22%22%2C%22page%22%3A2%2C%22prg%22%3A%22desktop%22%2C%22catId%22%3A%22%22%2C%22facet%22%3A%22%22%2C%22sort%22%3A%22best_match%22%2C%22rawFacet%22%3A%22%22%2C%22seoPath%22%3A%22%22%2C%22ps%22%3A40%2C%22limit%22%3A40%2C%22ptss%22%3A%22%22%2C%22trsp%22%3A%22%22%2C%22beShelfId%22%3A%22%22%2C%22recall_set%22%3A%22%22%2C%22module_search%22%3A%22%22%2C%22min_price%22%3A%22%22%2C%22max_price%22%3A%22%22%2C%22storeSlotBooked%22%3A%22%22%2C%22additionalQueryParams%22%3A%7B%22hidden_facet%22%3Anull%2C%22translation%22%3Anull%2C%22isMoreOptionsTileEnabled%22%3Atrue%2C%22isGenAiEnabled%22%3Atrue%2C%22rootDimension%22%3A%22%22%2C%22altQuery%22%3A%22%22%2C%22selectedFilter%22%3A%22%22%2C%22neuralSearchSeeAll%22%3Afalse%2C%22isModuleArrayReq%22%3Afalse%2C%22isLMPBrowsePage%22%3Afalse%7D%2C%22searchArgs%22%3A%7B%22query%22%3A%22diapers%22%2C%22cat_id%22%3A%22%22%2C%22prg%22%3A%22desktop%22%2C%22facet%22%3A%22%22%7D%2C%22ffAwareSearchOptOut%22%3Afalse%2C%22enableDesktopHighlights%22%3Afalse%2C%22enableVolumePricing%22%3Afalse%2C%22enableCopyBlock%22%3Atrue%2C%22enableVariantCount%22%3Afalse%2C%22enableSlaBadgeV2%22%3Afalse%2C%22cat_id%22%3A%22%22%2C%22_be_shelf_id%22%3A%22%22%7D%2C%22enableFashionTopNav%22%3Afalse%2C%22enableUnifiedSchema%22%3Afalse%2C%22version%22%3A%22v1%22%2C%22enableRelatedSearches%22%3Atrue%2C%22enablePortableFacets%22%3Atrue%2C%22enableFacetCount%22%3Atrue%2C%22fetchMarquee%22%3Atrue%2C%22fetchSkyline%22%3Atrue%2C%22fetchGallery%22%3Afalse%2C%22fetchSbaTop%22%3Atrue%2C%22fetchSBAV1%22%3Atrue%2C%22fungibilityEnabled%22%3Afalse%2C%22enableAdsPromoData%22%3Afalse%2C%22fetchDac%22%3Atrue%2C%22tenant%22%3A%22WM_GLASS%22%2C%22enableMultiSave%22%3Afalse%2C%22enableInStoreShelfMessage%22%3Afalse%2C%22enableSellerType%22%3Afalse%2C%22enableItemRank%22%3Afalse%2C%22enableOptimisticWeightUpdate%22%3Afalse%2C%22enableAdditionalSearchDepartmentAnalytics%22%3Atrue%2C%22enableFulfillmentTagsEnhacements%22%3Afalse%2C%22enableRxDrugScheduleModal%22%3Afalse%2C%22enablePromoData%22%3Atrue%2C%22enableSignInToSeePrice%22%3Afalse%2C%22enablePromotionMessages%22%3Afalse%2C%22enableItemLimits%22%3Afalse%2C%22enableCanAddToList%22%3Afalse%2C%22enableIsFreeWarranty%22%3Afalse%2C%22enableShopSimilarBottomSheet%22%3Afalse%2C%22adsParams%22%3A%7B%22fungibilityEnabled%22%3Afalse%7D%2C%22pageType%22%3A%22SearchPage%22%7D'

interface WalmartResponse {
    data: {
        search: {
            searchResult: {
                itemStacks: {
                    itemsV2: {
                        canonicalUrl: string
                        catalogProductType: string
                        name: string
                        sellerName: string
                        sellerId: string
                        imageInfo: {
                            thumbnailUrl: string
                        }
                        priceInfo: {
                            currentPrice: {
                                currencyUnit: string
                                price: number
                                priceDisplay: string
                                priceString: string
                                priceType: string
                                supportText: string
                                variantPriceString: string
                            }
                        },
                        unitPrice?: {
                            currencyUnit: string
                            price: number
                            priceDisplay: string
                            priceString: string
                            priceType: string
                            supportText: string
                            variantPriceString: string
                        }
                    }[]
                }[]
            }
        }
    }
}


export const WalmartScraper: Scraper = {
    retailerName: 'Walmart',
    country: 'US',

    scrape: () => pipe(
        Effect.gen(function* () {
            const client = yield* HttpClient.HttpClient

            const baseRequest = HttpClientRequest.get(WALMART_API_URL).pipe(
                HttpClientRequest.setHeaders({
                    'accept': 'application/json',
                    'accept-language': 'en-US',
                    'baggage': "trafficType=customer,deviceType=desktop,renderScope=CSR,webRequestSource=Browser,pageName=searchResults,isomorphicSessionId=3uiLSFNzFzsR8kGyiYs6z,renderViewId=6dc5b45c-1c62-4af6-8da2-491375723fe1,requestTs=1769253186105,tpid=00-188da6661b82e25bda208724181ce56b-ca2463c2319f2d4a-00",
                    'downlink': '10',
                    'traceparent': '00-188da6661b82e25bda208724181ce56b-ca2463c2319f2d4a-00',
                    'wm-client-traceid': '188da61f34b4c15bf43b5bc30c9e8ac5',
                    'tenant-id': 'elh9ie',
                    'wm_page_url': 'https://www.walmart.com/search?q=diapers&typeahead=diapers&page=2&affinityOverride=store_led',
                    'dpr': '1',
                    'priority': 'u=1, i',
                    'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Linux"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'wm_mp': 'true',
                    'wm_qos.correlation_id': 'ImBDUYdm4Dg-wUCS-O-fyZ2cFjW8SnC7VrfW',
                    'x-apollo-operation-name': 'Search',
                    'x-enable-server-timing': '1',
                    'x-latency-trace': '1',
                    'x-o-bu': 'WALMART-US',
                    'x-o-ccm': 'server',
                    'x-o-correlation-id': 'ImBDUYdm4Dg-wUCS-O-fyZ2cFjW8SnC7VrfW',
                    'x-o-gql-query': 'query Search',
                    'x-o-mart': 'B2C',
                    'x-o-platform': 'rweb',
                    'x-o-platform-version': 'usweb-1.238.0-19a15d910bb75de77ae38ba850b631fc69bea9a3-D20644r',
                    'x-o-segment': 'oaoh',
                })
            )

            const response = yield* client.execute(baseRequest)

            const data = (yield* response.json) as WalmartResponse

            console.log(data)

            console.log(`Walmart API returned ${data.data.search.searchResult.itemStacks[0].itemsV2.length} products`)

            return data.data.search.searchResult.itemStacks[0].itemsV2.filter((item) => item.unitPrice !== undefined).map((item) => {
                return {
                    brand: item.sellerName,
                    model: item.name,
                    line: '',
                    size: '',
                    weightRange: '',
                    unitsPerPackage: 1,
                    type: 'diaper' as const,
                    price: item.priceInfo.currentPrice.price,
                    pricePerUnit: item.unitPrice!.price,
                    productUrl: `https://www.walmart.com/${item.canonicalUrl}`,
                    inStock: true,
                    imageUrl: item.imageInfo.thumbnailUrl
                }
            })

        }),
        Effect.mapError((error) =>
            new ScraperError('Walmart', 'Failed to fetch Walmart API', error)
        ),
        Effect.provide(FetchHttpClient.layer),
    )
}