import { Effect, Layer } from 'effect'
import { layer as SqlLayer } from '../src/db/SqlLive'
import { MeilisearchLive } from '../src/services/Meilisearch'
import { initMeilisearch, syncProductsToMeilisearch } from '../src/scrapers/syncMeilisearch'
import * as PgDrizzle from '@effect/sql-drizzle/Pg'
import { products } from '../src/db/schema/products'

const program = Effect.gen(function* () {
    // Initialize Meilisearch (setup index/settings)
    yield* initMeilisearch()

    const db = yield* PgDrizzle.PgDrizzle

    console.log('Fetching all products from database...')
    const allProducts = yield* Effect.tryPromise(() =>
        db.select({ id: products.id }).from(products)
    )

    console.log(`Syncing ${allProducts.length} products to Meilisearch...`)
    yield* syncProductsToMeilisearch(allProducts.map((p) => p.id))
})

// Provide the layers and run
const MainLayer = Layer.mergeAll(SqlLayer, MeilisearchLive)

Effect.runPromise(
    program.pipe(Effect.provide(MainLayer))
)
    .then(() => console.log('Sync completed successfully!'))
    .catch(console.error)
