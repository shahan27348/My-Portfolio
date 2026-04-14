import React, { useEffect, useRef } from "react";
import { PROJECTS } from "@/constants";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

const STAGGER = [0, 0.1, 0.15, 0.2];

const ProjectsNew: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards =
      gridRef.current?.querySelectorAll<HTMLElement>(".project-card");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add(
              "project-card--visible",
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24">
      <h2
        className="uppercase text-[#e4e4e4] leading-none tracking-tight mb-12"
        style={{
          fontFamily: "'League Gothic', sans-serif",
          fontSize: "clamp(2.8rem, 7vw, 7rem)",
        }}
      >
        Things I've Built
      </h2>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ transitionDelay: `${STAGGER[index] ?? 0}s` }}
          >
            {/* Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-card__img"
            />

            {/* Overlay — placed before card-info so text renders above */}
            <div className="card-overlay" />

            {/* Slide-up info */}
            <div className="card-info">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/40
                               text-[10px] uppercase tracking-widest text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3
                  className="text-white uppercase leading-tight"
                  style={{
                    fontFamily: "'League Gothic', sans-serif",
                    fontSize: "clamp(1.4rem, 3vw, 2rem)",
                  }}
                >
                  {project.title}
                </h3>
                <div className="flex gap-3 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsNew;
