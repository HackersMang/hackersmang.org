import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/hackersmang/Header";
import Hero from "@/components/hackersmang/Hero";
import FutureSection from "@/components/hackersmang/FutureSection";
import UpcomingEvents from "@/components/hackersmang/UpcomingEvents";
import CommunityStats from "@/components/hackersmang/CommunityImpact";
import { Footer } from "@/components/hackersmang/Footer";
import { homepageJsonLd } from "@/lib/homepageSchema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-homepage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <main className="relative bg-white h-full w-full">
        <Header />
        <Hero />
        <FutureSection />
        <UpcomingEvents />
        <CommunityStats subtitle="A volunteer-run community that's been growing Mangaluru's tech scene one event at a time." />
        <Footer />
      </main>
    </>
  );
}
