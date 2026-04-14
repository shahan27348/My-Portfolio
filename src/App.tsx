import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeNew from "@/components/sections/HomeNew";
import About from "@/components/sections/About";
import LatestWork from "@/components/sections/LatestWork";
import SkillSet from "@/components/sections/SkillSet";
import ContactPage from "@/pages/ContactPage";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingSequence from "@/components/ui/LoadingSequence";
import ErrorBoundary from "@/components/shared/ErrorBoundary";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const ChatAssistant = lazy(() => import("@/components/ui/ChatAssistant"));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
      // Also scroll to top during loading
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay then reveal content with fade
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  };

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          {/* ── Contact page — standalone, no loading screen ── */}
          <Route path="/contact" element={<ContactPage />} />

          {/* ── Main portfolio ── */}
          <Route
            path="*"
            element={
              <>
                {isLoading && (
                  <LoadingSequence onComplete={handleLoadingComplete} />
                )}
                <div
                  className={`bg-primary text-slate-light leading-relaxed antialiased selection:bg-accent selection:text-primary overflow-x-hidden transition-opacity duration-1000 ease-out ${
                    showContent ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <ScrollProgress />
                  <div className="relative z-10">
                    <Navbar />
                    <HomeNew />
                    <main className="container mx-auto px-6 md:px-12 lg:px-24">
                      <About />
                    </main>
                    <LatestWork />
                    <div className="container mx-auto px-6 md:px-12 lg:px-24">
                      <SkillSet />
                    </div>
                    <Footer />
                    <ScrollToTopButton />
                    <Suspense fallback={null}>
                      <ChatAssistant />
                    </Suspense>
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
