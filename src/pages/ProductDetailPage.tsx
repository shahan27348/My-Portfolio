import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getProductBySlug } from "@/constants/products";

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash === "#privacy") {
      requestAnimationFrame(() => {
        document.getElementById("privacy")?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-primary text-slate-light flex flex-col items-center justify-center gap-6 px-6">
        <h1
          className="uppercase text-center"
          style={{
            fontFamily: "'League Gothic', sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
          }}
        >
          Product not found
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-xs uppercase tracking-widest text-white/60 hover:text-white"
        >
          ← Back home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-primary text-slate-light min-h-screen antialiased overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 bg-primary/80 backdrop-blur-sm">
        <button
          onClick={() => navigate("/")}
          className="text-base font-black uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          style={{ fontFamily: "'League Gothic', sans-serif" }}
        >
          MS
        </button>
        <button
          onClick={() => navigate(-1)}
          className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
        >
          ← Back
        </button>
      </header>

      <main className="pt-28 pb-20 page-enter">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 mb-16">
          <p className="text-white/35 text-xs uppercase tracking-[0.3em] mb-4 font-mono">
            {product.subtitle}
          </p>
          <h1
            className="uppercase text-[#e4e4e4] leading-none tracking-tight mb-6"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(3rem, 10vw, 8rem)",
            }}
          >
            {product.title}
          </h1>
          <p className="text-[#888] text-sm md:text-base leading-relaxed max-w-2xl mb-8">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {product.links.map((link) =>
              link.external === false || link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-5 py-2 rounded-full border border-white/25 text-white/70
                             text-[11px] uppercase tracking-widest hover:border-white/60
                             hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href === "#" ? undefined : link.href}
                  target={link.href === "#" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  onClick={
                    link.href === "#"
                      ? (e) => e.preventDefault()
                      : undefined
                  }
                  className="px-5 py-2 rounded-full border border-white/25 text-white/70
                             text-[11px] uppercase tracking-widest hover:border-white/60
                             hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </section>

        {/* Cover */}
        <section className="px-6 md:px-12 lg:px-24 mb-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] flex items-center justify-center min-h-[280px] max-h-[560px]">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-[560px] object-contain object-center p-4 md:p-6"
            />
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 md:px-12 lg:px-24 mb-20">
          <h2
            className="uppercase text-[#e4e4e4] mb-8 leading-none"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Current Reach
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {product.stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-white/10 px-5 py-6"
              >
                <p className="text-white/30 text-[10px] uppercase tracking-[0.25em] mb-3">
                  {stat.label}
                </p>
                <p className="text-[#e4e4e4] text-lg md:text-xl font-medium">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech */}
        <section className="px-6 md:px-12 lg:px-24 mb-20">
          <h2
            className="uppercase text-[#e4e4e4] mb-8 leading-none"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {product.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-white/15 text-[#aaa] text-xs uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="px-6 md:px-12 lg:px-24 mb-20">
          <h2
            className="uppercase text-[#e4e4e4] mb-8 leading-none"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            What It Does
          </h2>
          <ul className="space-y-4 max-w-2xl">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="text-[#888] text-sm md:text-base leading-relaxed border-l border-white/15 pl-5"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots */}
        <section className="px-6 md:px-12 lg:px-24 mb-20">
          <h2
            className="uppercase text-[#e4e4e4] mb-8 leading-none"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
            }}
          >
            Screenshots
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {product.screenshots.map((shot, i) => (
              <div
                key={`${product.slug}-shot-${i}`}
                className="overflow-hidden rounded-xl border border-white/10 bg-[#111] flex items-center justify-center p-3"
              >
                <img
                  src={shot}
                  alt={`${product.title} screenshot ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {product.privacy && (
          <section
            id="privacy"
            className="px-6 md:px-12 lg:px-24 mb-10 scroll-mt-28"
          >
            <h2
              className="uppercase text-[#e4e4e4] mb-8 leading-none"
              style={{
                fontFamily: "'League Gothic', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
              }}
            >
              Privacy Policy
            </h2>
            <div className="space-y-4 max-w-3xl">
              {product.privacy.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[#888] text-sm md:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetailPage;
