import { useState } from 'react';
import { Camera } from 'lucide-react';
import { CreativeProject, HERO_PORTRAIT } from '../data/portfolio';

interface ProjectArtworkProps {
  project: CreativeProject;
  expanded?: boolean;
}

export function ProjectArtwork({ project, expanded = false }: ProjectArtworkProps) {
  const [imgFailed, setImgFailed] = useState(false);

  if (project.artworkVariant === 'portrait-study') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#121214]">
        {!imgFailed ? (
          <img
            src={HERO_PORTRAIT.src}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-neutral-300">
            <Camera className="h-7 w-7 text-neutral-400" strokeWidth={1.5} />
            <span className="font-display text-sm font-medium">{project.title}</span>
          </div>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
        />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono tracking-tight text-neutral-200 tabular-nums">
          <span>{project.specs}</span>
          {expanded && <span>Plate 01 / Silver Gelatin</span>}
        </div>
      </div>
    );
  }

  if (project.artworkVariant === 'monolith') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#18181B]">
        <svg
          viewBox="0 0 600 450"
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="monoSky" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="100%" stopColor="#09090B" />
            </linearGradient>
            <linearGradient id="monoSlab" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E4E4E7" />
              <stop offset="100%" stopColor="#71717A" />
            </linearGradient>
          </defs>
          <rect width="600" height="450" fill="url(#monoSky)" />
          <line x1="0" y1="340" x2="600" y2="340" stroke="#3F3F46" strokeWidth="1" />
          <line x1="120" y1="0" x2="120" y2="450" stroke="#27272A" strokeWidth="1" />
          <line x1="480" y1="0" x2="480" y2="450" stroke="#27272A" strokeWidth="1" />
          <polygon points="175,340 175,90 310,60 310,340" fill="url(#monoSlab)" />
          <polygon points="310,60 395,115 395,340 310,340" fill="#18181B" />
          <polygon points="395,340 520,415 310,415 175,340" fill="#09090B" opacity="0.85" />
          <rect x="218" y="145" width="48" height="195" fill="#111113" />
          <circle cx="455" cy="105" r="22" fill="#C82317" />
        </svg>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-300 tabular-nums">
          <span>FIG. 04 — ELEVATION</span>
          <span>240 PP</span>
        </div>
      </div>
    );
  }

  if (project.artworkVariant === 'kinetic-type') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#111111]">
        <svg
          viewBox="0 0 600 450"
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="600" height="450" fill="#111111" />
          <g stroke="#27272A" strokeWidth="1">
            <line x1="0" y1="90" x2="600" y2="90" />
            <line x1="0" y1="180" x2="600" y2="180" />
            <line x1="0" y1="270" x2="600" y2="270" />
            <line x1="0" y1="360" x2="600" y2="360" />
            <line x1="150" y1="0" x2="150" y2="450" />
            <line x1="300" y1="0" x2="300" y2="450" />
            <line x1="450" y1="0" x2="450" y2="450" />
          </g>
          <path
            d="M 40 225 C 140 80, 220 370, 320 225 C 420 80, 480 350, 560 205"
            fill="none"
            stroke="#F4F4F5"
            strokeWidth="3"
          />
          <path
            d="M 40 250 C 150 110, 220 390, 320 250 C 420 110, 480 375, 560 230"
            fill="none"
            stroke="#C82317"
            strokeWidth="2"
          />
          <path
            d="M 40 200 C 130 55, 220 345, 320 200 C 420 55, 480 325, 560 180"
            fill="none"
            stroke="#71717A"
            strokeWidth="1.5"
          />
          <circle cx="320" cy="225" r="7" fill="#F4F4F5" />
          <circle cx="150" cy="182" r="5" fill="#C82317" />
        </svg>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 tabular-nums">
          <span>60 HZ · WAVEFORM</span>
          <span>INTERACTIVE</span>
        </div>
      </div>
    );
  }

  if (project.artworkVariant === 'editorial-spread') {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#EAE9E4] p-6">
        <div className="grid h-full max-h-[260px] w-full max-w-[380px] grid-cols-2 border border-neutral-300 bg-[#FAF9F6] shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <div className="flex flex-col justify-between border-r border-neutral-200 p-4">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500">
              <span>ISSUE 09</span>
              <span className="text-[#C82317]">●</span>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight text-neutral-900">
                Vespera
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-500">
                Essays on Contemporary Craft & Spatial Form
              </p>
            </div>
            <div className="h-[1px] w-full bg-neutral-200" />
          </div>
          <div className="flex flex-col justify-between p-4">
            <div className="h-24 w-full bg-neutral-900 p-2.5 flex flex-col justify-end">
              <div className="h-1 w-8 bg-[#C82317]" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-neutral-200" />
              <div className="h-1.5 w-4/5 bg-neutral-200" />
              <div className="h-1.5 w-3/5 bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.artworkVariant === 'acoustic-hardware') {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#1D1D20]">
        <svg
          viewBox="0 0 600 450"
          className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <rect width="600" height="450" fill="#1D1D20" />
          <rect x="85" y="75" width="430" height="300" rx="14" fill="#27272B" stroke="#3F3F46" strokeWidth="1.5" />
          <circle cx="245" cy="225" r="108" fill="#141416" stroke="#52525B" strokeWidth="1.5" />
          <circle cx="245" cy="225" r="82" fill="none" stroke="#27272A" strokeWidth="1" />
          <circle cx="245" cy="225" r="56" fill="none" stroke="#27272A" strokeWidth="1" />
          <circle cx="245" cy="225" r="22" fill="#C82317" />
          <circle cx="245" cy="225" r="5" fill="#141416" />
          <line x1="430" y1="125" x2="340" y2="295" stroke="#E4E4E7" strokeWidth="4" strokeLinecap="round" />
          <circle cx="430" cy="125" r="18" fill="#3F3F46" stroke="#71717A" strokeWidth="1.5" />
          <rect x="405" y="322" width="60" height="12" rx="2" fill="#3F3F46" />
        </svg>
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-400 tabular-nums">
          <span>33.3 RPM</span>
          <span>ANODIZED ALU</span>
        </div>
      </div>
    );
  }

  // spatial-light
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#ECEBE6]">
      <svg
        viewBox="0 0 600 450"
        className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <rect width="600" height="450" fill="#ECEBE6" />
        <polygon points="150,0 380,450 80,450" fill="#FFFFFF" opacity="0.72" />
        <polygon points="310,0 540,450 380,450" fill="#D4D4CE" opacity="0.55" />
        <rect x="110" y="95" width="380" height="260" fill="none" stroke="#18181B" strokeWidth="1.2" />
        <line x1="300" y1="95" x2="300" y2="355" stroke="#A1A1AA" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="300" cy="225" r="42" fill="none" stroke="#C82317" strokeWidth="2" />
        <circle cx="300" cy="225" r="5" fill="#18181B" />
      </svg>
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-neutral-600 tabular-nums">
        <span>GALLERY 19</span>
        <span>ELEVATION A</span>
      </div>
    </div>
  );
}
