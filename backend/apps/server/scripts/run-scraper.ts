import { Effect, Layer } from 'effect'
import { MercadonaScraper } from '../src/scrapers/sources/MercadonaScraper'
import { persistOffers } from '../src/scrapers/persistOffers'
import { layer as SqlLayer } from '../src/db/SqlLive'
import { MeilisearchLive } from '../src/services/Meilisearch'
import { initMeilisearch } from '../src/scrapers/syncMeilisearch'

const program = Effect.gen(function* () {
    // Initialize Meilisearch (setup index/settings)
    yield* initMeilisearch()

    console.log(`Running ${MercadonaScraper.retailerName} scraper...`)

    // Scrape offers
    const offers = yield* MercadonaScraper.scrape()
    console.log(`Found ${offers.length} offers`)

    // Persist to database (this now includes Meilisearch sync)
    const result = yield* persistOffers(offers, {
        retailerName: MercadonaScraper.retailerName,
        retailerUrl: 'https://www.mercadona.es',
        country: MercadonaScraper.country,
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
