# Teams & Players App

A full-stack application for managing sports teams and players, built with .NET, Angular, and SurrealDB.

## Tech Stack
- **Backend**: .NET 8 Web API
- **Frontend**: Angular 19 (Standalone Components)
- **Database**: SurrealDB

## Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js](https://nodejs.org/) (LTS version)
- [pnpm](https://pnpm.io/) - `npm install -g pnpm`
- [Docker](https://www.docker.com/) (for SurrealDB)

## Getting Started

### 1. Start SurrealDB
```bash
docker run --rm --pull always -p 8000:8000 surrealdb/surrealdb:latest start --user root --pass root memory --bind 0.0.0.0:8000
```

### 2. Start Backend
```bash
cd backend/TeamsPlayers.API
dotnet restore
dotnet run
```
The API will be available at `http://localhost:5244`

### 3. Start Frontend
```bash
cd frontend
pnpm install
pnpm start
```
The application will be available at `http://localhost:4200`

## Features
- **Teams Management**: Create and view teams with name and country
- **Players Management**: Create and view players with name, position, and team assignment
- **RESTful API**: Clean API endpoints for teams and players
- **Modern UI**: Responsive Angular application with routing

## API Endpoints
- `GET /api/teams` - Get all teams
- `POST /api/teams` - Create a team
- `GET /api/players` - Get all players
- `POST /api/players` - Create a player

## Project Structure
```
.
├── backend/
│   └── TeamsPlayers.API/      # .NET Web API
│       ├── Controllers/        # API Controllers
│       ├── Models/            # Data Models
│       └── Program.cs         # Application entry point
├── frontend/
│   └── src/
│       ├── app/
│       │   ├── components/    # Angular Components
│       │   ├── services/      # API Services
│       │   └── models/        # TypeScript Models
│       └── polyfills.ts       # Zone.js polyfill
└── README.md
```

## License
MIT
