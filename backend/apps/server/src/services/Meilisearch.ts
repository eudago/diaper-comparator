import { Config, Context, Effect, Layer } from 'effect'
import { MeiliSearch } from 'meilisearch'

export interface MeilisearchService {
    readonly client: MeiliSearch
}

export const MeilisearchService = Context.GenericTag<MeilisearchService>('@app/MeilisearchService')

export const MeilisearchLive = Layer.scoped(
    MeilisearchService,
    Effect.gen(function* () {
        const host = yield* Config.string('MEILI_HOST').pipe(Config.withDefault('http://localhost:7700'))
        const apiKey = yield* Config.string('MEILI_MASTER_KEY').pipe(Config.withDefault('masterKey'))

        const client = new MeiliSearch({
            host,
            apiKey,
        })

        return { client }
    })
)
