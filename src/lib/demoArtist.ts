/**
 * Demo content for a fictional artist, "Vela" — used by the component
 * showcase. Real album art / photos are stand-in SVGs under /public/demo.
 * This doubles as a worked example of the full content model in src/lib/music.
 */
import type { Bio, LinkItem, PressKit, Release, Show, Photo, StreamingEmbed } from './music';

/** Prefix a public asset with the deploy base path (prod or PR preview). */
const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${p}`;

export const embeds: StreamingEmbed[] = [
  {
    provider: 'spotify',
    // Real, embeddable album so the player actually plays on the preview.
    url: 'https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX',
    title: 'Latest album on Spotify',
  },
  {
    provider: 'soundcloud',
    url: 'https://soundcloud.com/octobersveryown/drake-hold-on-were-going-home',
    title: 'Single on SoundCloud',
  },
];

export const releases: Release[] = [
  {
    title: 'Nocturne',
    kind: 'Album',
    year: 2026,
    cover: asset('/demo/cover-nocturne.svg'),
    links: [{ label: 'Listen', url: 'https://open.spotify.com/' }],
  },
  {
    title: 'Static Bloom',
    kind: 'EP',
    year: 2025,
    cover: asset('/demo/cover-static-bloom.svg'),
    links: [{ label: 'Listen', url: 'https://music.apple.com/' }],
  },
  {
    title: 'Low Tide',
    kind: 'Single',
    year: 2025,
    cover: asset('/demo/cover-low-tide.svg'),
    links: [{ label: 'Listen', url: 'https://bandcamp.com/' }],
  },
  {
    title: 'Amber Room',
    kind: 'Album',
    year: 2023,
    cover: asset('/demo/cover-amber-room.svg'),
    links: [{ label: 'Listen', url: 'https://open.spotify.com/' }],
  },
  {
    title: 'Wire',
    kind: 'EP',
    year: 2022,
    cover: asset('/demo/cover-wire.svg'),
    links: [{ label: 'Listen', url: 'https://soundcloud.com/' }],
  },
  {
    title: 'First Light',
    kind: 'Album',
    year: 2021,
    cover: asset('/demo/cover-first-light.svg'),
    links: [{ label: 'Listen', url: 'https://open.spotify.com/' }],
  },
];

export const shows: Show[] = [
  {
    date: '2026-09-05',
    city: 'Los Angeles, CA',
    venue: 'The Fonda Theatre',
    ticketUrl: 'https://example.com',
  },
  { date: '2026-09-09', city: 'San Francisco, CA', venue: 'The Independent', soldOut: true },
  {
    date: '2026-09-14',
    city: 'Portland, OR',
    venue: 'Wonder Ballroom',
    ticketUrl: 'https://example.com',
  },
  { date: '2026-09-18', city: 'Seattle, WA', venue: 'Neumos', ticketUrl: 'https://example.com' },
  { date: '2026-09-24', city: 'Denver, CO', venue: 'Bluebird Theater' },
  {
    date: '2026-10-02',
    city: 'Chicago, IL',
    venue: 'Thalia Hall',
    ticketUrl: 'https://example.com',
  },
];

export const bio: Bio = {
  tagline: 'Vela makes widescreen pop that sounds like a city seen from an airplane at night.',
  paragraphs: [
    'Vela is the project of a Lisbon-born, LA-based songwriter whose music threads together late-night synth pop, live strings, and a voice that lands somewhere between a whisper and a floodlight.',
    'Since her 2021 debut First Light, she has toured three continents, scored two short films, and built a devoted audience on the strength of records that feel intimate and enormous at once.',
    'Her latest album, Nocturne, was written across six months of insomnia and recorded almost entirely between midnight and dawn.',
  ],
  portrait: {
    src: asset('/demo/portrait.svg'),
    alt: 'Studio portrait of Vela',
    credit: 'Mara Devlin',
  },
};

export const pressKit: PressKit = {
  summary:
    'Vela is an LA-based artist making cinematic synth pop. Nocturne (2026) is her third album. Available for festival dates, press, and sync through Q4 2026.',
  quotes: [
    {
      quote: 'A songwriter with the rare gift of making the enormous feel intimate.',
      source: 'Pitchfork',
    },
    { quote: 'Nocturne is the after-hours record of the year.', source: 'The Line of Best Fit' },
    { quote: 'Live, she is simply spellbinding.', source: 'NME' },
  ],
  stats: [
    { label: 'Monthly listeners', value: '1.2M' },
    { label: 'Albums', value: '3' },
    { label: 'Countries toured', value: '18' },
    { label: 'Sync placements', value: '11' },
  ],
  downloads: [
    {
      label: 'Full bio & one-sheet',
      url: 'https://example.com/vela-bio.pdf',
      meta: 'PDF · 340 KB',
    },
    {
      label: 'Press photos (hi-res)',
      url: 'https://example.com/vela-photos.zip',
      meta: 'ZIP · 24 MB',
    },
    {
      label: 'Stage plot & rider',
      url: 'https://example.com/vela-rider.pdf',
      meta: 'PDF · 180 KB',
    },
  ],
  contact: [
    { label: 'Booking', email: 'booking@velamusic.com' },
    { label: 'Press', email: 'press@velamusic.com' },
  ],
};

export const gallery: Photo[] = [
  { src: asset('/demo/live-1.svg'), alt: 'Vela performing at Red Rocks', credit: 'J. Okafor' },
  { src: asset('/demo/live-2.svg'), alt: 'Vela in the studio' },
  { src: asset('/demo/live-3.svg'), alt: 'Vela backstage', credit: 'Mara Devlin' },
  { src: asset('/demo/live-4.svg'), alt: 'Vela at a festival main stage' },
  { src: asset('/demo/live-5.svg'), alt: 'Soundcheck before the show', credit: 'J. Okafor' },
  { src: asset('/demo/live-6.svg'), alt: 'On tour between cities' },
];

export const links: LinkItem[] = [
  { label: 'Nocturne — out now', url: 'https://open.spotify.com/', note: 'Stream the new album' },
  { label: 'Fall tour tickets', url: 'https://example.com', note: 'North America 2026' },
  { label: 'Official store', url: 'https://example.com', note: 'Vinyl & merch' },
  { label: 'Newsletter', url: 'https://example.com' },
  { label: 'Instagram', url: 'https://instagram.com' },
];
