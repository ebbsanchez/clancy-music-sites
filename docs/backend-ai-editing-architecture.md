# Backend Architecture for AI-Editable Musician Sites

Research date: 2026-07-01

## Recommendation

Keep the musician site itself static and file-backed for now. Add a small authenticated AI editing backend only for content mutation, Claude calls, and preview publishing.

The MVP architecture should be:

1. Artist content lives as typed JSON or YAML in the repo, matching `src/lib/music.ts`.
2. Astro renders public sites statically from that content.
3. A private edit API accepts plain-language edit requests, sends the current artist content plus brand rules to Anthropic, validates the returned structured content, and commits the change to a branch.
4. GitHub Actions builds a PR preview URL. The artist or team approves by reviewing the preview and merging.

This gives non-technical editing without introducing a database, multi-tenant CMS, or custom publishing platform before we need one.

## Why This Fits Clancy Now

- The current product is content-first: bio, discography, shows, embeds, gallery, EPK, and links.
- The repo already has a serializable music content model in `src/lib/music.ts`, which is the right boundary for AI edits.
- Static output keeps artist sites fast, cheap, accessible, and easy to host.
- Git history and PR previews give us rollback, review, and audit trails for free.
- We avoid a one-way-door decision around Sanity/Supabase/Turso until paying artists prove they need realtime dashboards, roles, scheduling, or high-volume uploads.

## Backend Shape

### Public Site

- Astro static build.
- Content loaded from files, not live database reads.
- Components stay presentation-only and render validated artist data.
- Existing GitHub Pages deploy remains valid for the public site.

### Edit Service

Minimum viable routes:

- `GET /api/artists/:slug/content` returns the editable content payload.
- `POST /api/artists/:slug/ai-edits` accepts `{ instruction, targetSections, contentVersion }`.
- `POST /api/artists/:slug/publish-request` creates or updates a GitHub branch/PR.

The edit service can be an Astro SSR deployment or a small sibling Next.js/Node service. Because GitHub Pages cannot host server-side API routes, the first AI route should run on Vercel, Netlify, Cloudflare Workers, or another small serverless host while the public site can remain static.

### AI Edit Flow

1. Load the artist content file and a compact style guide.
2. Ask Claude for a structured patch or complete validated section object.
3. Validate with Zod against the music content schema.
4. Normalize URLs, dates, email fields, and empty arrays.
5. Show a diff and preview summary.
6. Commit to `ai-edit/<artist>/<timestamp>` and open or update a PR.
7. Let the existing preview workflow produce a URL for review.

Do not let AI write arbitrary Astro components in the artist-facing MVP. Keep AI writes constrained to content fields until the product has stronger review tools.

## Anthropic Integration Notes

Use the native Anthropic API rather than OpenAI compatibility so we keep access to Claude-specific features like prompt caching and the current model behavior. Default to `claude-opus-4-8` for ambiguous multi-section edits, tone matching, and tool-heavy flows. Use cheaper/faster Claude models later for simple field rewrites after we have evals.

Implementation guardrails:

- Use structured outputs or strict tool schemas for section updates, not free-form Markdown.
- Cache the stable system prompt, component schema, and Clancy editorial rules where possible.
- Keep temperature/top-p defaults omitted for Opus 4.8 compatibility.
- Prefer patch-style responses for small edits, but allow full-section replacement when it simplifies validation.
- Log model id, prompt version, edited sections, validation failures, and PR URL.

## Content Model

Move demo data toward this structure:

```text
src/content/artists/
  vela.json
  <artist-slug>.json
src/content/style-guides/
  default.json
  <artist-slug>.json
```

Add Zod schemas beside `src/lib/music.ts` so the same definitions protect:

- build-time content loading,
- AI output validation,
- editor form hints,
- migration scripts.

Suggested top-level content object:

```ts
interface ArtistSiteContent {
  artist: {
    slug: string;
    name: string;
    location?: string;
    genreTags: string[];
  };
  bio: Bio;
  releases: Release[];
  shows: Show[];
  embeds: StreamingEmbed[];
  gallery: Photo[];
  pressKit: PressKit;
  links: LinkItem[];
  updatedAt: string;
}
```

## Storage Decisions

Use Git for:

- structured artist content,
- style guides,
- small SVG/optimized image placeholders,
- changelog and review trail through commits/PRs.

Avoid storing large media in Git long term. For MVP, accept externally hosted image URLs or small optimized assets. When artist uploads become a real workflow, add object storage:

- Cloudinary if transformation and image delivery matter most.
- Supabase Storage if we also choose Supabase Auth/Postgres.
- S3/R2 if we want low-level control.

## Tool Evaluation

| Tool                 | Fit now                      | Notes                                                                                                                                      |
| -------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Astro SSR/API routes | Good for thin edit endpoints | Astro supports API routes, but live server endpoints require SSR hosting rather than GitHub Pages.                                         |
| Anthropic API        | Best fit                     | Opus 4.8 is explicitly suited for complex tool use and ambiguous edits; structured outputs/prompt caching reduce risk and cost.            |
| GitHub API + Actions | Best fit                     | Commits and PR previews are already aligned with the current deploy pipeline.                                                              |
| Keystatic            | Good later                   | Strong file-backed CMS option for human form editing over Markdown/JSON/YAML. Could complement AI editing if artists want manual controls. |
| Decap CMS            | Possible fallback            | Git-backed and Astro-compatible, but GitHub auth and editor UX are less aligned with our AI-first differentiator.                          |
| Sanity               | Defer                        | Excellent editorial platform and visual editing, but introduces a hosted content model and more complexity than site #1/#2 need.           |
| Supabase             | Defer                        | Useful when we need auth, Postgres, storage, or realtime state. It is unnecessary if edits are PR-based file changes.                      |
| Turso/libSQL         | Defer                        | Lightweight database option, but database reads add little value while content is static and low-volume.                                   |

## Security And Operations

- Keep `ANTHROPIC_API_KEY` server-side only.
- Require authenticated editor sessions; start with a small allowlist.
- Store GitHub write credentials as server secrets with least privilege.
- Validate every model output before writing files.
- Rate-limit AI routes per artist and per user.
- Keep a manual rollback path: revert the content commit or close the PR.
- Do not expose draft content publicly except through unguessable PR preview URLs or authenticated previews.

## Implementation Plan

1. Convert `src/lib/demoArtist.ts` to load from a file-backed content object.
2. Add Zod schemas for the music content model.
3. Add a local CLI prototype: `npm run ai:edit -- --artist vela --instruction "..."` that reads content, calls Anthropic, validates, and writes a draft file.
4. Add the hosted edit API only after the CLI path proves the model prompts and validation.
5. Wire GitHub branch/PR creation and rely on the existing preview deploy.
6. Add a minimal editor UI with instruction input, section targeting, diff, and preview link.

## Open Decisions For CEO/Product Design

- Whether artist-facing edits should always require Clancy review before merge, or whether artists can self-publish after preview.
- Whether the first editor UI should feel like a chat, a guided form, or a hybrid.
- How much visual/design variation the AI editor may propose before a human designer approves it.

## Sources Checked

- Anthropic model guidance and Opus 4.8 notes: https://docs.anthropic.com/en/docs/about-claude/models/whats-new-claude-4-8
- Anthropic tool use docs: https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/implement-tool-use
- Anthropic prompt caching docs: https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- Astro endpoint docs: https://docs.astro.build/en/guides/endpoints/
- Astro Supabase guide: https://docs.astro.build/en/guides/backend/supabase/
- Astro Turso guide: https://docs.astro.build/en/guides/backend/turso/
- Astro Keystatic guide: https://docs.astro.build/en/guides/cms/keystatic/
- Astro Decap CMS guide: https://docs.astro.build/en/guides/cms/decap-cms/
- Sanity visual editing overview: https://www.sanity.io/docs/visual-editing/introduction-to-visual-editing
