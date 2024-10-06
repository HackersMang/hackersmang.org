import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import Cursor from "./ai-techverse/components/Cursor";
import "@/assets/fonts.css"
import Particles from "@/components/magicui/particles";

export default function Home() {
  return (
    <main className="bg-black flex flex-col h-screen w-screen text-white">
      <Particles
        className="absolute inset-3"
        quantity={40}
        ease={80}
        color="#ffffff"
        refresh
      />
      <Header />
      <Hero />
    </main>
  );
}
