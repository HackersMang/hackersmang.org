import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";

import "@/app/ai-techverse/assets/style.css"
import "@/app/ai-techverse/assets/fonts.css"
import Speakers from "./components/Speakers";
import ParticlesDemo from "./components/Particles";

function page() {
  return (
    <main className="relative bg-grainy">
      <ParticlesDemo />
      <Cursor />
      <Navbar />
      <Hero />
      <Speakers />
      <Footer />
    </main>
  );
}

export default page