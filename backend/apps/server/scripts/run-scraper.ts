import { Effect, Layer } from 'effect'
import { WalmartScraper } from '../src/scrapers/sources/WalmartScraper'
import { persistOffers } from '../src/scrapers/persistOffers'
import { layer as SqlLayer } from '../src/db/SqlLive'
import { MeilisearchLive } from '../src/services/Meilisearch'
import { initMeilisearch } from '../src/scrapers/syncMeilisearch'

const program = Effect.gen(function* () {
    // Initialize Meilisearch (setup index/settings)
    yield* initMeilisearch()

    const scraper = WalmartScraper

    console.log(`Running ${scraper.retailerName} scraper...`)

    // Scrape offers
    const offers = yield* scraper.scrape()
    console.log(`Found ${offers.length} offers`)

    // Persist to database (this now includes Meilisearch sync)
    const result = yield* persistOffers(offers, {
        retailerName: scraper.retailerName,
        retailerUrl: 'https://www.walmart.com',
        country: scraper.country,
    })

    console.log(`Done! Created ${result.productsCreated} products, ${result.offersCreated} offers`)
})

// Provide the layers and run
const MainLayer = Layer.mergeAll(SqlLayer, MeilisearchLive)

Effect.runPromise(
    program.pipe(Effect.provide(MainLayer))
)
    .then(() => console.log('Scraper completed successfully!'))
    .catch(console.error)
