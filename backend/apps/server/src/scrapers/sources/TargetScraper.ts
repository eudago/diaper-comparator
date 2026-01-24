import { Effect, pipe } from 'effect'
import { HttpClient, HttpClientRequest, FetchHttpClient } from '@effect/platform'
import { ScrapedOffer, Scraper, ScraperError } from '../Scraper'


export const TargetScraper: Scraper = {
    retailerName: 'Target',
    country: 'US',

    scrape: () => Effect.succeed([]),
}