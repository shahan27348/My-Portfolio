import React from "react";
import { useNavigate } from "react-router-dom";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary text-slate-light min-h-screen antialiased overflow-x-hidden">
      {/* ── Top bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-base font-black uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-60"
          style={{ fontFamily: "'League Gothic', sans-serif" }}
        >
          MS
        </button>

        {/* Back link */}
        <button
          onClick={() => navigate(-1)}
          className="group relative overflow-hidden text-xs uppercase tracking-widest text-white/50 flex items-center gap-2"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            ← Back
          </span>
          <span className="absolute inset-0 flex items-center text-white/80 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            ← Back
          </span>
        </button>
      </header>

      {/* ── Content ── */}
      <main className="pt-24 container mx-auto px-6 md:px-12 lg:px-24 page-enter">
        <About isPage />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
