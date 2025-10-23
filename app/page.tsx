import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import "@/assets/fonts.css"
import FutureSection from "@/components/hackersmang/FutureSection";
import UpcomingEvents from "@/components/hackersmang/UpcomingEvents";
import CommunityStats from "@/components/hackersmang/CommunityImpact";
import { Footer } from "@/components/hackersmang/Footer";

export default function Home() {
  return (
    <main className="relative bg-white h-full w-full">
      <Header />
      <Hero />
      <FutureSection />
      <UpcomingEvents />
      <CommunityStats />
      <Footer />
    </main>
  );
}
