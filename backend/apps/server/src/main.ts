import { HttpApiBuilder, HttpApiScalar, HttpLayerRouter, HttpMiddleware, HttpServer, HttpServerResponse, OpenApi, FileSystem, HttpServerRequest } from '@effect/platform'
import { BunHttpServer, BunRuntime, BunFileSystem } from '@effect/platform-bun'
import * as NodePath from 'node:path'
import { WarpApi } from '@effect-api-example/api/definition'
import { Layer, Effect } from 'effect'
import * as SqlLive from './db/SqlLive'
import { HttpGroupsLive } from './api/groups'
import { ApiKeyAuthMiddlewareLive } from './api/middleware/ApiKeyAuthMiddlewareLive'
import { NodeSdk } from '@effect/opentelemetry'
import { BatchSpanProcessor, ConsoleSpanExporter } from '@opentelemetry/sdk-trace-base'


// The Live implementation of the API groups has a dependency on
// `PGDrizzle`, so we provide it here
const ApiImplementationLive = HttpGroupsLive.pipe(
    Layer.provide(SqlLive.layer)
)

// `WarpApi` requires an implementation, so we provide that here
const HttpApiRoutes = HttpLayerRouter.addHttpApi(WarpApi).pipe(
    Layer.provide(ApiImplementationLive),
)

// expose swagger docs  at /docs
const DocsRoute = HttpApiScalar.layerHttpLayerRouter({
    api: WarpApi,
    path: '/docs',
})

// expose openapi schema
const OpenApiJsonRoute = HttpLayerRouter.add(
    'GET',
    '/docs/openapi.json',
    HttpServerResponse.json(OpenApi.fromApi(WarpApi)),
).pipe(Layer.provide(HttpLayerRouter.layer))

// Serve static files from 'public' directory
const StaticFileRoute = HttpLayerRouter.add(
    'GET',
    '/*',
    Effect.gen(function* (_) {
        const req = yield* _(HttpServerRequest.HttpServerRequest)
        const fs = yield* _(FileSystem.FileSystem)

        const url = new URL(req.url, 'http://localhost')
        const path = url.pathname === '/' ? '/index.html' : url.pathname

        // Determine file path in 'public' directory
        // Resolve path relative to process.cwd() which should be /app in docker
        const filePath = NodePath.resolve(process.cwd(), 'public', path.replace(/^\/+/, ''))

        // Check availability and serve file
        if (yield* _(fs.exists(filePath))) {
            return yield* _(HttpServerResponse.file(filePath))
        }

        // SPA Fallback: serve index.html if file not found
        // Useful for client-side routing
        const indexPath = NodePath.resolve(process.cwd(), 'public', 'index.html')
        if (yield* _(fs.exists(indexPath))) {
            return yield* _(HttpServerResponse.file(indexPath))
        }

        // Log error if file not found (helpful for debugging)
        yield* _(Effect.logError(`Static file not found: ${filePath}`))

        return HttpServerResponse.empty({ status: 404 })
    })
).pipe(Layer.provide(HttpLayerRouter.layer))


// merge all routes
const AllRoutes = Layer.mergeAll(
    HttpApiRoutes,
    DocsRoute,
    OpenApiJsonRoute,
    StaticFileRoute,
).pipe(Layer.provide(HttpLayerRouter.cors()))

/*
 * Tracing
 * @see {https://effect.website/docs/observability/tracing/}
 */
const OTELNodeSdk = NodeSdk.layer(() => ({
    resource: { serviceName: 'warp-api' },
    spanProcessor: new BatchSpanProcessor(new ConsoleSpanExporter())
}))


// run the server
const ServerLive = HttpLayerRouter.serve(AllRoutes).pipe(
    Layer.provide(BunHttpServer.layer({ port: 3050 })),
    Layer.provide(OTELNodeSdk),
    Layer.provide(BunFileSystem.layer)
)

BunRuntime.runMain(Layer.launch(ServerLive))
