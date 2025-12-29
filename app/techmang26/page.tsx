import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Script from 'next/script';
import Intro from "@/components/eventpage/Hero";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import CallForSpeaker from "@/components/eventpage/CallForSpeaker";
import Venue from "@/components/eventpage/Venue";
import About from "./components/About";
import ScheduleWithRegister from "@/components/eventpage/ScheduleWithRegister";
import { TrackRegistration } from "@/lib/types";
import EventHighlights from "@/components/eventpage/EventHighlights";

export const metadata: Metadata = {
    ...baseMetadata,
    ...eventMetaData,
    openGraph: openGraph,
    twitter: twitter,
    alternates: alternates,
};

function page() {
    const trackRegistrations: TrackRegistration[] = EVENT_DETAIL.tracks?.map(track => ({
        track: track.name,
        registrationLink: track.registrationLink,
        buttonText: `Register for ${track.name}`
    })) || [];

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
                    <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} eventTag="TechMang Events" />
                    <About />
                    <CallForSpeaker 
                        registrationLink={EVENT_DETAIL.callForSpeakerLink} 
                        registrationStartOn={EVENT_DETAIL.callForSpeakerStartOn} 
                        registrationEndOn={EVENT_DETAIL.callForSpeakerEndOn} 
                    />
                    <EventHighlights
                        sessionId={EVENT_DETAIL.sessionizeApiId}
                        title="Why Attend?"
                        subtitle="Join us for an unforgettable experience filled with learning, networking, and innovation"
                        columns={4}
                        backgroundColor="bg-secondary-yellow"
                        className="py-20 lg:py-32"
                    />
                    <ScheduleWithRegister sessionId={EVENT_DETAIL.sessionizeApiId} trackRegistrations={trackRegistrations} registrationStartOn={EVENT_DETAIL.registrationStartOn} registrationEndOn={EVENT_DETAIL.registrationEndOn} showComingSoonBanner={EVENT_DETAIL.showComingSoonBanner} />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;

