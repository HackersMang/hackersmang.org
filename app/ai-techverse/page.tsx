import "@/assets/fonts.css"
import Speakers from "../../components/eventpage/Speakers";
import Agendas from "../../components/eventpage/Agendas";
import { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/hackersmang/Header";
import Intro from "@/components/eventpage/Hero";
import Venue from "@/components/eventpage/Venue";
import Register from "@/components/eventpage/Register";
import { EVENT_DETAIL, SPEAKERS, jsonLd } from "./constants";
import { Footer } from "@/components/hackersmang/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://hackersmang.org'),
  title: "AI TechVerse | HackersMang, 2024 July Edition by Hackerspace Mangaluru",
  description: "HackersMang, 2024 July Edition hosted by Hackerspace Mangaluru.",
  generator: 'HackersMang',
  applicationName: 'HackersMang',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'AI TechVerse | HackersMang, 2024 July Edition by Hackerspace Mangaluru',
    description: 'HackersMang, 2024 July Edition hosted by Hackerspace Mangaluru.',
    url: 'https://hackersmang.org/ai-techverse',
    siteName: 'HackersMang',
    images: [
      {
        url: 'https://hackersmang.org/ai-techverse/cards/hero-card.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://hackersmang.org/ai-techverse/cards/hero-card.png',
        width: 1800,
        height: 1600,
        alt: 'AI TECHVERSE',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI TechVerse | HackersMang, 2024 July Edition by Hackerspace Mangaluru',
    description: 'HackersMang, 2024 July Edition hosted by Hackerspace Mangaluru.',
    images: 'https://hackersmang.org/ai-techverse/cards/hero-card.png'
  },
  alternates: {
    canonical: '/ai-techverse',
  },
};

function page() {
  // Extract the registration link from the first track for backward compatibility
  const registrationLink = EVENT_DETAIL.tracks?.[0]?.registrationLink || null;

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative bg-white outfit-extra-light">
      <div className="relative z-10">
        <Header />
        <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} />
        <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />

        <Agendas speakers={SPEAKERS} />

        <div className="max-w-7xl mx-auto pb-10 lg:pb-20 relative z-10 w-full">
          <Register
            registrationLink={registrationLink}
            registrationStartOn={EVENT_DETAIL.registrationStartOn}
            registrationEndOn={EVENT_DETAIL.registrationEndOn}
          />
        </div>
        <Speakers speakers={SPEAKERS} />
        <Footer />
      </div>
    </main>
    </>
  );
}

export default page