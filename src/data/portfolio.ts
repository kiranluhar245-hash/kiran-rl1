export type ProjectCategory =
  | 'All Work'
  | 'Art Direction'
  | 'Photography'
  | 'Interactive'
  | 'Identity';

export interface CreativeProject {
  id: string;
  index: string;
  title: string;
  category: Exclude<ProjectCategory, 'All Work'>;
  year: string;
  client: string;
  summary: string;
  description: string;
  deliverables: string[];
  specs: string;
  featured?: boolean;
  artworkVariant:
    | 'portrait-study'
    | 'monolith'
    | 'kinetic-type'
    | 'editorial-spread'
    | 'acoustic-hardware'
    | 'spatial-light';
}

export const HERO_PORTRAIT = {
  src: '/assets/aistudio/sunil_d9fa0aa8.webp',
  alt: 'Monochrome editorial portrait of Sunil in a wool flat cap and overcoat amidst falling snow',
  caption: '01 · Studio Self-Portrait · Silver Gelatin Study',
};

export const STUDIO_METRICS = [
  { value: '48+', label: 'Creative Projects Shipped' },
  { value: '07 Yrs', label: 'Visual Direction & Design' },
  { value: '14', label: 'International Collaborations' },
  { value: '2026', label: 'Open for Commissions' },
];

export const CREATIVE_PROJECTS: CreativeProject[] = [
  {
    id: 'nocturne-silver',
    index: '01',
    title: 'Nocturne in Silver',
    category: 'Photography',
    year: '2026',
    client: 'Personal Monograph',
    summary: 'High-contrast monochrome portraiture exploring weather, silhouette, and grain.',
    description:
      'A winter portrait series photographed on medium-format monochrome film. By embracing atmospheric grain, deep shadow density, and minimal rim light, the study strips away distraction to foreground posture, texture, and stillness.',
    deliverables: ['35mm & Medium Format Prints', 'Exhibition Sequencing', 'Darkroom Toning'],
    specs: '50mm f/1.4 · ISO 800 · Tri-X 400',
    featured: true,
    artworkVariant: 'portrait-study',
  },
  {
    id: 'monolith-04',
    index: '02',
    title: 'Monolith 04',
    category: 'Art Direction',
    year: '2025',
    client: 'Kora Architectural Press',
    summary: 'Brutalist spatial direction and shadow geometry for an architectural anthology.',
    description:
      'Art direction and visual system for a 240-page architectural monograph examining raw concrete pavilions across South Asia. Built around stark light-to-shadow ratios and disciplined Swiss typographic grids.',
    deliverables: ['Art Direction', 'Book Architecture', 'Exhibition Posters'],
    specs: 'Offset Duotone · 170gsm Uncoated',
    artworkVariant: 'monolith',
  },
  {
    id: 'chroma-kinetic',
    index: '03',
    title: 'Chroma Kinetic',
    category: 'Interactive',
    year: '2025',
    client: 'Verge Sound Lab',
    summary: 'Browser-based generative typography and rhythmic motion identity.',
    description:
      'An interactive visual identity and web instrument created for an independent sound design festival. Responds smoothly to cursor velocity and rhythmic pulse without heavy GPU overhead.',
    deliverables: ['Interactive Web Canvas', 'Motion System', 'Digital Posters'],
    specs: '60fps SVG · Web Audio Reactive',
    artworkVariant: 'kinetic-type',
  },
  {
    id: 'vespera-print',
    index: '04',
    title: 'Vespera Journal',
    category: 'Identity',
    year: '2025',
    client: 'Vespera Cultural Review',
    summary: 'Complete editorial identity and bespoke typographic grid for a quarterly journal.',
    description:
      'Designed the masthead, cover architecture, and interior reading rhythms for an independent arts and essays publication. Balances generous margins with sharp cinnabar index markers.',
    deliverables: ['Visual Identity', 'Editorial Grid', 'Print Production'],
    specs: 'Bespoke Masthead · Quarterly Print',
    artworkVariant: 'editorial-spread',
  },
  {
    id: 'kinetix-audio',
    index: '05',
    title: 'Kinetix Turntable',
    category: 'Art Direction',
    year: '2024',
    client: 'Kinetix Acoustics',
    summary: 'Industrial product storytelling and tactile hardware interface direction.',
    description:
      'Product launch photography direction and minimalist hardware display language for a precision milled-aluminum turntable and analog pre-amp line.',
    deliverables: ['Product Direction', 'Hardware UI Spec', 'Launch Film Stills'],
    specs: 'Studio Strobe · Anodized Matte Finish',
    artworkVariant: 'acoustic-hardware',
  },
  {
    id: 'solstice-archive',
    index: '06',
    title: 'Solstice Pavilion',
    category: 'Interactive',
    year: '2024',
    client: 'Gallery 19 Mumbai',
    summary: 'Spatial exhibition guide and digital archive for a light installation.',
    description:
      'A calm, architectural digital companion allowing visitors to explore light-beam angles, floorplan elevations, and curatorial essays from the Solstice exhibition.',
    deliverables: ['Digital Archive', 'Spatial Wayfinding', 'Curatorial Microsite'],
    specs: 'Interactive Floorplan · Archival Index',
    artworkVariant: 'spatial-light',
  },
];

export const DISCIPLINES = [
  {
    number: '01',
    title: 'Art & Visual Direction',
    description:
      'Shaping cohesive visual worlds for cultural institutions, independent studios, and design-led brands from initial mood studies through final production.',
    focus: 'Campaign Direction · Monograph Design · Visual Systems',
  },
  {
    number: '02',
    title: 'Editorial Photography & Print',
    description:
      'Monochrome portraiture, architectural documentation, and tactile print editions crafted with deliberate pacing, natural shadow, and archival restraint.',
    focus: 'Studio Portraiture · Architectural Studies · Print Curation',
  },
  {
    number: '03',
    title: 'Interactive Web & Motion',
    description:
      'Designing and engineering fast, typography-driven web portfolios, exhibition microsites, and kinetic digital experiences with zero visual clutter.',
    focus: 'Creative Front-End · Micro-Interactions · Digital Archives',
  },
];

export const RECOGNITION = [
  { title: 'Design Week Feature', detail: 'Editorial Monograph Showcase · 2025' },
  { title: 'Type Directors Selection', detail: 'Vespera Journal Identity · 2025' },
  { title: 'Mumbai Design Triennale', detail: 'Monochrome Series Exhibitor · 2024' },
];

export const CONTACT_INFO = {
  email: 'hello@sunilstudio.design',
  phone: '+91 98204 55190',
  location: 'Mumbai, India · Available Worldwide',
  hours: 'Mon–Fri, 10:00–19:00 IST',
  responseTime: 'Replies within 24 hours',
  socials: [
    { label: 'Instagram', handle: '@sunil.archive', url: 'https://instagram.com' },
    { label: 'Behance', handle: 'behance.net/sunilstudio', url: 'https://behance.net' },
    { label: 'LinkedIn', handle: 'in/sunil-creative', url: 'https://linkedin.com' },
    { label: 'Are.na', handle: 'are.na/sunil', url: 'https://are.na' },
  ],
};
