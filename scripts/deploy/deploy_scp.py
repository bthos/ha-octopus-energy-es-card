#!/usr/bin/env python3
"""
Simple SCP deployment script using paramiko for password authentication
Reads configuration from .env file
"""

import sys
import os
from pathlib import Path

# Get script directory and project root
SCRIPT_DIR = Path(__file__).parent.absolute()
PROJECT_ROOT = SCRIPT_DIR.parent.parent
ENV_FILE = SCRIPT_DIR / ".env"

def load_env_file(env_path):
    """Load environment variables from .env file"""
    env_vars = {}
    if not env_path.exists():
        print(f"Error: .env file not found at {env_path}")
        print("Please copy .env.example to .env and configure it.")
        sys.exit(1)
    
    with open(env_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            # Skip comments and empty lines
            if not line or line.startswith('#'):
                continue
            # Parse KEY=VALUE
            if '=' in line:
                key, value = line.split('=', 1)
                key = key.strip()
                value = value.strip().strip('"').strip("'")
                env_vars[key] = value
    
    return env_vars

try:
    import paramiko
except ImportError:
    print("Error: paramiko module not found. Installing...")
    os.system(f"{sys.executable} -m pip install paramiko --quiet")
    import paramiko

def deploy_file(local_file, remote_host, remote_user, remote_password, remote_path):
    """Deploy file via SCP with password authentication"""
    
    local_file_path = PROJECT_ROOT / local_file
    
    if not local_file_path.exists():
        print(f"Error: File not found: {local_file_path}")
        return False
    
    try:
        # Create SSH client
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        
        # Connect with password
        print(f"Connecting to {remote_user}@{remote_host}...")
        ssh.connect(
            hostname=remote_host,
            username=remote_user,
            password=remote_password,
            timeout=10
        )
        
        # Use SFTP to transfer file
        print(f"Transferring {local_file_path.name}...")
        sftp = ssh.open_sftp()
        sftp.put(str(local_file_path), remote_path)
        sftp.close()
        
        ssh.close()
        print("Success: File transferred successfully!")
        return True
        
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    # Load configuration from .env file
    env_vars = load_env_file(ENV_FILE)
    
    # Configuration from .env
    HOST = env_vars.get("DEPLOY_HOST", "")
    USER = env_vars.get("DEPLOY_USER", "")
    PASS = env_vars.get("DEPLOY_PASSWORD", "")
    REMOTE_PATH = env_vars.get("DEPLOY_REMOTE_PATH", "")
    BUNDLE_FILE = env_vars.get("DEPLOY_BUNDLE_FILE", "")
    
    # Allow override via environment variables
    if os.getenv("SSH_PASS"):
        PASS = os.getenv("SSH_PASS")
    
    # Validate configuration
    if not all([HOST, USER, PASS, REMOTE_PATH, BUNDLE_FILE]):
        print("Error: Missing required configuration in .env file")
        print("Required: DEPLOY_HOST, DEPLOY_USER, DEPLOY_PASSWORD, DEPLOY_REMOTE_PATH, DEPLOY_BUNDLE_FILE")
        sys.exit(1)
    
    REMOTE_FILE = f"{REMOTE_PATH}/octopus-consumption-card.bundle.js"
    
    success = deploy_file(BUNDLE_FILE, HOST, USER, PASS, REMOTE_FILE)
    sys.exit(0 if success else 1)
