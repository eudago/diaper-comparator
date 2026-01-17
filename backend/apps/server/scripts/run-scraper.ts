import { Effect, Layer } from 'effect'
import { CarrefourScraper } from '../src/scrapers'
import { persistOffers } from '../src/scrapers/persistOffers'
import { layer as SqlLayer } from '../src/db/SqlLive'

const program = Effect.gen(function* () {
    console.log(`Running ${CarrefourScraper.retailerName} scraper...`)

    // Scrape offers
    const offers = yield* CarrefourScraper.scrape()
    console.log(`Found ${offers.length} offers`)

    // Persist to database
    const result = yield* persistOffers(offers, {
        retailerName: CarrefourScraper.retailerName,
        retailerUrl: 'https://www.carrefour.es',
        country: CarrefourScraper.country,
    })

    console.log(`Done! Created ${result.productsCreated} products, ${result.offersCreated} offers`)
})

// Provide the SQL layer and run
Effect.runPromise(
    program.pipe(Effect.provide(SqlLayer))
)
    .then(() => console.log('Scraper completed successfully!'))
    .catch(console.error)
