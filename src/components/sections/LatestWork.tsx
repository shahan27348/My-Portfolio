import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TagItem = { label: string; href?: string };
type WorkItem = { title: string; tags: TagItem[]; image: string; url: string };

const WORK_ITEMS: WorkItem[] = [
  {
    title: "Vibe Vault",
    tags: [
      { label: "GitHub", href: "https://github.com/shahan27348/Vibe-Vault" },
      { label: "Live Preview", href: "https://vibe-vault-henna.vercel.app/" },
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80",
    url: "https://vibe-vault-henna.vercel.app/",
  },
  {
    title: "Project Management Tool",
    tags: [{ label: "React" }, { label: "Firebase" }],
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=80",
    url: "#",
  },
  {
    title: "Data Dashboard",
    tags: [{ label: "TypeScript" }, { label: "GraphQL" }],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    url: "#",
  },
  {
    title: "Portfolio Website",
    tags: [{ label: "React" }, { label: "Tailwind CSS" }],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=80",
    url: "#",
  },
];

// â”€â”€ Horizontal card (work page) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

    {/* Content â€” bottom-left */}
    <div className="absolute inset-0 flex flex-col justify-end px-12 md:px-20 lg:px-28 pb-20 z-10">
      {/* Counter */}
      <span className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6 font-mono">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mb-5">
        {item.tags.map((tag) =>
          tag.href ? (
            <a
              key={tag.label}
              href={tag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-white/25 text-white/60
                         text-[11px] uppercase tracking-widest backdrop-blur-sm
                         hover:border-white/60 hover:text-white transition-colors duration-300"
            >
              {tag.label}
            </a>
          ) : (
            <span
              key={tag.label}
              className="px-4 py-1.5 rounded-full border border-white/25 text-white/60
                         text-[11px] uppercase tracking-widest backdrop-blur-sm"
            >
              {tag.label}
            </span>
          ),
        )}
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

// â”€â”€ Horizontal scroll section (work page) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

      // Horizontal pin â€” only the cards track
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
      {/* â”€â”€ Vertical intro â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div
        ref={introRef}
        className="flex flex-col justify-end px-12 md:px-20 lg:px-28 pb-24 pt-32"
        style={{ minHeight: "100vh" }}
      >
        {/* Label */}
        <p className="intro-line text-white/30 text-xs uppercase tracking-[0.35em] mb-8 font-mono">
          Selected works Â· {WORK_ITEMS.length} projects
        </p>

        {/* Heading â€” each word is an animated line */}
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
          Scroll to explore â†’
        </p>
      </div>

      {/* â”€â”€ Pinned horizontal cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      <div ref={sectionRef} style={{ height: "100vh", width: "100%" }}>
        <div
          ref={trackRef}
          className="flex h-full"
          style={{
            width: `${WORK_ITEMS.length * 100}vw`,
            willChange: "transform",
          }}
        >
          {/* â”€â”€ Work cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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

// ── Scroll-stack section (home page) ─────────────────────────────────────────
const StackSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlaysRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const overlays = overlaysRef.current.filter(Boolean) as HTMLDivElement[];
    const n = cards.length;

    // Initialize: cards 1..n-1 start below viewport
    cards.forEach((card, i) => {
      if (i > 0) gsap.set(card, { yPercent: 100 });
    });

    // Single timeline drives ALL animations — no property conflicts
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${(n - 1) * window.innerHeight}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    for (let i = 1; i < n; i++) {
      const t = i - 1; // timeline position for this step

      // Slide in next card
      tl.to(cards[i], { yPercent: 0, ease: "none", duration: 1 }, t);

      // Darken cards already on screen (no scale → no zoom)
      for (let j = 0; j < i; j++) {
        tl.to(overlays[j], { opacity: 0.45, ease: "none", duration: 1 }, t);
      }
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "100vh" }}>
      {WORK_ITEMS.map((item, i) => (
        <div
          key={item.title}
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          className="absolute inset-0 overflow-hidden"
          style={{ zIndex: i + 1, willChange: "transform" }}
        >
          {/* Background image — no scale, no zoom */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Depth-shadow overlay (darkens when cards stack on top) */}
          <div
            ref={(el) => {
              overlaysRef.current[i] = el;
            }}
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ zIndex: 2, opacity: 0 }}
          />

          {/* Counter — top right */}
          <span
            className="absolute top-8 right-10 text-white/30 text-xs font-mono uppercase tracking-[0.3em]"
            style={{ zIndex: 3 }}
          >
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(WORK_ITEMS.length).padStart(2, "0")}
          </span>

          {/* Content — centered */}
          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-10 md:px-16 lg:px-24"
            style={{ zIndex: 3 }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {item.tags.map((tag) =>
                tag.href ? (
                  <a
                    key={tag.label}
                    href={tag.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full border border-white/25 text-white/60 text-[11px] uppercase tracking-widest backdrop-blur-sm hover:border-white/60 hover:text-white transition-colors duration-300"
                  >
                    {tag.label}
                  </a>
                ) : (
                  <span
                    key={tag.label}
                    className="px-4 py-1.5 rounded-full border border-white/25 text-white/60 text-[11px] uppercase tracking-widest backdrop-blur-sm"
                  >
                    {tag.label}
                  </span>
                ),
              )}
            </div>
            <div className="group relative inline-block">
              <h3
                className="uppercase text-white leading-none tracking-tight"
                style={{
                  fontFamily: "'League Gothic', sans-serif",
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                }}
              >
                {item.title}
              </h3>
              <span className="absolute bottom-0 left-0 h-[10px] w-0 bg-white group-hover:w-full transition-[width] duration-500 ease-out" />
            </div>
          </div>
        </div>
      ))}
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
    <section id="work">
      {/* Section heading */}
      <div className="px-10 md:px-16 lg:px-24 py-16 pb-10">
        <h2
          className="uppercase text-[#e4e4e4] leading-none tracking-tight m-0"
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

      {/* Scroll-stack cards */}
      <StackSection />

      {/* See More */}
      <div className="flex justify-center py-16 px-6">
        <a href="/work">
          <button className="lw-btn w-full max-w-xl">
            <span className="lw-btn__fill" />
            <span className="lw-btn__text">See More</span>
          </button>
        </a>
      </div>
    </section>
  );
};
export default LatestWork;
