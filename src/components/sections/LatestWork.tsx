import React, { useRef, useEffect } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const WORK_ITEMS = [
  {
    title: "E-Commerce Platform",
    tags: ["Full Stack", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",
    url: "#",
  },
  {
    title: "Project Management Tool",
    tags: ["React", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=80",
    url: "#",
  },
  {
    title: "Data Dashboard",
    tags: ["TypeScript", "GraphQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    url: "#",
  },
  {
    title: "Portfolio Website",
    tags: ["React", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
    url: "#",
  },
];

// ── Horizontal card (work page) ───────────────────────────────────────────────
const HorizontalCard: React.FC<{
  item: (typeof WORK_ITEMS)[0];
  index: number;
  total: number;
}> = ({ item, index, total }) => (
  <div
    className="relative flex-shrink-0 overflow-hidden"
    style={{ width: "100vw", height: "100vh" }}
  >
    {/* Background image */}
    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover scale-105"
    />

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

    {/* Content — bottom-left */}
    <div className="absolute inset-0 flex flex-col justify-end px-12 md:px-20 lg:px-28 pb-20 z-10">
      {/* Counter */}
      <span className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6 font-mono">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-5">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full border border-white/25 text-white/60
                       text-[11px] uppercase tracking-widest backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3
        className="uppercase text-white leading-none tracking-tight mb-8"
        style={{
          fontFamily: "'League Gothic', sans-serif",
          fontSize: "clamp(3rem, 8vw, 7rem)",
        }}
      >
        {item.title}
      </h3>

      {/* CTA */}
      <a
        href={item.url}
        className="group inline-flex items-center gap-4 text-white/50 hover:text-white
                   text-xs uppercase tracking-[0.2em] transition-colors duration-300 w-fit"
      >
        <span>View Project</span>
        <span
          className="block h-px bg-white/30 group-hover:bg-white
                     transition-all duration-500 ease-out"
          style={{ width: "2rem" }}
        />
      </a>
    </div>
  </div>
);

// ── Horizontal scroll section (work page) ────────────────────────────────────
const HorizontalWorkSection: React.FC = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const intro = introRef.current;
    if (!section || !track || !intro) return;

    const ctx = gsap.context(() => {
      // Animate intro heading line by line on scroll
      gsap.from(intro.querySelectorAll(".intro-line"), {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: intro,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Horizontal pin — only the cards track
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinType: "transform",
          scrub: 1,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── Vertical intro ─────────────────────────────────────────────── */}
      <div
        ref={introRef}
        className="flex flex-col justify-end px-12 md:px-20 lg:px-28 pb-24 pt-32"
        style={{ minHeight: "100vh" }}
      >
        {/* Label */}
        <p className="intro-line text-white/30 text-xs uppercase tracking-[0.35em] mb-8 font-mono">
          Selected works · {WORK_ITEMS.length} projects
        </p>

        {/* Heading — each word is an animated line */}
        <h2
          className="uppercase leading-none tracking-tight text-white overflow-hidden"
          style={{
            fontFamily: "'League Gothic', sans-serif",
            fontSize: "clamp(4.5rem, 15vw, 10rem)",
          }}
        >
          <span className="intro-line block">My</span>
          <span className="intro-line block">Latest</span>
          <span className="intro-line block">Work</span>
        </h2>

        {/* Scroll hint */}
        <p className="intro-line mt-72 text-white/25 text-xs uppercase tracking-[0.3em]">
          Scroll to explore →
        </p>
      </div>

      {/* ── Pinned horizontal cards ─────────────────────────────────────── */}
      <div ref={sectionRef} style={{ height: "100vh", width: "100%" }}>
        <div
          ref={trackRef}
          className="flex h-full"
          style={{
            width: `${WORK_ITEMS.length * 100}vw`,
            willChange: "transform",
          }}
        >
          {/* ── Work cards ──────────────────────────────────── */}
          {WORK_ITEMS.map((item, i) => (
            <HorizontalCard
              key={item.title}
              item={item}
              index={i}
              total={WORK_ITEMS.length}
            />
          ))}
        </div>
      </div>
    </>
  );
};

// ── Vertical stacking card (home page) ──────────────────────────────────────
const WorkItem: React.FC<{
  item: (typeof WORK_ITEMS)[0];
  index: number;
  total: number;
}> = ({ item, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const infoWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const par = parallaxRef.current;
    const infoWrap = infoWrapRef.current;
    if (!el || !par || !infoWrap) return;

    const ctx = gsap.context(() => {
      // 2. Parallax zoom â€” GSAP animates the wrapper div, NOT the img
      //    so the img's CSS hover scale is free of conflicts
      gsap.fromTo(
        par,
        { scale: 1.14 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top top",
            scrub: 1.4,
          },
        },
      );

      // Scale-down as the next card slides over
      if (index < total - 1) {
        gsap.to(el, {
          scale: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 1. Scroll reveal â€” animates the wrapper div (infoWrapRef)
      //    After it completes, clearProps removes inline styles so CSS
      //    hover on the inner .lw-info takes over cleanly
      gsap.from(infoWrap, {
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
        delay: index * 0.08,
        onComplete: () => {
          gsap.set(infoWrap, { clearProps: "all" });
        },
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [index, total]);

  return (
    <div
      ref={containerRef}
      className="lw-card sticky top-0 overflow-hidden"
      style={{ height: "100vh", zIndex: index + 1, willChange: "transform" }}
    >
      {/* Parallax wrapper â€” GSAP scales this; img inside is free for CSS hover */}
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        style={{ willChange: "transform" }}
      >
        {/* 2. Image zoom on hover â€” pure CSS, no GSAP conflict */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* 3. Dark overlay â€” fades in on card hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Clickable content area */}
      <a
        href={item.url}
        className="absolute inset-0 z-10 flex items-center text-center
                   px-10 md:px-16 lg:px-24 pb-14"
      >
        <div ref={infoWrapRef} className="w-full">
          <div>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#E4E4E4] text-[#E4E4E4]
                             text-[11px] uppercase tracking-widest backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3
              className="uppercase text-white leading-none tracking-tight m-0 p-0"
              style={{
                fontFamily: "'League Gothic', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
              }}
            >
              {item.title}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const LatestWork: React.FC<{ horizontalScroll?: boolean }> = ({
  horizontalScroll = false,
}) => {
  if (horizontalScroll) {
    return <HorizontalWorkSection />;
  }

  return (
    <AnimatedSection>
      <section id="work">
        {/* Section heading */}
        <div className="px-10 md:px-16 lg:px-24 py-16 pb-10">
          <h2
            className="uppercase bg-gradient-to-b from-[#e4e4e4] to-black bg-clip-text text-transparent leading-none tracking-tight m-0"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3rem, 9vw, 9rem)",
            }}
          >
            My
            <br />
            Latest Work
          </h2>
        </div>

        {/* Stacking cards */}
        <div>
          {WORK_ITEMS.map((item, i) => (
            <WorkItem
              key={item.title}
              item={item}
              index={i}
              total={WORK_ITEMS.length}
            />
          ))}
        </div>
        <div className="flex justify-center py-16 px-6">
          <a href="/work">
            <button className="lw-btn w-full max-w-xl">
              <span className="lw-btn__fill" />
              <span className="lw-btn__text">See More</span>
            </button>
          </a>
        </div>
      </section>
    </AnimatedSection>
  );
};
export default LatestWork;
