import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotFound from "@/components/NotFound";

// Lazy load sections for better initial performance
const Hero = lazy(() => import("@/sections/Hero"));
const About = lazy(() => import("@/sections/About"));
const Team = lazy(() => import("@/sections/Team"));
const Supervisors = lazy(() => import("@/sections/Supervisors"));
const Events = lazy(() => import("@/sections/Events"));
const Achievements = lazy(() => import("@/sections/Achievements"));
const Cells = lazy(() => import("@/sections/Cells"));
const Contact = lazy(() => import("@/sections/Contact"));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center bg-ieee-navy-light/50 animate-pulse rounded-3xl mb-12">
    <div className="w-12 h-12 rounded-full border-t-2 border-ieee-gold animate-spin" />
  </div>
);

function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
          <About />
          <Team />
          <Supervisors />
          <Events />
          <Cells />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
