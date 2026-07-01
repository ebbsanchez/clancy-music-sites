/**
 * Demo pack B: three fictional musician sites for jazz fusion, UK modern jazz,
 * and warm keys. Kept as plain data so these references can later become AI
 * editor fixtures without changing the rendering layer.
 */
import type { ArtistSite } from './music';

const asset = (p: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${p}`;

export const demoPackB: ArtistSite[] = [
  {
    slug: 'marin-circuit',
    name: 'Marin Circuit',
    genre: 'Jazz fusion trio',
    location: 'Oakland / Tokyo',
    headline: 'Velocity, odd meters, and electric melody without the museum glass.',
    intro:
      'A guitar-led fusion trio for players, dancers, and late-night radio. The site leans into motion: sharp diagonals, hot signal colors, and a tour-forward layout.',
    heroImage: {
      src: asset('/demo-pack-b/marin-hero.svg'),
      alt: 'Graphic portrait of Marin Circuit on a bright fusion stage',
      credit: 'Clancy demo art',
    },
    theme: {
      background: '#090a0c',
      surface: '#17191e',
      text: '#fff8e8',
      muted: '#aaa38f',
      accent: '#ff4f2e',
      accentAlt: '#50f2c4',
    },
    embeds: [
      {
        provider: 'spotify',
        url: 'https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX',
        title: 'Lead record on Spotify',
      },
      {
        provider: 'soundcloud',
        url: 'https://soundcloud.com/octobersveryown/drake-hold-on-were-going-home',
        title: 'Live room take',
      },
    ],
    releases: [
      {
        title: 'Telemetry Club',
        kind: 'Album',
        year: 2026,
        cover: asset('/demo-pack-b/marin-telemetry.svg'),
        links: [{ label: 'Listen', url: 'https://open.spotify.com/' }],
      },
      {
        title: 'Switchback',
        kind: 'EP',
        year: 2025,
        cover: asset('/demo-pack-b/marin-switchback.svg'),
        links: [{ label: 'Listen', url: 'https://bandcamp.com/' }],
      },
      {
        title: 'Redline Rehearsal',
        kind: 'Live tape',
        year: 2024,
        cover: asset('/demo-pack-b/marin-redline.svg'),
        links: [{ label: 'Watch', url: 'https://youtube.com/' }],
      },
    ],
    shows: [
      {
        date: '2026-08-28',
        city: 'Oakland, CA',
        venue: 'New Parish',
        ticketUrl: 'https://example.com',
      },
      {
        date: '2026-09-06',
        city: 'Portland, OR',
        venue: 'Jack London Revue',
        ticketUrl: 'https://example.com',
      },
      { date: '2026-09-18', city: 'Tokyo, JP', venue: 'Blue Note Place', soldOut: true },
      {
        date: '2026-09-22',
        city: 'Osaka, JP',
        venue: 'Billboard Live',
        ticketUrl: 'https://example.com',
      },
    ],
    bio: {
      tagline: 'Elastic fusion written like dance music and played like a knife fight.',
      paragraphs: [
        'Marin Circuit formed after guitarist Ren Ito started sending drummer Talia Knox clipped phone recordings of riffs in 11, 13, and anything else that refused to sit still.',
        'Their records keep the improvisation exposed but never indulgent: bass synths punch through the floor, guitar lines arrive like traffic lights, and the drums keep daring the room to move.',
      ],
      portrait: {
        src: asset('/demo-pack-b/marin-hero.svg'),
        alt: 'Marin Circuit graphic portrait',
      },
    },
    pressKit: {
      summary:
        'Marin Circuit is an Oakland and Tokyo based jazz fusion trio touring Telemetry Club through fall 2026. Available for festivals, clubs, clinics, and filmed sessions.',
      quotes: [
        { quote: 'Fusion with teeth, precision, and actual songs.', source: 'DownBeat' },
        { quote: 'The rare odd-meter band that makes the room move first.', source: 'WBGO' },
      ],
      stats: [
        { label: 'Tour markets', value: '14' },
        { label: 'Festival sets', value: '22' },
        { label: 'Lineup', value: 'Trio' },
      ],
      downloads: [
        { label: 'Tech rider', url: 'https://example.com/marin-rider.pdf', meta: 'PDF' },
        { label: 'Press photos', url: 'https://example.com/marin-photos.zip', meta: 'ZIP' },
      ],
      contact: [{ label: 'Booking', email: 'booking@marincircuit.example' }],
    },
    gallery: [
      { src: asset('/demo-pack-b/marin-hero.svg'), alt: 'Marin Circuit stage graphic' },
      { src: asset('/demo-pack-b/marin-telemetry.svg'), alt: 'Telemetry Club cover artwork' },
      { src: asset('/demo-pack-b/marin-switchback.svg'), alt: 'Switchback cover artwork' },
    ],
    links: [
      { label: 'Telemetry Club', url: 'https://open.spotify.com/', note: 'New album' },
      { label: 'Tour tickets', url: 'https://example.com', note: 'Pacific run' },
      { label: 'Live session', url: 'https://youtube.com/' },
    ],
  },
  {
    slug: 'southbank-drift',
    name: 'Southbank Drift',
    genre: 'UK modern jazz collective',
    location: 'London',
    headline: 'London horn lines, broken-beat drums, and basement-room momentum.',
    intro:
      'A modern jazz collective needs a site that feels editorial but gig-ready. This direction uses club-poster density, modular listings, and a strong press strip.',
    heroImage: {
      src: asset('/demo-pack-b/southbank-hero.svg'),
      alt: 'Graphic portrait of Southbank Drift with brass and city shapes',
      credit: 'Clancy demo art',
    },
    theme: {
      background: '#10120f',
      surface: '#1c211b',
      text: '#f7f0dd',
      muted: '#a5aa96',
      accent: '#f2c84b',
      accentAlt: '#7fc6ff',
    },
    embeds: [
      {
        provider: 'apple-music',
        url: 'https://music.apple.com/us/album/kind-of-blue/268443092',
        title: 'Featured release on Apple Music',
      },
      {
        provider: 'spotify',
        url: 'https://open.spotify.com/album/1weenld61qoidwYuZ1GESA',
        title: 'Playlist placement',
      },
    ],
    releases: [
      {
        title: 'Late Bus to Deptford',
        kind: 'Album',
        year: 2026,
        cover: asset('/demo-pack-b/southbank-late-bus.svg'),
        links: [{ label: 'Listen', url: 'https://music.apple.com/' }],
      },
      {
        title: 'Rye Lane Sketches',
        kind: 'EP',
        year: 2025,
        cover: asset('/demo-pack-b/southbank-rye-lane.svg'),
        links: [{ label: 'Listen', url: 'https://open.spotify.com/' }],
      },
      {
        title: 'Archway Dub',
        kind: 'Single',
        year: 2025,
        cover: asset('/demo-pack-b/southbank-archway.svg'),
        links: [{ label: 'Listen', url: 'https://bandcamp.com/' }],
      },
    ],
    shows: [
      { date: '2026-08-14', city: 'London, UK', venue: 'Village Underground', soldOut: true },
      {
        date: '2026-08-21',
        city: 'Manchester, UK',
        venue: 'Band on the Wall',
        ticketUrl: 'https://example.com',
      },
      {
        date: '2026-09-04',
        city: 'Bristol, UK',
        venue: 'Strange Brew',
        ticketUrl: 'https://example.com',
      },
      {
        date: '2026-09-12',
        city: 'Leeds, UK',
        venue: 'Brudenell Social Club',
        ticketUrl: 'https://example.com',
      },
    ],
    bio: {
      tagline: 'A London collective folding horns, broken beat, dub pressure, and choir hooks.',
      paragraphs: [
        'Southbank Drift began as a rotating Sunday session below a closed cinema, where charts were passed around by phone and everyone learned the set in public.',
        'The collective now moves between jazz rooms, club nights, and festival tents with a sound built for both close listening and bodies packed shoulder to shoulder.',
      ],
      portrait: {
        src: asset('/demo-pack-b/southbank-hero.svg'),
        alt: 'Southbank Drift graphic portrait',
      },
    },
    pressKit: {
      summary:
        'Southbank Drift is a London modern jazz collective touring Late Bus to Deptford in 2026. Seven-piece core lineup with expandable choir and percussion options.',
      quotes: [
        { quote: 'A vivid snapshot of the capital after midnight.', source: 'Jazzwise' },
        { quote: 'Club culture and horn writing in perfect conversation.', source: 'The Guardian' },
      ],
      stats: [
        { label: 'Members', value: '7' },
        { label: 'BBC sessions', value: '3' },
        { label: 'Festival slots', value: '18' },
      ],
      downloads: [
        {
          label: 'Festival one-sheet',
          url: 'https://example.com/southbank-one-sheet.pdf',
          meta: 'PDF',
        },
        { label: 'Stage plot', url: 'https://example.com/southbank-stage.pdf', meta: 'PDF' },
      ],
      contact: [
        { label: 'UK booking', email: 'live@southbankdrift.example' },
        { label: 'Press', email: 'press@southbankdrift.example' },
      ],
    },
    gallery: [
      { src: asset('/demo-pack-b/southbank-hero.svg'), alt: 'Southbank Drift city graphic' },
      {
        src: asset('/demo-pack-b/southbank-late-bus.svg'),
        alt: 'Late Bus to Deptford cover artwork',
      },
      { src: asset('/demo-pack-b/southbank-rye-lane.svg'), alt: 'Rye Lane Sketches cover artwork' },
    ],
    links: [
      { label: 'Late Bus to Deptford', url: 'https://music.apple.com/', note: 'Album out now' },
      { label: 'UK dates', url: 'https://example.com', note: 'Tickets' },
      { label: 'Mailing list', url: 'https://example.com' },
    ],
  },
  {
    slug: 'elias-wren',
    name: 'Elias Wren',
    genre: 'Warm keys / ambient soul',
    location: 'Nashville',
    headline: 'Rhodes, felt piano, and close-mic songs for rooms that go quiet.',
    intro:
      'A keys-forward solo artist needs restraint without becoming generic. This direction uses warm contrast, generous reading space, and intimate release framing.',
    heroImage: {
      src: asset('/demo-pack-b/elias-hero.svg'),
      alt: 'Graphic portrait of Elias Wren at a warm electric piano',
      credit: 'Clancy demo art',
    },
    theme: {
      background: '#14100d',
      surface: '#221a14',
      text: '#fff4df',
      muted: '#c2a98b',
      accent: '#f59e5b',
      accentAlt: '#9cc8b8',
    },
    embeds: [
      {
        provider: 'bandcamp',
        url: 'https://bandcamp.com/',
        title: 'Bandcamp feature',
        bandcamp: { album: '1812978512' },
      },
      {
        provider: 'spotify',
        url: 'https://open.spotify.com/album/1ATL5GLyefJaxhQzSPVrLX',
        title: 'Quiet rooms playlist',
      },
    ],
    releases: [
      {
        title: 'Room Tone',
        kind: 'Album',
        year: 2026,
        cover: asset('/demo-pack-b/elias-room-tone.svg'),
        links: [{ label: 'Listen', url: 'https://bandcamp.com/' }],
      },
      {
        title: 'Soft Pedal',
        kind: 'EP',
        year: 2025,
        cover: asset('/demo-pack-b/elias-soft-pedal.svg'),
        links: [{ label: 'Listen', url: 'https://open.spotify.com/' }],
      },
      {
        title: 'Walnut Session',
        kind: 'Live EP',
        year: 2024,
        cover: asset('/demo-pack-b/elias-walnut.svg'),
        links: [{ label: 'Listen', url: 'https://music.apple.com/' }],
      },
    ],
    shows: [
      {
        date: '2026-08-09',
        city: 'Nashville, TN',
        venue: 'The Blue Room',
        ticketUrl: 'https://example.com',
      },
      {
        date: '2026-08-16',
        city: 'Atlanta, GA',
        venue: 'Eddie’s Attic',
        ticketUrl: 'https://example.com',
      },
      {
        date: '2026-08-29',
        city: 'Asheville, NC',
        venue: 'The Grey Eagle',
        ticketUrl: 'https://example.com',
      },
      { date: '2026-09-11', city: 'Brooklyn, NY', venue: 'Public Records', soldOut: true },
    ],
    bio: {
      tagline: 'Felt piano and Rhodes songs that keep the fingerprints in the recording.',
      paragraphs: [
        'Elias Wren writes at the keyboard with the microphone close enough to hear the bench move. His songs sit between ambient soul, modern hymnody, and after-hours piano records.',
        'Room Tone was recorded in three homes over a wet Tennessee winter, built from first takes, small choirs, and the low hum of old amplifiers left in the room.',
      ],
      portrait: {
        src: asset('/demo-pack-b/elias-hero.svg'),
        alt: 'Elias Wren graphic portrait',
      },
    },
    pressKit: {
      summary:
        'Elias Wren is a Nashville keys artist touring intimate rooms behind Room Tone. Available for seated headline shows, support slots, sync, and live session filming.',
      quotes: [
        { quote: 'Quiet music with a stubborn emotional center.', source: 'Stereogum' },
        { quote: 'Every chord feels hand-warmed.', source: 'Aquarium Drunkard' },
      ],
      stats: [
        { label: 'Monthly listeners', value: '420K' },
        { label: 'Syncs', value: '9' },
        { label: 'Set length', value: '70 min' },
      ],
      downloads: [
        { label: 'Press kit', url: 'https://example.com/elias-epk.pdf', meta: 'PDF' },
        { label: 'Session photos', url: 'https://example.com/elias-photos.zip', meta: 'ZIP' },
      ],
      contact: [{ label: 'Management', email: 'hello@eliaswren.example' }],
    },
    gallery: [
      { src: asset('/demo-pack-b/elias-hero.svg'), alt: 'Elias Wren keys graphic' },
      { src: asset('/demo-pack-b/elias-room-tone.svg'), alt: 'Room Tone cover artwork' },
      { src: asset('/demo-pack-b/elias-soft-pedal.svg'), alt: 'Soft Pedal cover artwork' },
    ],
    links: [
      { label: 'Room Tone', url: 'https://bandcamp.com/', note: 'Album and vinyl' },
      { label: 'Seated tour', url: 'https://example.com', note: 'Tickets' },
      { label: 'Newsletter', url: 'https://example.com' },
    ],
  },
];

export const getDemoArtist = (slug: string) => demoPackB.find((artist) => artist.slug === slug);
