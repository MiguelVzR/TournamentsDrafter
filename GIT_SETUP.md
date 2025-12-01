# Git Setup Instructions

## Install Git

Git is not currently installed on your system. You need to install it first.

**Option 1: Install via winget (recommended)**
```powershell
winget install --id Git.Git -e --source winget
```

**Option 2: Download manually**
Download from: https://git-scm.com/download/win

## Push to GitHub Repository

After installing Git, restart your terminal and run these commands:

```bash
# Navigate to project directory
cd C:\Users\void2\.gemini\antigravity\scratch

# Initialize Git repository
git init

# Add remote repository
git remote add origin https://github.com/MiguelVzR/TournamentsDrafter.git

# Stage all files
git add .

# Commit changes
git commit -m "Initial commit: Teams & Players app with .NET, Angular, and SurrealDB"

# Force push to overwrite existing repository
git push -f origin main
```

**Note**: The `-f` flag will force push and overwrite the existing repository content.

## Authentication

You may need to authenticate with GitHub. If prompted, use:
- Your GitHub username
- A Personal Access Token (not your password)

To create a token: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token
