# Stage 1: Build Frontend
FROM oven/bun:latest AS frontend-builder
WORKDIR /app/frontend

# Copy frontend configuration files
COPY frontend/package.json frontend/pnpm-lock.yaml* ./

# Install dependencies
RUN bun install

# Copy frontend source code
COPY frontend .

# Build the frontend
RUN bun run build

# Stage 2: Build Backend
FROM oven/bun:latest AS backend-builder
WORKDIR /app/backend

# Copy backend source code first
# This ensures bun install has full context of all workspace packages
COPY backend .

# Install dependencies
RUN bun install

# Build the server
WORKDIR /app/backend/apps/server
RUN bun run build

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
