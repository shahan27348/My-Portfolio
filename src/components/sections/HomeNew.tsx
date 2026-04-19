import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Home: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Set initial state immediately — before any delay */
      gsap.set(".hw1", { yPercent: 110, opacity: 0 });
      gsap.set(".hw2", { yPercent: 110, opacity: 0 });
      gsap.set(".hero-desc-1, .hero-desc-2", { y: "2em", opacity: 0 });
      gsap.set(".hero-scroll-ind", { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.9 });

      tl.to(
        ".hw1",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.09,
          ease: "power3.out",
        },
        0,
      );

      tl.to(
        ".hw2",
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.09,
          ease: "power3.out",
        },
        0.32,
      );

      tl.to(
        ".hero-desc-1, .hero-desc-2",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.18,
          ease: "power2.out",
        },
        0.55,
      );

      tl.to(
        ".hero-scroll-ind",
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        1.05,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-96 bg-[#1a1a1a] overflow-hidden"
    >
      {/* ── Content ── */}
      <div
        className="relative z-10 min-h-screen flex flex-col justify-start
                   px-8 md:px-14 lg:px-20 pt-40 pb-20"
      >
        {/* ── Row 1: name heading (left) + desc 1 (top-right) ── */}
        <div className="flex flex-wrap items-start justify-between gap-y-6">
          {/* Name headline — each word is overflow-hidden so the slide-up is clipped */}
          <h1
            className="leading-[0.9] uppercase m-0 p-0"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3.8rem, 11vw, 13rem)",
            }}
          >
            {["Hi!", "I'm", "Shahan."].map((word) => (
              <span
                key={word}
                className="inline-block overflow-hidden align-bottom"
                style={{ marginRight: "0.12em" }}
              >
                <span className="hw1 inline-block bg-gradient-to-b from-[#e4e4e4] to-[#555] bg-clip-text text-transparent">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Description 1 */}
          <p
            className="hero-desc-1 text-sm md:text-base text-[#888]
                        leading-relaxed max-w-[250px] mt-2 shrink-0 self-start"
          >
            I've been building full-stack digital products for 1+ years. I craft
            experiences that are useful &amp; enjoyable for the final user.
          </p>
        </div>

        {/* ── Row 2: desc 2 (bottom-left) + role heading (right/bottom) ── */}
        <div className="flex flex-wrap-reverse items-end justify-between gap-y-6 mt-20">
          {/* Description 2 */}
          <p
            className="hero-desc-2 text-sm md:text-base text-[#888]
                        leading-relaxed max-w-[230px] shrink-0 self-end"
          >
            I've worked on ambitious products at Ichonic&nbsp;Inc — including 3
            apps on the Wix App Market — and I enjoy building accessible,
            human-centered interfaces.
          </p>

          {/* Role headline */}
          <h2
            className="leading-[0.9] uppercase m-0 p-0"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3rem, 9.5vw, 11rem)",
            }}
          >
            {["Full", "Stack", "Developer"].map((word) => (
              <span
                key={word}
                className="inline-block overflow-hidden align-bottom"
                style={{ marginRight: "0.12em" }}
              >
                <span className="hw2 inline-block bg-gradient-to-b from-[#e4e4e4] to-[#555] bg-clip-text text-transparent">
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        {/* ── Scroll indicator: bottom-center ── */}
        <a
          href="#projects"
          className="hero-scroll-ind absolute bottom-2 left-1/2 -translate-x-1/2
                     flex flex-col items-center gap-3 group margin-top: 8rem"
        >
          <span
            className="text-[12px] uppercase tracking-[0.22em] text-[##E4E4E4]
                           group-hover:text-[#aaa] transition-colors duration-300"
          >
            see my work
          </span>
          <span className="relative w-px h-14 bg-[#333] overflow-hidden">
            <span
              className="absolute top-0 left-0 w-full h-full bg-[#e4e4e4]
                             animate-scroll-line"
            />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Home;
