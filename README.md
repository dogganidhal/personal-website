# ndogga.com

Personal portfolio for [Nidhal Dogga](https://www.linkedin.com/in/dogganidhal) — Senior Software Engineer at Doctolib.

Static, bilingual (EN + FR), light/dark theme with no flash on load. Built with [Astro](https://astro.build/), [UnoCSS](https://unocss.dev/), and TypeScript.

## Local development

Requires Node 20+ and pnpm.

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # static output to dist/
pnpm preview   # serve dist/ locally
pnpm check     # type check (astro check)
```

## Project layout

```
.
├── public/                 # static assets (favicon, robots.txt)
├── src/
│   ├── components/         # Header, Footer, ThemeToggle, LangSwitch, BaseHead
│   │   └── sections/       # Hero, About, ExperienceList, ProjectList, Contact
│   ├── content/
│   │   ├── about/          # {en,fr}.md
│   │   ├── experience/     # {en,fr}/0X-company.md
│   │   └── projects/       # {en,fr}/0X-name.md
│   ├── data/site.ts        # skill chips, socials, contact constants
│   ├── i18n/               # en.json, fr.json, helpers
│   ├── layouts/Layout.astro
│   └── pages/{index,fr/index}.astro
├── astro.config.ts
├── uno.config.ts
└── _archive/               # 2021 React + Spring Boot site (do not touch)
```

## Adding content

Drop two markdown files under `src/content/projects/en/` and `src/content/projects/fr/`. The Zod schema validates frontmatter at build time:

```yaml
---
title: My Project
description: One-liner about what it does.
lang: en
order: 3
url: https://example.com/
repo: https://github.com/me/project
tags: [TypeScript, Astro]
status: live    # or 'archived'
---
```

Same pattern for experience entries (`src/content/experience/{en,fr}/0X-company.md`). For experience, multiple roles at the same company nest under one entry via `roles: [{ title, start, end? }]` — `end` omitted means the role is current.

## Deployment — Cloudflare Pages

Connect the repo in the Cloudflare dashboard: **Pages → Create new project → Connect to Git**.

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Env: `NODE_VERSION` | `20` |

Pushes to `main` deploy to production. Pull requests get preview URLs at `<branch>.<project>.pages.dev`.

## DNS migration (Firebase → Cloudflare)

`ndogga.com` was on Firebase Hosting. Cutover sequence to avoid downtime:

1. Confirm the site works at `<project>.pages.dev`.
2. **CF Pages → Custom domains** → add `ndogga.com` and `www.ndogga.com`. Choose one of:
   - **Nameserver migration** (preferred): change registrar nameservers to the two CF nameservers shown. CF auto-issues TLS and manages DNS.
   - **CNAME**: keep current DNS, point `ndogga.com` and `www` at `<project>.pages.dev`. Apex CNAME needs registrar support for flattening or ALIAS/ANAME records.
3. Lower the Firebase `A`/`AAAA` TTL to 300s ~24h before flipping records (limits resolver-cache lag).
4. Screenshot the Firebase DNS zone as backup.
5. Flip nameservers (or `A`/`AAAA` → CNAME).
6. Wait for the CF custom-domain status to reach **Active** (cert issued).
7. Verify:

   ```bash
   dig ndogga.com
   curl -I https://ndogga.com
   ```

   Expect `200` from Cloudflare with a valid TLS cert; `www.ndogga.com` should redirect to apex (or vice-versa, pick one).
8. Keep the Firebase Hosting project alive ~1 week as a fallback.

**Rollback**: restore the Firebase records (or revert nameservers); wait for TTL.
