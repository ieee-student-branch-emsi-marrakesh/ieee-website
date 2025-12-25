import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Team from "@/sections/Team";
import Events from "@/sections/Events";
import Achievements from "@/sections/Achievements";
import Cells from "@/sections/Cells";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Events />
        <Cells />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
