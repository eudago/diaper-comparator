import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'

import tailwindcss from '@tailwindcss/vite'

const isProduction = process.env.NODE_ENV === 'production'

const config = defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    // Only include devtools in development to reduce memory usage during build
    ...(!isProduction ? [devtools()] : []),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      strategy: ['url'],
    }),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    TanStackRouterVite(),
    viteReact(),
  ],
  build: {
    // Reduce memory usage during build
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Use esbuild for minification (faster than terser)
    minify: 'esbuild',
    // Reduce parallelism to lower memory usage on constrained servers
    rollupOptions: {
      output: {
        // Manual chunking to help with memory during build
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'tanstack-router': ['@tanstack/react-router'],
          'tanstack-query': ['@tanstack/react-query'],
          'search': ['react-instantsearch', 'algoliasearch'],
        },
      },
      // Reduce memory pressure
      maxParallelFileOps: 2,
    },
    // Target modern browsers only to reduce output size
    target: 'esnext',
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    // Force include commonly used deps
    include: ['react', 'react-dom'],
  },
  // Reduce logging overhead in CI/production builds
  logLevel: isProduction ? 'warn' : 'info',
})

export default config