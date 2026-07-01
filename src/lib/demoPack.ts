import type { Bio, LinkItem, PressKit, Release, Show, StreamingEmbed } from './music';

const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${p}`;

export interface DemoSite {
  slug: string;
  name: string;
  title: string;
  scene: string;
  description: string;
  palette: {
    bg: string;
    panel: string;
    text: string;
    muted: string;
    accent: string;
    accent2: string;
    line: string;
  };
  type: 'liquid' | 'anime' | 'punk';
  heroImage: string;
  embeds: StreamingEmbed[];
  releases: Release[];
  shows: Show[];
  bio: Bio;
  pressKit: PressKit;
  links: LinkItem[];
}

const demoUrl = 'https://example.com';

export const demoSites: DemoSite[] = [
  {
    slug: 'liquid-glass',
    name: 'Iris Vale',
    title: 'Liquid glass ambient pop',
    scene: 'A translucent, high-gloss site system for a cinematic electronic artist.',
    description:
      'Iris Vale makes glassy vocal music for galleries, planetariums, and headphones after midnight.',
    type: 'liquid',
    heroImage: asset('/demo/live-2.svg'),
    palette: {
      bg: '#071316',
      panel: 'rgba(233, 255, 250, 0.09)',
      text: '#f5fffb',
      muted: '#a8c7c0',
      accent: '#7fffd4',
      accent2: '#ffef8a',
      line: 'rgba(245, 255, 251, 0.18)',
    },
    embeds: [
      {
        provider: 'spotify',
        url: 'https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX',
        title: 'Current focus track',
      },
    ],
    releases: [
      {
        title: 'Prism Sleep',
        kind: 'Album',
        year: 2026,
        cover: asset('/demo/cover-nocturne.svg'),
        links: [{ label: 'Listen', url: demoUrl }],
      },
      {
        title: 'Blue Refraction',
        kind: 'EP',
        year: 2025,
        cover: asset('/demo/cover-static-bloom.svg'),
        links: [{ label: 'Listen', url: demoUrl }],
      },
      {
        title: 'Surface Tension',
        kind: 'Single',
        year: 2025,
        cover: asset('/demo/cover-low-tide.svg'),
        links: [{ label: 'Listen', url: demoUrl }],
      },
    ],
    shows: [
      { date: '2026-09-12', city: 'Brooklyn, NY', venue: 'Public Records', ticketUrl: demoUrl },
      { date: '2026-09-20', city: 'Montreal, QC', venue: 'Societe des arts', ticketUrl: demoUrl },
      { date: '2026-10-04', city: 'Berlin, DE', venue: 'silent green', soldOut: true },
    ],
    bio: {
      tagline:
        'Vocal fragments, soft synthesis, and refracted piano for rooms that feel weightless.',
      paragraphs: [
        'Iris Vale builds songs like light through water: patient, precise, and always moving.',
        'Her live show pairs close-mic vocals with modular textures and slow-motion lighting cues, giving bookers a polished performance that still feels intimate.',
      ],
      portrait: { src: asset('/demo/portrait.svg'), alt: 'Portrait of Iris Vale' },
    },
    pressKit: {
      summary:
        'Ambient pop artist Iris Vale is available for museums, late-night festival stages, and seated theater rooms through Q4 2026.',
      quotes: [
        { quote: 'A voice suspended inside a cathedral of signal.', source: 'Resident Advisor' },
        { quote: 'Every small sound feels intentionally lit.', source: 'Bandcamp Daily' },
      ],
      stats: [
        { label: 'Monthly listeners', value: '480K' },
        { label: 'AV shows', value: '32' },
      ],
      contact: [{ label: 'Booking', email: 'booking@irisvale.example' }],
    },
    links: [
      { label: 'Listen to Prism Sleep', url: demoUrl, note: 'Album out now' },
      { label: 'Book AV live set', url: demoUrl, note: 'Museums and festivals' },
      { label: 'Press assets', url: demoUrl },
    ],
  },
  {
    slug: 'anime-pop',
    name: 'Mika Circuit',
    title: 'Anime maximalist hyperpop',
    scene: 'Bright character-forward design for a bilingual pop artist with animated energy.',
    description:
      'Mika Circuit turns arcade hooks, J-pop melodies, and pixel-bright visuals into a fan-first site.',
    type: 'anime',
    heroImage: asset('/demo/live-5.svg'),
    palette: {
      bg: '#fff7fb',
      panel: '#ffffff',
      text: '#25163b',
      muted: '#6f5f86',
      accent: '#ff3fb4',
      accent2: '#1fc8ff',
      line: 'rgba(37, 22, 59, 0.16)',
    },
    embeds: [
      {
        provider: 'soundcloud',
        url: 'https://soundcloud.com/octobersveryown/drake-hold-on-were-going-home',
        title: 'Fan-club preview',
      },
    ],
    releases: [
      {
        title: 'Heart Console',
        kind: 'EP',
        year: 2026,
        cover: asset('/demo/cover-first-light.svg'),
        links: [{ label: 'Play', url: demoUrl }],
      },
      {
        title: 'Neon Bento',
        kind: 'Single',
        year: 2025,
        cover: asset('/demo/cover-amber-room.svg'),
        links: [{ label: 'Play', url: demoUrl }],
      },
      {
        title: 'Mascot Mode',
        kind: 'Single',
        year: 2025,
        cover: asset('/demo/cover-wire.svg'),
        links: [{ label: 'Play', url: demoUrl }],
      },
    ],
    shows: [
      {
        date: '2026-08-29',
        city: 'Los Angeles, CA',
        venue: 'Teragram Ballroom',
        ticketUrl: demoUrl,
      },
      { date: '2026-09-06', city: 'Seattle, WA', venue: 'Neumos', ticketUrl: demoUrl },
      { date: '2026-09-18', city: 'Tokyo, JP', venue: 'WWW X', ticketUrl: demoUrl },
    ],
    bio: {
      tagline: 'Bilingual hooks, boss-level choruses, and a fan world built for repeat visits.',
      paragraphs: [
        'Mika Circuit writes sugar-rush pop with the architecture of anime openings and the bounce of club remixes.',
        'The site prioritizes drops, fan links, show tickets, and collectible release art, giving younger audiences obvious next actions without turning the page into a generic link stack.',
      ],
      portrait: { src: asset('/demo/portrait.svg'), alt: 'Portrait of Mika Circuit' },
    },
    pressKit: {
      summary:
        'Mika Circuit is a Japanese-American hyperpop artist with bilingual releases, convention-ready visuals, and a compact live show for clubs and fan events.',
      quotes: [
        { quote: 'A chorus machine with world-building instincts.', source: 'The Fader' },
        { quote: 'Fan service, but make it musically serious.', source: 'Nylon' },
      ],
      stats: [
        { label: 'TikTok sounds', value: '19K' },
        { label: 'Fan club', value: '8.4K' },
      ],
      contact: [{ label: 'Management', email: 'team@mikacircuit.example' }],
    },
    links: [
      { label: 'Join Signal Club', url: demoUrl, note: 'Fan drops first' },
      { label: 'Watch Neon Bento', url: demoUrl, note: 'Official video' },
      { label: 'Tour tickets', url: demoUrl },
    ],
  },
  {
    slug: 'punk-zine',
    name: 'Riot Tenant',
    title: 'Punk zine noise rock',
    scene:
      'Ripped-paper, high-contrast design for a band that should feel loud before audio loads.',
    description:
      'Riot Tenant is a four-piece noise-punk band using a site that reads like a tour flyer archive.',
    type: 'punk',
    heroImage: asset('/demo/live-1.svg'),
    palette: {
      bg: '#f4f1e8',
      panel: '#151515',
      text: '#151515',
      muted: '#5c554b',
      accent: '#e71928',
      accent2: '#ffd51f',
      line: 'rgba(21, 21, 21, 0.22)',
    },
    embeds: [
      {
        provider: 'spotify',
        url: 'https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX',
        title: 'Latest EP',
      },
    ],
    releases: [
      {
        title: 'Eviction Notice',
        kind: 'EP',
        year: 2026,
        cover: asset('/demo/cover-wire.svg'),
        links: [{ label: 'Blast', url: demoUrl }],
      },
      {
        title: 'Landlord Static',
        kind: 'Album',
        year: 2025,
        cover: asset('/demo/cover-low-tide.svg'),
        links: [{ label: 'Blast', url: demoUrl }],
      },
      {
        title: 'Basement Legal',
        kind: 'Single',
        year: 2024,
        cover: asset('/demo/cover-amber-room.svg'),
        links: [{ label: 'Blast', url: demoUrl }],
      },
    ],
    shows: [
      {
        date: '2026-07-24',
        city: 'Philadelphia, PA',
        venue: 'First Unitarian Church',
        soldOut: true,
      },
      { date: '2026-07-31', city: 'Washington, DC', venue: 'Black Cat', ticketUrl: demoUrl },
      { date: '2026-08-08', city: 'Richmond, VA', venue: 'The Camel', ticketUrl: demoUrl },
    ],
    bio: {
      tagline: 'Fast songs, ugly guitars, and one-sheet clarity for promoters who need facts now.',
      paragraphs: [
        'Riot Tenant turns cramped rooms into civic arguments, with two-minute songs and no ornamental mystique.',
        'This template is deliberately rougher: oversized type, clipped panels, flyer-grid release art, and booking information within one scroll.',
      ],
      portrait: { src: asset('/demo/portrait.svg'), alt: 'Portrait of Riot Tenant' },
    },
    pressKit: {
      summary:
        'Riot Tenant is a noise-punk band available for clubs, DIY rooms, and support slots. Backline-light, fast changeover, loud set.',
      quotes: [
        { quote: 'Forty minutes of splintered pressure.', source: 'BrooklynVegan' },
        { quote: 'The hooks arrive with bruises.', source: 'Stereogum' },
      ],
      stats: [
        { label: 'Avg set', value: '38m' },
        { label: 'Tour miles', value: '62K' },
      ],
      contact: [{ label: 'Booking', email: 'shows@riottenant.example' }],
    },
    links: [
      { label: 'Buy the new 7 inch', url: demoUrl, note: 'Limited black vinyl' },
      { label: 'Book Riot Tenant', url: demoUrl, note: 'Fast replies' },
      { label: 'All show dates', url: demoUrl },
    ],
  },
];

export const getDemoSite = (slug: string) => demoSites.find((site) => site.slug === slug);
