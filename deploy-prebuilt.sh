#!/bin/bash

# =============================================================================
# Deploy script for pre-built frontend approach
# Use this when your server has limited resources for building the frontend
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Diaper Comparator - Pre-built Deploy Script ===${NC}"
echo ""

# Step 1: Build frontend locally
echo -e "${YELLOW}Step 1: Building frontend locally...${NC}"
cd frontend
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    pnpm install
fi
pnpm build
cd ..

# Verify frontend build exists
if [ ! -d "frontend/dist" ]; then
    echo -e "${RED}Error: frontend/dist not found. Build failed.${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Frontend built successfully${NC}"
echo ""

# Step 2: Swap dockerignore
echo -e "${YELLOW}Step 2: Configuring .dockerignore for prebuilt...${NC}"
if [ -f ".dockerignore" ]; then
    cp .dockerignore .dockerignore.backup
fi
cp .dockerignore.prebuilt .dockerignore
echo -e "${GREEN}✓ .dockerignore configured${NC}"
echo ""

# Step 3: Build and run with docker compose
echo -e "${YELLOW}Step 3: Building and starting Docker containers...${NC}"
docker compose -f docker-compose.prebuilt.yml up --build -d

# Step 4: Restore original dockerignore
echo -e "${YELLOW}Step 4: Restoring original .dockerignore...${NC}"
if [ -f ".dockerignore.backup" ]; then
    mv .dockerignore.backup .dockerignore
fi
echo -e "${GREEN}✓ .dockerignore restored${NC}"
echo ""

# Done
echo -e "${GREEN}=== Deployment complete! ===${NC}"
echo -e "App running at: http://localhost:3050"
echo ""
echo "Useful commands:"
echo "  docker compose -f docker-compose.prebuilt.yml logs -f    # View logs"
echo "  docker compose -f docker-compose.prebuilt.yml down       # Stop containers"
echo "  docker compose -f docker-compose.prebuilt.yml restart    # Restart"