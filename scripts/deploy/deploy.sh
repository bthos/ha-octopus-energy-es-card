#!/bin/bash

# Deploy script for Octopus Energy España Consumption Card bundle
# Copies the bundle file to Home Assistant server via SSH

# Get script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

# Load environment variables from .env file
if [ -f "$ENV_FILE" ]; then
    # Read .env file and export variables (handles comments and empty lines)
    # Compatible with Git Bash on Windows
    while IFS='=' read -r key value || [ -n "$key" ]; do
        # Skip comments and empty lines
        if [[ "$key" =~ ^[[:space:]]*# ]] || [[ -z "${key// }" ]]; then
            continue
        fi
        # Remove leading/trailing whitespace
        key=$(echo "$key" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
        value=$(echo "$value" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | sed "s/^['\"]//;s/['\"]$//")
        # Export variable if key is not empty
        if [ -n "$key" ]; then
            export "$key=$value"
        fi
    done < "$ENV_FILE"
else
    echo "Error: .env file not found at $ENV_FILE"
    echo "Please copy .env.example to .env and configure it."
    exit 1
fi

# Configuration from .env
HOST="${DEPLOY_HOST}"
USER="${DEPLOY_USER}"
PASS="${DEPLOY_PASSWORD}"
REMOTE_PATH="${DEPLOY_REMOTE_PATH}"
BUNDLE_FILE="${PROJECT_ROOT}/${DEPLOY_BUNDLE_FILE}"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Deploying bundle to Home Assistant...${NC}"

# Check if bundle file exists
if [ ! -f "$BUNDLE_FILE" ]; then
    echo -e "${RED}Error: Bundle file not found at $BUNDLE_FILE${NC}"
    echo "Please run 'npm run build' first to create the bundle."
    exit 1
fi

# Display file info
FILE_SIZE=$(ls -lh "$BUNDLE_FILE" | awk '{print $5}')
echo -e "Bundle file: ${GREEN}$BUNDLE_FILE${NC} (${FILE_SIZE})"
echo -e "Target: ${GREEN}${USER}@${HOST}:${REMOTE_PATH}/octopus-consumption-card.bundle.js${NC}"
echo ""

# Check if password is set
if [ -z "$PASS" ]; then
    echo -e "${RED}Error: Password not set!${NC}"
    echo ""
    echo "Please set DEPLOY_PASSWORD in $ENV_FILE"
    exit 1
fi

# Find Python command
PYTHON_CMD=""
if command -v python3 >/dev/null 2>&1 && python3 --version >/dev/null 2>&1; then
    PYTHON_CMD="python3"
elif command -v python >/dev/null 2>&1; then
    if python --version >/dev/null 2>&1 && ! python --version 2>&1 | grep -q "Microsoft Store"; then
        PYTHON_CMD="python"
    fi
fi

# Deploy using Python script
if [ -z "$PYTHON_CMD" ]; then
    echo -e "${RED}Error: Python not found!${NC}"
    echo ""
    echo "Please install Python 3 to use this deployment script."
    exit 1
fi

if [ ! -f "$SCRIPT_DIR/deploy_scp.py" ]; then
    echo -e "${RED}Error: deploy_scp.py not found!${NC}"
    exit 1
fi

cd "$PROJECT_ROOT"
if $PYTHON_CMD "$SCRIPT_DIR/deploy_scp.py"; then
    echo -e "${GREEN}✓ Bundle successfully deployed!${NC}"
    echo ""
    echo "Next steps:"
    echo "  1. Refresh your Home Assistant dashboard"
    echo "  2. Or reload the card resources in Developer Tools"
    exit 0
else
    echo -e "${RED}✗ Deployment failed!${NC}"
    echo ""
    echo "Troubleshooting:"
    echo "  - Verify password is correct in $ENV_FILE"
    echo "  - Check SSH connection: ssh ${USER}@${HOST}"
    echo "  - Verify remote path exists: ${REMOTE_PATH}"
    echo "  - Check file permissions"
    exit 1
fi
