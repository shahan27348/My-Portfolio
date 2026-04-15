import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
          className="lw-img absolute inset-0 w-full h-full object-cover"
          style={{ transformOrigin: "center center" }}
        />
      </div>

      {/* 3. Dark overlay â€” fades in on card hover */}
      <div className="card-overlay" />

      {/* Clickable content area */}
      <a
        href={item.url}
        className="absolute inset-0 z-10 flex items-center text-center
                   px-10 md:px-16 lg:px-24 pb-14"
      >
        {/* Scroll-reveal wrapper (GSAP targets this) */}
        <div ref={infoWrapRef} className="w-full">
          {/* 4. Text slide-up â€” CSS hover on .lw-card triggers .lw-info */}
          <div className="lw-info">
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
              className="group/title relative inline-block uppercase text-white
                         leading-none tracking-tight m-0 p-0 cursor-pointer"
              style={{
                fontFamily: "'League Gothic', sans-serif",
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
              }}
            >
              {item.title}
              <span
                className="absolute bottom-[-10px] left-0 h-[10px] bg-white 
                           w-0 group-hover/title:w-full transition-all duration-500 ease-out"
              />
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
};

const LatestWork: React.FC = () => {
  return (
    <section id="work">
      {/* Section heading */}
      <div className="px-10 md:px-16 lg:px-24 py-16 pb-10">
        <h2
          className="uppercase text-[#e4e4e4] leading-none tracking-tight"
          style={{
            fontFamily: "'League Gothic', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 7rem)",
          }}
        >
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
      <button className="footer-back-top">
        <span className="footer-back-top__fill" />
        <span className="footer-back-top__text">See More</span>
      </button>
    </section>
  );
};
export default LatestWork;
