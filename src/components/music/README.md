# Music component library (v1)

Reusable, responsive, music-specific components for Clancy artist sites. Every
component is **data-driven**: it takes a plain object (typed in
[`src/lib/music.ts`](../../lib/music.ts)) and renders it. An artist's whole site
is just one of these data objects — which is exactly what the AI-assisted editor
will read and write.

**Live showcase:** `/components` (see [`src/pages/components.astro`](../../pages/components.astro)),
rendered with the demo artist in [`src/lib/demoArtist.ts`](../../lib/demoArtist.ts).

## Design system

Components inherit the house tokens from [`global.css`](../../styles/global.css):
`stage` / `stage-raised` (near-black), `bone` (text), `signal` (electric lime
accent), `muted`; display face **Fraunces**, sans **Space Grotesk**. They render
on a dark background and honour `prefers-reduced-motion`.

## Components

| Component        | Prop                        | Type                          |
| ---------------- | --------------------------- | ----------------------------- |
| `Section`        | `eyebrow?`, `title?`, `id?` | frame + heading for any block |
| `StreamingEmbed` | `{...StreamingEmbed}`       | `StreamingEmbed`              |
| `Discography`    | `releases`                  | `Release[]`                   |
| `TourDates`      | `shows`, `since?`           | `Show[]`                      |
| `Bio`            | `{...Bio}`                  | `Bio`                         |
| `PressKit`       | `{...PressKit}`             | `PressKit`                    |
| `Gallery`        | `photos`                    | `Photo[]`                     |
| `LinkHub`        | `links`                     | `LinkItem[]`                  |

All accept an optional `class` for layout overrides.

### StreamingEmbed — the one to know

One component, four providers. Pass a public share `url` and `provider`; it
derives the correct embed iframe.

```astro
<StreamingEmbed provider="spotify" url="https://open.spotify.com/album/…" />
<StreamingEmbed provider="apple-music" url="https://music.apple.com/us/album/…" />
<StreamingEmbed provider="soundcloud" url="https://soundcloud.com/artist/track" />
```

**Bandcamp is the exception.** Its player needs the numeric album/track ids from
the artist's _Share / Embed_ dialog (they can't be derived from the page URL):

```astro
<StreamingEmbed
  provider="bandcamp"
  url="https://artist.bandcamp.com/album/…"
  bandcamp={{ album: '123456789' }}
/>
```

If an embed can't be built, the component degrades to an "Open on …" link.

## Usage

```astro
---
import Section from '../components/music/Section.astro';
import Discography from '../components/music/Discography.astro';
import { releases } from '../lib/demoArtist';
---

<Section eyebrow="Releases" title="Discography">
  <Discography releases={releases} />
</Section>
```

## Conventions

- **Content lives in data, not markup.** Add an artist by writing a data file
  shaped like `demoArtist.ts`; reuse every component unchanged.
- **Images** are referenced by path; prefix public assets with
  `import.meta.env.BASE_URL` so PR previews and prod both resolve.
- **No client JS** in v1 beyond provider iframes — fast, accessible, static.
