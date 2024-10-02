import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import Cursor from "./ai-techverse/components/Cursor";
import "@/assets/fonts.css"

export default function Home() {
  return (
    <main className="bg-black flex flex-col h-screen w-screen text-white">
      <Cursor />
      <Header />
      <Hero />
    </main>
  );
}
