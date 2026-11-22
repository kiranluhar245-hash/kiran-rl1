import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CreativeProject } from '../data/portfolio';
import { ProjectArtwork } from './ProjectArtwork';

interface ProjectLightboxProps {
  project: CreativeProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectLightbox({ project, onClose, onPrev, onNext }: ProjectLightboxProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#141416] text-neutral-100 shadow-2xl lg:grid lg:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project preview"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/90 text-neutral-100 transition-colors duration-150 hover:bg-neutral-800"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative aspect-[4/3] w-full bg-neutral-950 lg:col-span-7 lg:aspect-auto lg:min-h-[520px]">
          <ProjectArtwork project={project} expanded />
        </div>

        <div className="flex flex-col justify-between overflow-y-auto p-6 sm:p-8 lg:col-span-5">
          <div>
            <div className="flex flex-wrap items-center gap-2 pr-10 text-xs font-mono text-neutral-400 tabular-nums">
              <span>{project.index}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
            </div>

            <h2
              id="lightbox-title"
              className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl"
            >
              {project.title}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
              {project.description}
            </p>

            <div className="mt-8 space-y-4 border-t border-neutral-800 pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-neutral-400">Client</span>
                <span className="text-right font-medium text-neutral-100">{project.client}</span>
              </div>
              <div className="flex justify-between gap-4 border-t border-neutral-800/70 pt-3">
                <span className="text-neutral-400">Deliverables</span>
                <span className="text-right font-medium text-neutral-100">
                  {project.deliverables.join(' · ')}
                </span>
              </div>
              <div className="flex justify-between gap-4 border-t border-neutral-800/70 pt-3">
                <span className="text-neutral-400">Specification</span>
                <span className="text-right font-mono text-xs text-neutral-300 tabular-nums">
                  {project.specs}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-neutral-800 pt-5">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-700 px-3.5 text-xs font-medium text-neutral-200 transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-neutral-700 px-3.5 text-xs font-medium text-neutral-200 transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap shrink-0"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
