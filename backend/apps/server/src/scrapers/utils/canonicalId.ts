import { ScrapedOffer } from '../Scraper'

// Namespace UUID for product IDs (randomly generated, fixed for this app)
const PRODUCT_NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'

/**
 * Normalizes text by:
 * - Converting to lowercase
 * - Removing accents/diacritics
 * - Replacing spaces with underscores
 * - Removing special characters except underscores
 */
export function normalizeText(str: string): string {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .replace(/[^a-z0-9_]/g, '') // Remove special characters
        .trim()
}

/**
 * Generates a deterministic UUID v5 from a namespace and name.
 * Uses SHA-1 hash (per UUID v5 spec) and formats as UUID.
 */
async function uuidV5(namespace: string, name: string): Promise<string> {
    // Parse namespace UUID to bytes
    const namespaceHex = namespace.replace(/-/g, '')
    const namespaceBytes = new Uint8Array(16)
    for (let i = 0; i < 16; i++) {
        namespaceBytes[i] = parseInt(namespaceHex.substring(i * 2, i * 2 + 2), 16)
    }

    // Combine namespace + name
    const encoder = new TextEncoder()
    const nameBytes = encoder.encode(name)
    const combined = new Uint8Array(namespaceBytes.length + nameBytes.length)
    combined.set(namespaceBytes)
    combined.set(nameBytes, namespaceBytes.length)

    // Create SHA-1 hash using Web Crypto API (available in Bun)
    const hashBuffer = await crypto.subtle.digest('SHA-1', combined)
    const hashArray = new Uint8Array(hashBuffer)

    // Convert to hex
    const hash = Array.from(hashArray).map(b => b.toString(16).padStart(2, '0')).join('')

    // Format as UUID v5: set version (5) and variant bits
    const uuid = [
        hash.substring(0, 8),
        hash.substring(8, 12),
        '5' + hash.substring(13, 16), // Version 5
        ((parseInt(hash.substring(16, 18), 16) & 0x3f) | 0x80).toString(16).padStart(2, '0') + hash.substring(18, 20), // Variant
        hash.substring(20, 32),
    ].join('-')

    return uuid
}

/**
 * Generates a canonical product ID from a scraped offer.
 * The ID is deterministic based on: brand, type, size, units, country.
 * 
 * Same product from different retailers will get the same ID.
 */
export async function generateProductId(offer: ScrapedOffer, country: 'ES' | 'US'): Promise<string> {
    const parts = [
        normalizeText(offer.brand),
        offer.type, // Already 'diaper' or 'pants'
        normalizeText(offer.size),
        String(offer.unitsPerPackage),
        country.toLowerCase(),
    ]

    const canonicalString = parts.join('|')
    console.log(`Canonical string: ${canonicalString}`)

    return await uuidV5(PRODUCT_NAMESPACE, canonicalString)
}

/**
 * Generates a canonical retailer ID from name and country.
 */
export async function generateRetailerId(name: string, country: 'ES' | 'US'): Promise<string> {
    const canonicalString = `${normalizeText(name)}|${country.toLowerCase()}`
    return await uuidV5(PRODUCT_NAMESPACE, canonicalString)
}
