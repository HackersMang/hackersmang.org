import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";

import "@/app/ai-techverse/assets/ai-techverse.css"
import "@/app/ai-techverse/assets/fonts.css"
import Speakers from "./components/Speakers";
import ParticlesDemo from "./components/Particles";
import Agendas from "./components/Agendas";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI TECHVERSE",
  description: "AI TECHVERSE - Talks on cutting edge AI technologies hosted by Hackerspace Mangaluru."
};

function page() {
  return (
    <main className="relative bg-grainy">
      <ParticlesDemo />
      <Cursor />
      <Navbar />
      <Hero />
      <Agendas />
      <Speakers />
      <Footer />
    </main>
  );
}

export default page