import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Camera, Check, Copy } from 'lucide-react';
import {
  CONTACT_INFO,
  CREATIVE_PROJECTS,
  DISCIPLINES,
  HERO_PORTRAIT,
  ProjectCategory,
  RECOGNITION,
  STUDIO_METRICS,
} from './data/portfolio';
import { ProjectArtwork } from './components/ProjectArtwork';
import { ProjectLightbox } from './components/ProjectLightbox';
import { ContactSection } from './components/ContactSection';

const FILTER_CATEGORIES: ProjectCategory[] = [
  'All Work',
  'Art Direction',
  'Photography',
  'Interactive',
  'Identity',
];

const MARQUEE_PHRASES = [
  'Selected Works',
  'Art Direction',
  'Editorial Photography',
  'Interactive Systems',
  'Visual Identity',
  'Print Monographs',
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Work');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [heroImgFailed, setHeroImgFailed] = useState(false);
  const [heroCopied, setHeroCopied] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Work') return CREATIVE_PROJECTS;
    return CREATIVE_PROJECTS.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const activeProjectIndex = useMemo(() => {
    if (!selectedProjectId) return -1;
    return filteredProjects.findIndex((p) => p.id === selectedProjectId);
  }, [filteredProjects, selectedProjectId]);

  const selectedProject =
    activeProjectIndex >= 0 ? filteredProjects[activeProjectIndex] : null;

  const handlePrevProject = () => {
    if (filteredProjects.length === 0) return;
    const prevIdx =
      (activeProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[prevIdx].id);
  };

  const handleNextProject = () => {
    if (filteredProjects.length === 0) return;
    const nextIdx = (activeProjectIndex + 1) % filteredProjects.length;
    setSelectedProjectId(filteredProjects[nextIdx].id);
  };

  const handleCopyHeroEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setHeroCopied(true);
      window.setTimeout(() => setHeroCopied(false), 2000);
    } catch {
      const contactEl = document.getElementById('contact');
      contactEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#F6F6F4] text-[#111111]">
      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-[#F6F6F4]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 sm:px-10">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-[#111111] whitespace-nowrap shrink-0"
          >
            Sunil
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600"
          >
            <a
              href="#projects"
              className="py-1 transition-colors duration-150 hover:text-[#111111] hover:underline hover:decoration-[#C82317] hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#disciplines"
              className="py-1 transition-colors duration-150 hover:text-[#111111] hover:underline hover:decoration-[#C82317] hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Disciplines
            </a>
            <a
              href="#about"
              className="py-1 transition-colors duration-150 hover:text-[#111111] hover:underline hover:decoration-[#C82317] hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#contact"
              className="py-1 transition-colors duration-150 hover:text-[#111111] hover:underline hover:decoration-[#C82317] hover:underline-offset-4 whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#111111] px-4 text-xs font-medium text-white transition-colors duration-150 hover:bg-[#C82317] whitespace-nowrap shrink-0"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Split-Screen Editorial Hero */}
        <section className="mx-auto max-w-[1200px] px-6 pt-12 pb-10 sm:px-10 sm:pt-16 lg:pt-20 lg:pb-14">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-7 lg:py-4">
              <div>
                <p className="text-xs font-medium text-neutral-500">
                  Visual Director &amp; Creative Technologist
                  <span aria-hidden="true" className="mx-2">
                    ·
                  </span>
                  Mumbai
                </p>

                <h1 className="mt-5 font-display text-[clamp(2.35rem,4.3vw,3.85rem)] font-semibold leading-[1.06] tracking-tight text-[#111111] text-balance">
                  Crafting atmospheric visuals and tactile digital experiences.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Independent creative practice focused on monochrome photography, editorial art direction, and restrained interactive websites for studios, architects, and cultural brands.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#C82317] px-5 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#A91D13] whitespace-nowrap shrink-0"
                >
                  <span>Explore Projects</span>
                  <ArrowDownRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyHeroEmail}
                  className="inline-flex h-11 items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 text-sm font-medium text-[#111111] transition-colors duration-150 hover:border-neutral-400 hover:bg-neutral-50 whitespace-nowrap shrink-0"
                >
                  {heroCopied ? (
                    <>
                      <Check className="h-4 w-4 text-[#C82317]" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-neutral-500" />
                      <span>{CONTACT_INFO.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-neutral-200 bg-[#141416] sm:min-h-[440px]">
                {!heroImgFailed ? (
                  <img
                    src={HERO_PORTRAIT.src}
                    alt={HERO_PORTRAIT.alt}
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-3 bg-neutral-900 p-8 text-center text-neutral-300">
                    <Camera className="h-8 w-8 text-neutral-500" strokeWidth={1.5} />
                    <p className="font-display text-sm font-medium text-neutral-200">
                      {HERO_PORTRAIT.caption}
                    </p>
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-4 text-xs text-neutral-200">
                  <span className="truncate font-mono tabular-nums">
                    {HERO_PORTRAIT.caption}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory('All Work');
                      setSelectedProjectId('nocturne-silver');
                    }}
                    className="inline-flex items-center gap-1 font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white whitespace-nowrap shrink-0"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Full-width 4-column Key Metrics Strip below Hero Split */}
          <div className="mt-12 grid grid-cols-2 gap-y-6 border-t border-b border-neutral-200 py-7 sm:grid-cols-4 sm:gap-8">
            {STUDIO_METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="font-display text-2xl font-semibold tracking-tight text-[#111111] tabular-nums sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs text-neutral-600 sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Subtle Editorial Marquee Divider */}
        <div
          aria-hidden="true"
          className="overflow-hidden border-b border-neutral-200 bg-[#EFEFEA] py-3"
        >
          <div className="animate-marquee flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-600">
            {[...MARQUEE_PHRASES, ...MARQUEE_PHRASES].map((phrase, idx) => (
              <span key={`${phrase}-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
                <span>{phrase}</span>
                <span className="text-[#C82317]">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Selected Creative Projects Showcase (Dynamic Bento Grid + Filter) */}
        <section id="projects" className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium tracking-wide text-neutral-500">
                Portfolio Index · 2024–2026
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl text-balance">
                Selected Creative Projects
              </h2>
            </div>

            {/* Interactive Segmented Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter projects by discipline"
              className="flex flex-wrap items-center gap-1 rounded-xl border border-neutral-200 bg-white p-1"
            >
              {FILTER_CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`h-9 rounded-lg px-3.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#111111] text-white'
                        : 'text-neutral-600 hover:bg-neutral-100 hover:text-[#111111]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-12 text-center">
              <p className="text-sm text-neutral-600">No projects found in this discipline.</p>
              <button
                type="button"
                onClick={() => setActiveCategory('All Work')}
                className="mt-4 inline-flex h-10 items-center rounded-lg bg-[#111111] px-4 text-xs font-medium text-white"
              >
                Show All Work
              </button>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => {
                const isFeaturedBento =
                  activeCategory === 'All Work' && project.featured;

                return (
                  <article
                    key={project.id}
                    className={`group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors duration-200 hover:border-neutral-400 ${
                      isFeaturedBento ? 'lg:col-span-2 lg:row-span-2' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProjectId(project.id)}
                      className="flex h-full w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C82317]"
                    >
                      <div
                        className={`relative w-full overflow-hidden border-b border-neutral-100 ${
                          isFeaturedBento
                            ? 'aspect-[4/3] lg:flex-1 lg:min-h-[380px]'
                            : 'aspect-[4/3]'
                        }`}
                      >
                        <ProjectArtwork project={project} />
                      </div>

                      <div className="flex flex-1 flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono tabular-nums">
                            <span>{project.index}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-sans">{project.category}</span>
                            <span aria-hidden="true">·</span>
                            <span>{project.year}</span>
                          </div>

                          <div className="mt-2.5 flex items-start justify-between gap-4">
                            <h3
                              className={`font-display font-semibold tracking-tight text-[#111111] ${
                                isFeaturedBento ? 'text-2xl sm:text-3xl' : 'text-xl'
                              }`}
                            >
                              {project.title}
                            </h3>
                            <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors duration-150 group-hover:border-[#C82317] group-hover:bg-[#C82317] group-hover:text-white">
                              <ArrowUpRight className="h-4 w-4" />
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                            {project.summary}
                          </p>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-xs text-neutral-500">
                          <span className="truncate">{project.client}</span>
                          <span className="font-medium text-[#111111] group-hover:text-[#C82317] whitespace-nowrap shrink-0">
                            View Case Study
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* Disciplines & About Section */}
        <section
          id="disciplines"
          className="border-t border-neutral-200/80 bg-[#F1F1EE] py-20 lg:py-24"
        >
          <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div id="about" className="lg:col-span-5">
                <p className="text-xs font-medium tracking-wide text-neutral-500">
                  About &amp; Practice
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl text-balance">
                  Disciplined craft across lens, paper, and screen.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600">
                  Over the past seven years, I’ve partnered with independent publishers, architectural practices, and product teams to strip away visual noise and build work anchored in proportion, shadow, and clarity.
                </p>

                {/* Recognition adjacent to practice claims */}
                <div className="mt-10 border-t border-neutral-300/80 pt-6">
                  <p className="text-xs font-medium text-neutral-500">
                    Selected Recognition
                  </p>
                  <ul className="mt-4 space-y-3">
                    {RECOGNITION.map((item) => (
                      <li
                        key={item.title}
                        className="flex flex-wrap items-baseline justify-between gap-2 text-sm"
                      >
                        <span className="font-medium text-[#111111]">{item.title}</span>
                        <span className="text-xs text-neutral-500">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="divide-y divide-neutral-300/80 border-t border-b border-neutral-300/80">
                  {DISCIPLINES.map((item) => (
                    <div key={item.number} className="py-7 sm:py-8">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-6">
                        <span className="font-mono text-sm font-medium text-[#C82317] tabular-nums shrink-0">
                          {item.number}.
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold tracking-tight text-[#111111]">
                            {item.title}
                          </h3>
                          <p className="mt-2.5 text-sm leading-relaxed text-neutral-600 sm:text-base">
                            {item.description}
                          </p>
                          <p className="mt-3 text-xs font-medium text-neutral-500">
                            {item.focus}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Direct Inquiry */}
        <ContactSection />
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-neutral-200 bg-[#F6F6F4] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:px-10">
          <p className="font-medium text-[#111111]">
            © 2026 Sunil Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="transition-colors hover:text-[#111111] whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-[#111111] whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-[#111111] whitespace-nowrap shrink-0"
            >
              Contact
            </a>
            <a
              href="#top"
              className="font-medium text-[#111111] underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-[#C82317] whitespace-nowrap shrink-0"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>

      {/* Fullscreen Project Lightbox */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onPrev={handlePrevProject}
        onNext={handleNextProject}
      />
    </div>
  );
}
