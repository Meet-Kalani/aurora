# Aurora

A modern e-commerce REST API built with Node.js, Express, Prisma, and PostgreSQL.

## Tech Stack

- **Runtime:** Node.js (ES modules)
- **Framework:** Express 5
- **ORM:** Prisma 7 (PostgreSQL, `@prisma/adapter-pg`)
- **Validation:** Zod
- **Tooling:** ESLint, Prettier, Husky, lint-staged
- **Package manager:** pnpm

## Prerequisites

Make sure the target machine has:

- **Node.js** `>=20.19`; the latest LTS is recommended
- **pnpm** — run `corepack enable` to use the pinned version
- **PostgreSQL** — a running server with a database created for this app

## Getting Started

```bash
# 1. Clone and enter the project
git clone <repo-url>
cd aurora

# 2. Install dependencies (also runs `prisma generate` via postinstall)
pnpm install

# 3. Create your local env file from the template, then edit it
copy .env.example .env      # Windows (cmd)
# cp .env.example .env      # macOS / Linux
#   -> open .env and set DATABASE_URL to your Postgres connection string

# 4. Apply migrations to create the database tables
pnpm exec prisma migrate deploy

# 5. (Optional) Seed the database with sample products
pnpm db:seed

# 6. Start the dev server
pnpm dev
```

The API will be available at `http://localhost:3000` (or the `PORT` in your `.env`).

## Environment Variables

See [`.env.example`](./.env.example) for the full list. Required values:

| Variable       | Description                                 |
| -------------- | ------------------------------------------- |
| `PORT`         | Port the server listens on (default`3000`)  |
| `NODE_ENV`     | `development` or `production`               |
| `DATABASE_URL` | PostgreSQL connection string used by Prisma |

> `.env` is gitignored and must never be committed. Only `.env.example` is tracked.

## Database & Prisma

The Prisma schema lives in `prisma/schema/` (split across files, one per model). Migrations are tracked in `prisma/migrations/` and must stay in version control.

```bash
# Regenerate the Prisma client after changing the schema
pnpm exec prisma generate

# Create a new migration during development
pnpm exec prisma migrate dev --name <change_name>

# Apply existing migrations (fresh machine / production)
pnpm exec prisma migrate deploy

# Open Prisma Studio to browse data
pnpm exec prisma studio
```

The generated client is written to `generated/prisma/` (gitignored) and is recreated by `prisma generate`.

### Seeding

`pnpm db:seed` runs `prisma db seed`, which executes `prisma/seed.js` (wired up through the `migrations.seed` setting in [`prisma.config.ts`](./prisma.config.ts)). It inserts a small set of sample products using `createMany` with `skipDuplicates: true`, so running it more than once is safe and will not create duplicates.

Run it after migrations have been applied:

```bash
pnpm exec prisma migrate deploy
pnpm db:seed
```

## Scripts

| Script              | Description                            |
| ------------------- | -------------------------------------- |
| `pnpm dev`          | Start the server with nodemon          |
| `pnpm lint`         | Run ESLint                             |
| `pnpm lint:fix`     | Run ESLint with auto-fix               |
| `pnpm format`       | Format all files with Prettier         |
| `pnpm format:check` | Check formatting without writing       |
| `pnpm db:seed`      | Seed the database with sample products |

## Project Structure

```
aurora/
├── app.js                  # Entry point, starts the server and Express app setup (middleware, routes)
├── prisma/
│   ├── schema/             # Prisma schema, split per model
│   │   ├── schema.prisma   # generator + datasource
│   │   └── product.prisma
│   └── migrations/         # Committed migration history
├── generated/prisma/       # Generated client (gitignored)
└── src/
    ├── config/             # Shared PrismaClient instance
    ├── middlewares/        # errorHandler, notFound, validate
    ├── modules/            # Feature modules (route, controller, data, schema)
    └── utils/              # errors, zod helpers
```

## API

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| GET    | `/health`   | Health check   |
| *      | `/products` | Product routes |
