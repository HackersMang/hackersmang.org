import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Venue from "../../components/eventpage/Venue";
import PerformanceParticles from "@/components/magicui/performance-particles";
import Script from 'next/script';
import Intro from "@/components/eventpage/Intro";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, RESOURCES, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import Resources from "@/components/eventpage/Resources";
import { Footer } from "@/components/hackersmang/Footer";
import ScheduleWithRegister from "@/components/eventpage/ScheduleWithRegister";
import { TrackRegistration } from "@/lib/types";

export const metadata: Metadata = {
    ...baseMetadata,
    ...eventMetaData,
    openGraph: openGraph,
    twitter: twitter,
    alternates: alternates,
};

function page() {
    // Map EVENT_DETAIL tracks to TrackRegistration format
    const trackRegistrations: TrackRegistration[] = EVENT_DETAIL.tracks.map(track => ({
        track: track.name,
        registrationLink: track.registrationLink
    }));

    return (
        <>
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="relative bg-grainy outfit-extra-light">
                <PerformanceParticles />
                <div className="relative z-10">
                    <Header />
                    <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />
                    <ScheduleWithRegister 
                        sessionId={EVENT_DETAIL.sessionizeApiId}
                        trackRegistrations={trackRegistrations}
                        registrationStartOn={EVENT_DETAIL.registrationStartOn}
                        registrationEndOn={EVENT_DETAIL.registrationEndOn}
                    />
                    <Resources resources={RESOURCES} />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;