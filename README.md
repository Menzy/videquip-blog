# Videquip Blog

Videquip Blog is a modern blogging platform focused on videography equipment—gear reviews, tutorials, and news—for creators who want to make informed purchase decisions and improve their craft. The goal is a clean, fast, and author-friendly site with structured content and great SEO.

Repository: https://github.com/Menzy/videquip-blog

## Project plan

### 🔖 Project title & description
- Title: Videquip Blog
- What: A content-focused blog for videography equipment with posts, tags, categories, search, and optional comments. Admins can draft, preview, publish, and schedule posts. Readers can filter by camera/lighting/audio categories and find gear via structured specs.
- Who: Videographers, YouTubers, and filmmakers evaluating gear; and editors who need a smooth writing workflow.
- Why it matters: Gear research is fragmented. A specialized, fast, and structured blog improves discoverability, trust, and conversion (affiliate-ready), while giving creators a delightful authoring experience.

### 🛠️ Tech stack
- Language: TypeScript
- Framework: Next.js 14 (App Router)
- UI: Tailwind CSS (+ optional shadcn/ui for components)
- Forms/Validation: Zod + React Hook Form
- Data Layer: Prisma ORM
- Database: SQLite for local development, PostgreSQL (e.g., Railway/Supabase) for production
- Auth: NextAuth.js (Email/Providers) — optional for phase 1; can be added for admin area
- Storage: Local disk in dev; Cloudinary or S3-compatible storage for images in prod (phase 2)
- Testing: Jest + React Testing Library (unit), Playwright (e2e)
- Lint/Format: ESLint, Prettier
- CI: GitHub Actions (lint, typecheck, tests)
- Package manager: pnpm (or npm if preferred)

Assumptions
- Start as a single repo (monolith) with Next.js API routes for simplicity.
- Begin with SQLite; switch to Postgres via Prisma migration for production.

### 🧠 AI integration strategy

This project intentionally uses AI across code generation, testing, documentation, and schema/API-aware workflows.

1) Code or feature generation
- Use GitHub Copilot Chat to scaffold:
	- Next.js route handlers for CRUD on `Post`, `Tag`, and `Category`
	- Prisma models and migrations
	- Reusable UI components (ArticleCard, TagBadge, Pagination, MDX layout)
	- MDX-aware blog post rendering pipeline
- Use Copilot to draft server actions (where appropriate) and Zod schemas for input validation.
- When adding new entities, prompt Copilot with `schema.prisma` context to keep types in sync.

2) Testing support
- Use Copilot to generate unit test skeletons for utilities and components (Jest + React Testing Library).
- Generate Playwright e2e test flows for key paths: reading a post, tag filter, search, and admin publish flow.
- Ask AI to propose edge cases based on component props and route params.

3) Schema-aware or API-aware generation
- Database: Provide `schema.prisma` to AI and ask it to generate:
	- Type-safe repository functions
	- Route handlers (GET/POST/PATCH/DELETE) with Zod validation and error handling
	- Seed scripts for local data
- REST/OpenAPI (optional, if exposed): Use zod-to-openapi or a small OpenAPI spec to enable AI to create SDK-style client functions and request validators.
- Context technique: paste or reference only relevant model sections to keep prompts focused (e.g., `Post`, `Tag`, `Category`, `ImageAsset`).

4) Documentation with AI
- Use AI to maintain docstrings, inline comments, and README sections.
- Ask for architectural overviews and dependency graphs when modules grow.

### 🧰 In-editor/PR review tooling
- Primary: GitHub Copilot Chat (in-editor) for code generation and refactoring.
- PR Reviews: CodeRabbit (GitHub app) to auto-review pull requests, suggest improvements, flag missing tests, and help craft commit messages.
- Commit messages: Use Copilot to summarize diffs and generate conventional commits style messages.

### 🧩 Context-aware techniques
- File/context injection:
	- Reference `schema.prisma`, component files, or specific diffs when prompting.
	- Share a short file tree or `git diff --staged` to help AI propose precise changes.
- API/spec awareness:
	- If using OpenAPI, attach the spec or the relevant paths to generate typed clients and handlers.
- Safety/consistency:
	- Keep prompts specific (inputs, outputs, error modes). Ask AI to include types and tests.

### 🧱 Initial domain models (planned)
- Post: id, slug, title, excerpt, content (MDX), coverImage, status (draft/published), publishedAt, authorId
- Tag: id, name, slug
- Category: id, name, slug
- PostTag: postId, tagId (many-to-many)
- Optional later: GearItem with specs (brand, model, type, price, affiliateUrl)

### 📌 Milestones
1. Scaffold Next.js app, Tailwind, Prisma, SQLite, basic `Post` CRUD
2. MDX rendering and blog layout; tags/categories listing and filters
3. Search (simple: full-text via database or client-side; later: Algolia/Meilisearch)
4. Admin draft/publish flow (protected)
5. CI for lint/test; e2e for top journeys

## 🧪 Sample AI prompts
Use or adapt these in Copilot Chat (or your preferred tool):

1) Feature scaffolding
"Using the existing prisma schema for Post(title, slug unique, excerpt?, content mdx, status enum, publishedAt, createdAt, updatedAt), generate Next.js App Router route handlers under `app/api/posts` for GET (list + by slug), POST (create), PATCH (update by id), and DELETE. Include Zod validation for inputs and return proper HTTP status codes. Also produce a minimal Jest test for the repository functions."

2) Testing
"Generate a Playwright e2e test for reading a published post by slug. Pre-seed the database with one post. Assert the title, cover image alt text, and that related tags render."

3) Schema-aware client
"From `schema.prisma`, create a type-safe `postsRepository` with functions: `list({tag?, category?, q?, page?, pageSize?})`, `getBySlug(slug)`, `create(input)`, `update(id, input)`, `remove(id)`. Include Zod schemas for inputs and outputs and wire to Prisma."

4) Documentation
"Summarize the architecture for the blog (routing, data layer, validation, rendering) into a section for README. Keep it under 150 words and include a diagram-friendly outline."

## ✅ Deliverable status
- Public GitHub repository created: videquip-blog
- This README contains the detailed project plan (title/description, tech stack, AI integration, PR tooling, prompts, context techniques).

## Notes
- Spelling: "equipment" (corrected in this README).
- Adjust stack choices (e.g., storage, auth) as the project evolves and time allows.

