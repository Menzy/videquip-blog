# Project Reflection: Videquip Blog

This document captures key decisions, how AI was used, what changed along the way, and the next steps for the Videquip Blog project.

## 1) Context and goals
- Build a fast, author-friendly blog focused on videography equipment.
- Keep the initial scope lean, with room to expand into richer content and features.
- Maintain a clean repo history and solid developer ergonomics (lint, format, tests, CI).

## 2) Key decisions and pivots
- Initial plan: Next.js + Prisma + SQLite for server-rendered CRUD and content APIs.
- Pivot: Switched to React + Vite + TypeScript + Tailwind for a simpler, client-side approach after repository bloat and push issues.
- Linting: Adopted ESLint v9 flat config early to avoid legacy setup problems.
- Content: Start simple (static/JSON/MDX later), add routing and a content layer incrementally.

## 3) AI usage (how and why)
- Planning: Used AI to propose architecture, milestones, and prompting strategies.
- Scaffolding: Assisted with Vite + React + Tailwind setup and ESLint v9 configuration.
- Debugging: Helped resolve issues (e.g., Prisma enum on SQLite; later replaced by string fields during the Next.js phase).
- Documentation: Co-authored README plan and this reflection.

Guidelines followed
- Provide focused context (only relevant files/diffs) to keep generations accurate.
- Ask for types, error modes, and tests in prompts where applicable.

## 4) Challenges and resolutions
- Git history bloat: Accidentally committed node_modules during the Next.js phase; GitHub rejected large binary files (>100MB). Resolution: Reset to remote clean head and start fresh with a Vite scaffold.
- ESLint v9 migration: Legacy config error. Resolution: Added flat config (eslint.config.mjs) and ignored dist/node_modules.
- Prisma/SQLite enum limitation: Enums not supported the way intended. Resolution: Use string status instead (pre-pivot).

## 5) What went well
- Fast iteration after pivot; build and lint pass cleanly.
- Tailwind + Vite developer experience is excellent for UI work.
- Clear separation of concerns in project files and scripts.

## 6) What I’d do differently
- Commit a .gitignore before any install or scaffold to avoid tracking vendor files.
- Start with a simpler content layer before introducing a database.
- Establish CI earlier to catch accidental bloat or failing lint in PRs.

## 7) Next steps
- Add client-side routing (React Router) and a basic page structure.
- Introduce a content layer (local Markdown/MDX or JSON), with typed loaders.
- Testing: Set up Jest + React Testing Library; add a smoke test for the App and one component.
- CI: GitHub Actions for lint, typecheck, build, and tests on PRs and main.
- UX: Build initial components (ArticleCard, TagBadge, Layout) and a minimal blog listing page.

## 8) Evidence and traceability
- See README for the project plan, stack, and sample AI prompts.
- Git history shows the pivot to Vite and the addition of ESLint flat config.

---
Last updated: 2025-09-18