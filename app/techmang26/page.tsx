import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Script from 'next/script';
import Intro from "@/components/eventpage/Hero";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, RESOURCES, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import Venue from "@/components/eventpage/Venue";
import About from "./components/About";
import ScheduleWithRegister from "@/components/eventpage/ScheduleWithRegister";
import EventHighlights from "@/components/eventpage/EventHighlights";
import SupportedBy from "@/components/eventpage/SupportedBy";
import Resources from "@/components/eventpage/Resources";

export const metadata: Metadata = {
    ...baseMetadata,
    ...eventMetaData,
    openGraph: openGraph,
    twitter: twitter,
    alternates: alternates,
};

function page() {
    const registrations = (EVENT_DETAIL.tracks || [])
        .filter((track): track is typeof track & { registrationLink: string } => 
            track.registrationLink !== null
        )
        .map(track => ({
            name: track.name,
            registrationLink: track.registrationLink,
            buttonText: track.buttonText || `Register for ${track.name}`
        }));

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
                        eventTag="TechMang Events"
                        summitAffiliation={EVENT_DETAIL.summitAffiliation}
                    />
                    <EventHighlights
                        sessionId={EVENT_DETAIL.sessionizeApiId}
                        title="Why Attend?"
                        subtitle="Join us for an unforgettable experience filled with learning, networking, and innovation"
                        columns={4}
                        backgroundColor="bg-secondary-yellow"
                        className="py-20 lg:py-32"
                    />
                    <ScheduleWithRegister 
                        sessionId={EVENT_DETAIL.sessionizeApiId} 
                        showComingSoonBanner={EVENT_DETAIL.showComingSoonBanner}
                        independentRegistrations={registrations}
                        registrationStartOn={EVENT_DETAIL.registrationStartOn}
                        registrationEndOn={EVENT_DETAIL.registrationEndOn}
                    />
                    <Resources resources={RESOURCES} />
                    <SupportedBy 
                        partners={EVENT_DETAIL.partners || []}
                    />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;

