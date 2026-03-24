import "@/assets/fonts.css";
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Script from "next/script";
import Intro from "@/components/eventpage/Hero";
import {
  alternates,
  EVENT_DETAIL,
  eventMetaData,
  jsonLd,
  openGraph,
  twitter,
} from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import Venue from "@/components/eventpage/Venue";
import CallForSpeaker from "@/components/eventpage/CallForSpeaker";
import EventHighlights from "@/components/eventpage/EventHighlights";

export const metadata: Metadata = {
  ...baseMetadata,
  ...eventMetaData,
  openGraph: openGraph,
  twitter: twitter,
  alternates: alternates,
};

function page() {
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
          <Intro
            title={EVENT_DETAIL.title}
            subtitle={EVENT_DETAIL.subtitle}
            eventTag="HackersMang Events"
            summitAffiliation={EVENT_DETAIL.summitAffiliation}
          />
          <EventHighlights
            sessionId={EVENT_DETAIL.sessionizeApiId}
            title="Why Attend?"
            subtitle="Join us for learning, networking, and building with the Mangaluru tech community"
            columns={4}
            backgroundColor="bg-secondary-yellow"
            className="py-20 lg:py-32"
          />
          <CallForSpeaker
            registrationLink={EVENT_DETAIL.callForSpeakerLink}
            registrationStartOn={EVENT_DETAIL.callForSpeakerStartOn}
            registrationEndOn={EVENT_DETAIL.callForSpeakerEndOn}
          />
          <Venue
            happeningOn={EVENT_DETAIL.happeningOn}
            locationName={EVENT_DETAIL.locationName}
            locationUrl={EVENT_DETAIL.locationUrl}
            showComingSoonBanner={true}
          />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default page;
