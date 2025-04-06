import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import "@/assets/fonts.css"
import PerformanceParticles from "@/components/magicui/performance-particles";

export default function Home() {
  return (
    <main className="relative bg-grainy h-full w-full">
      <Header />
      <Hero />
    </main>
  );
}
