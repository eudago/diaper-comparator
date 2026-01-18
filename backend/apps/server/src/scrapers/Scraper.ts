import { Effect, Context } from 'effect'

/**
 * Represents a scraped offer from a retailer.
 * This is the raw data before being inserted into the database.
 */
export interface ScrapedOffer {
    /** Product brand (e.g., "Dodot") */
    brand: string
    /** Product model (e.g., "Sensitive") */
    model: string
    /** Product line (e.g., "Activity") */
    line: string
    /** Product size (e.g., "Talla 3") */
    size: string
    /** Weight range (e.g., "6-10 kg") */
    weightRange: string
    /** Units per package */
    unitsPerPackage: number
    /** Product type */
    type: 'diaper' | 'pants'
    /** Price in currency units (e.g., euros) */
    price: number
    /** Price per unit */
    pricePerUnit: number
    /** URL to the product page */
    productUrl: string
    /** Whether the product is in stock */
    inStock: boolean
    /** URL to the product image */
    imageUrl?: string
}

/**
 * Error that can occur during scraping.
 */
export class ScraperError extends Error {
    readonly _tag = 'ScraperError'
    constructor(
        readonly retailer: string,
        readonly reason: string,
        readonly cause?: unknown
    ) {
        super(`[${retailer}] Scraper error: ${reason}`)
    }
}

/**
 * Base interface for all scrapers.
 * Each scraper implementation should provide a `scrape` method.
 */
export interface Scraper {
    readonly retailerName: string
    readonly country: 'ES' | 'US'
    /**
     * Scrapes the retailer website for diaper offers.
     * Returns an Effect that yields an array of scraped offers.
     */
    scrape: () => Effect.Effect<ScrapedOffer[], ScraperError>
}

/**
 * Context tag for the Scraper service.
 */
export class ScraperService extends Context.Tag('ScraperService')<
    ScraperService,
    Scraper
>() { }
