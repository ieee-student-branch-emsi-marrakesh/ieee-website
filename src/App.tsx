import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy load pages and sections
const Hero = lazy(() => import("@/sections/Hero"));
const About = lazy(() => import("@/sections/About"));
const Team = lazy(() => import("@/sections/Team"));
const Supervisors = lazy(() => import("@/sections/Supervisors"));
const Events = lazy(() => import("@/sections/Events"));
const Achievements = lazy(() => import("@/sections/Achievements"));
const Cells = lazy(() => import("@/sections/Cells"));
const Contact = lazy(() => import("@/sections/Contact"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const AchievementsPage = lazy(() => import("@/pages/AchievementsPage"));
const EventsPage = lazy(() => import("@/pages/EventsPage"));
const NotFound = lazy(() => import("@/components/NotFound"));

function Loading() {
  return (
    <div className="min-h-screen bg-ieee-navy flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-ieee-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let attempts = 0;
      const checkForElement = () => {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else if (attempts < 50) {
          attempts++;
          setTimeout(checkForElement, 100);
        }
      };
      checkForElement();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Supervisors />
        <Events />
        <Cells />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Analytics />
    </>
  );
}

export default App;