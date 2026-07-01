import Hero from "../components/Hero";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Services from "../components/Service";
import Process from "../components/Process";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <Services />

      <Process />

      <About />

      <Gallery />

      <Pricing />

      <Contact />

      <Footer />

    </main>
  );
}