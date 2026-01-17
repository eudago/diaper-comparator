
import { boolean, decimal, integer, pgEnum, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { CountryCodeSchema, OfferId, ProductId, ProductTypeSchema, RetailerId } from '@effect-api-example/shared'

export const productTypeEnum = pgEnum('product_type', ProductTypeSchema.literals)
export const countryEnum = pgEnum('country', CountryCodeSchema.literals)

export const products = pgTable('products', {
    id: uuid()
        .$type<ProductId>()
        .primaryKey()
        .defaultRandom(),
    brand: varchar().notNull(),
    model: varchar().notNull(),
    line: varchar().notNull(),
    size: varchar().notNull(),
    weightRange: varchar('weight_range').notNull(),
    unitsPerPackage: integer('units_per_package').notNull(),
    type: productTypeEnum().notNull(),
    country: countryEnum().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
})

export const retailers = pgTable('retailers', {
    id: uuid()
        .$type<RetailerId>()
        .primaryKey()
        .defaultRandom(),
    name: varchar().notNull(),
    url: varchar().notNull(),
    country: countryEnum().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
})

export const offers = pgTable('offers', {
    id: uuid()
        .$type<OfferId>()
        .primaryKey()
        .defaultRandom(),
    productId: uuid('product_id')
        .$type<ProductId>()
        .references(() => products.id)
        .notNull(),
    retailerId: uuid('retailer_id')
        .$type<RetailerId>()
        .references(() => retailers.id)
        .notNull(),
    price: decimal().notNull(), // Assuming price in currency units
    pricePerUnit: decimal('price_per_unit').notNull(),
    productUrl: varchar('product_url').notNull(),
    stock: boolean().notNull(),
    scrapedAt: timestamp('scraped_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
})
