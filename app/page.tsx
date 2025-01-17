import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import "@/assets/fonts.css"
import Particles from "@/components/magicui/particles";

export default function Home() {
  return (
    <main className="bg-grainy flex flex-col h-screen w-screen text-white">
      <Particles
        quantity={40}
        ease={80}
        color="#fff323"
        refresh
      />
      <Header />
      <Hero />
    </main>
  );
}
