import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCT_CARDS } from "@/constants/products";

gsap.registerPlugin(ScrollTrigger);

type TagItem = { label: string; href?: string; external?: boolean };
type WorkItem = {
  title: string;
  slug: string;
  tags: TagItem[];
  image: string;
  detailPath: string;
};

const WORK_ITEMS: WorkItem[] = PRODUCT_CARDS;

const TagBadge: React.FC<{ tag: TagItem }> = ({ tag }) => {
  const className =
    "px-4 py-1.5 rounded-full border border-white/25 text-white/60 text-[11px] uppercase tracking-widest backdrop-blur-sm hover:border-white/60 hover:text-white transition-colors duration-300";

  if (!tag.href) {
    return <span className={className}>{tag.label}</span>;
  }

  if (tag.external === false || tag.href.startsWith("/")) {
    return (
      <Link
        to={tag.href}
        onClick={(e) => e.stopPropagation()}
        className={className}
      >
        {tag.label}
      </Link>
    );
  }

  return (
    <a
      href={tag.href === "#" ? undefined : tag.href}
      target={tag.href === "#" ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
        if (tag.href === "#") e.preventDefault();
      }}
      className={className}
    >
      {tag.label}
    </a>
  );
};

const HorizontalCard: React.FC<{
  item: WorkItem;
  index: number;
  total: number;
}> = ({ item, index, total }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex-shrink-0 overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="absolute inset-0 bg-[#111]" />
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-contain object-center p-4 md:p-8"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

      <div className="absolute inset-0 flex flex-col justify-end px-12 md:px-20 lg:px-28 pb-20 z-10">
        <span className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6 font-mono">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        <div className="flex flex-wrap gap-3 mb-5">
          {item.tags.map((tag) => (
            <TagBadge key={tag.label} tag={tag} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigate(item.detailPath)}
          className="text-left uppercase text-white leading-none tracking-tight mb-8 hover:opacity-80 transition-opacity"
          style={{
            fontFamily: "'League Gothic', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
          }}
        >
          {item.title}
        </button>

        <button
          type="button"
          onClick={() => navigate(item.detailPath)}
          className="group inline-flex items-center gap-4 text-white/50 hover:text-white
                     text-xs uppercase tracking-[0.2em] transition-colors duration-300 w-fit"
        >
          <span>View Details</span>
          <span
            className="block h-px bg-white/30 group-hover:bg-white
                       transition-all duration-500 ease-out"
            style={{ width: "2rem" }}
          />
        </button>
      </div>
    </div>
  );
};

const MobileWorkSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-10 pb-6 space-y-5">
      {WORK_ITEMS.map((item, i) => (
        <article
          key={item.title}
          className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[420px] cursor-pointer"
          onClick={() => navigate(item.detailPath)}
        >
          <div className="absolute inset-0 bg-[#111]" />
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-contain object-center p-3"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-end p-6">
            <span className="mb-4 text-white/35 text-xs uppercase tracking-[0.3em] font-mono">
              {String(i + 1).padStart(2, "0")} /{" "}
              {String(WORK_ITEMS.length).padStart(2, "0")}
            </span>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <TagBadge key={tag.label} tag={tag} />
              ))}
            </div>

            <h3
              className="uppercase text-white leading-none tracking-tight mb-4"
              style={{
                fontFamily: "'League Gothic', sans-serif",
                fontSize: "clamp(2.5rem, 12vw, 4.5rem)",
              }}
            >
              {item.title}
            </h3>

            <span className="inline-flex items-center gap-3 text-white/70 text-xs uppercase tracking-[0.2em] w-fit">
              <span>View Details</span>
              <span className="block h-px w-8 bg-white/40" />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
};

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
      <div
        ref={introRef}
        className="flex flex-col justify-end px-12 md:px-20 lg:px-28 pb-24 pt-32"
        style={{ minHeight: "100vh" }}
      >
        <p className="intro-line text-white/30 text-xs uppercase tracking-[0.35em] mb-8 font-mono">
          Selected products · {WORK_ITEMS.length} products
        </p>

        <h2
          className="uppercase leading-none tracking-tight text-white overflow-hidden"
          style={{
            fontFamily: "'League Gothic', sans-serif",
            fontSize: "clamp(4.5rem, 15vw, 10rem)",
          }}
        >
          <span className="intro-line block">My</span>
          <span className="intro-line block">Products</span>
        </h2>

        <p className="intro-line mt-72 text-white/25 text-xs uppercase tracking-[0.3em]">
          Scroll to explore →
        </p>
      </div>

      <div ref={sectionRef} style={{ height: "100vh", width: "100%" }}>
        <div
          ref={trackRef}
          className="flex h-full"
          style={{
            width: `${WORK_ITEMS.length * 100}vw`,
            willChange: "transform",
          }}
        >
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

const StackSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const overlaysRef = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const overlays = overlaysRef.current.filter(Boolean) as HTMLDivElement[];
    const n = cards.length;

    cards.forEach((card, i) => {
      if (i > 0) gsap.set(card, { yPercent: 100 });
    });

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
      const t = i - 1;
      tl.to(cards[i], { yPercent: 0, ease: "none", duration: 1 }, t);
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
          <div className="absolute inset-0 bg-[#111]" />
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-contain object-center p-4 md:p-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
          <div
            ref={(el) => {
              overlaysRef.current[i] = el;
            }}
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ zIndex: 2, opacity: 0 }}
          />

          <span
            className="absolute top-8 right-10 text-white/30 text-xs font-mono uppercase tracking-[0.3em]"
            style={{ zIndex: 3 }}
          >
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(WORK_ITEMS.length).padStart(2, "0")}
          </span>

          <div
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-10 md:px-16 lg:px-24"
            style={{ zIndex: 3 }}
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {item.tags.map((tag) => (
                <TagBadge key={tag.label} tag={tag} />
              ))}
            </div>
            <button
              type="button"
              onClick={() => navigate(item.detailPath)}
              className="group relative inline-block"
            >
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
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const LatestWork: React.FC<{ horizontalScroll?: boolean }> = ({
  horizontalScroll = false,
}) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768,
  );

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (isMobile) {
    return (
      <section id="work">
        <div className="px-6 py-16 pb-10">
          <h2
            className="uppercase text-[#e4e4e4] leading-none tracking-tight m-0"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3rem, 16vw, 5rem)",
            }}
          >
            My
            <br />
            Products
          </h2>
        </div>

        <MobileWorkSection />

        {!horizontalScroll && (
          <div className="flex justify-center py-16 px-6">
            <a href="/work">
              <button className="lw-btn w-full max-w-xl">
                <span className="lw-btn__fill" />
                <span className="lw-btn__text">See More</span>
              </button>
            </a>
          </div>
        )}
      </section>
    );
  }

  if (horizontalScroll) {
    return <HorizontalWorkSection />;
  }

  return (
    <section id="work">
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
          Products
        </h2>
      </div>

      <StackSection />

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
