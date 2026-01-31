# Stage 1: Build Frontend
FROM node:20-slim AS frontend-builder
WORKDIR /app/frontend

# Enable pnpm
RUN corepack enable

# Copy frontend configuration files
COPY frontend/package.json frontend/pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy frontend source code
COPY frontend .

# Build the frontend with aggressive memory limits to prevent hanging on low-resource servers
# - max-old-space-size: Limit V8 heap memory to 512MB
# - Disable source maps generation
# - Set production mode explicitly
ENV NODE_OPTIONS="--max-old-space-size=512"
ENV NODE_ENV=production
ENV GENERATE_SOURCEMAP=false

# Run build with reduced parallelism
RUN node --max-old-space-size=512 ./node_modules/vite/bin/vite.js build

# Stage 2: Build Backend
FROM node:20-slim AS backend-builder
WORKDIR /app/backend

# Install bun (needed for building) and pnpm
RUN npm install -g bun pnpm

# Copy backend source code
COPY backend .

# Install dependencies using pnpm (respects pnpm-lock.yaml and workspaces)
RUN pnpm install --frozen-lockfile

# Build the workspace (dependencies first, then server)
RUN pnpm run build

# Stage 3: Production Runner
FROM oven/bun:latest
WORKDIR /app

# Copy the bundled server
COPY --from=backend-builder /app/backend/apps/server/dist/main.js ./server.js

# Copy the built frontend static files to 'public' directory
COPY --from=frontend-builder /app/frontend/dist ./public

# Set environment variable for port (optional, as main.ts has 3050 hardcoded but good practice)
ENV PORT=3050

# Expose the port
EXPOSE 3050

# Command to run the server
CMD ["bun", "server.js"]