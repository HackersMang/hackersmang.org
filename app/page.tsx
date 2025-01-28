import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import "@/assets/fonts.css"
import Particles from "@/components/magicui/particles";


// TODO: Add meta data.

export default function Home() {
  return (
    <main className="relative bg-grainy h-full lg:h-screen w-full">
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
