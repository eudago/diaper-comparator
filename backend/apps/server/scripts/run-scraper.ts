import { Effect } from 'effect'
import { CarrefourScraper } from '../src/scrapers'
const program = Effect.gen(function* () {
    console.log(`Running ${CarrefourScraper.retailerName} scraper...`)
    const offers = yield* CarrefourScraper.scrape()
    console.log(`Found ${offers.length} offers:`)
    console.log(JSON.stringify(offers, null, 2))
})
Effect.runPromise(program)
    .then(() => console.log('Done!'))
    .catch(console.error)
