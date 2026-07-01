/**
 * Content model for Clancy's music-artist sites.
 *
 * Everything a component renders is described here as plain, serializable data.
 * That's deliberate: an artist's whole site is just one of these objects, which
 * is exactly the shape our AI-assisted editor will read and write in plain
 * language. Components stay dumb; the data is the source of truth.
 */

/* ---- Streaming / audio -------------------------------------------------- */

export type StreamingProvider = 'spotify' | 'apple-music' | 'bandcamp' | 'soundcloud';

export interface StreamingEmbed {
  provider: StreamingProvider;
  /** Public share URL. Used to derive the embed and as the "open in app" link. */
  url: string;
  /** Optional label shown to screen readers and above the player. */
  title?: string;
  /**
   * Bandcamp embeds need the numeric album/track ids from the artist's
   * "share / embed" dialog — they can't be derived from the page URL.
   */
  bandcamp?: { album?: string; track?: string };
}

/* ---- Discography -------------------------------------------------------- */

export interface Release {
  title: string;
  /** e.g. "Album", "EP", "Single". Free text — shown as a small label. */
  kind: string;
  year: number;
  /** Path or URL to cover art. */
  cover: string;
  /** Where to send listeners. First link is treated as primary. */
  links?: { label: string; url: string }[];
}

/* ---- Tour / shows ------------------------------------------------------- */

export interface Show {
  /** ISO date, e.g. "2026-09-14". */
  date: string;
  city: string;
  venue: string;
  /** Omit for "tickets soon"; set soldOut for a struck-through CTA. */
  ticketUrl?: string;
  soldOut?: boolean;
}

/* ---- Press kit / EPK ---------------------------------------------------- */

export interface PressQuote {
  quote: string;
  source: string;
}

export interface PressDownload {
  label: string;
  url: string;
  /** e.g. "PDF · 2.1 MB" — free text hint shown next to the link. */
  meta?: string;
}

export interface PressKit {
  /** Short, punchy paragraph editors can rewrite. */
  summary: string;
  quotes?: PressQuote[];
  stats?: { label: string; value: string }[];
  downloads?: PressDownload[];
  contact?: { label: string; email: string }[];
}

/* ---- Gallery ------------------------------------------------------------ */

export interface Photo {
  src: string;
  alt: string;
  credit?: string;
}

/* ---- Bio ---------------------------------------------------------------- */

export interface Bio {
  /** One-line positioning statement. */
  tagline?: string;
  /** Body paragraphs, in order. */
  paragraphs: string[];
  portrait?: Photo;
}

/* ---- Link hub ----------------------------------------------------------- */

export interface LinkItem {
  label: string;
  url: string;
  /** Optional sub-label, e.g. "New single". */
  note?: string;
}
