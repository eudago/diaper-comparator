import { Effect, Layer } from 'effect'
import { CarrefourScraper, MercadonaScraper } from '../src/scrapers'
import { persistOffers } from '../src/scrapers/persistOffers'
import { layer as SqlLayer } from '../src/db/SqlLive'

const program = Effect.gen(function* () {
    console.log(`Running ${MercadonaScraper.retailerName} scraper...`)

    // Scrape offers
    const offers = yield* MercadonaScraper.scrape()
    console.log(`Found ${offers.length} offers`)

    // Persist to database
    const result = yield* persistOffers(offers, {
        retailerName: MercadonaScraper.retailerName,
        retailerUrl: 'https://www.mercadona.es',
        country: MercadonaScraper.country,
    })

    console.log(`Done! Created ${result.productsCreated} products, ${result.offersCreated} offers`)
})

// Provide the SQL layer and run
Effect.runPromise(
    program.pipe(Effect.provide(SqlLayer))
)
    .then(() => console.log('Scraper completed successfully!'))
    .catch(console.error)
