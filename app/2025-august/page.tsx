import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Venue from "../../components/eventpage/Venue";
import Script from 'next/script';
import Intro from "@/components/eventpage/Hero";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, RESOURCES, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import CallForSpeaker from "@/components/eventpage/CallForSpeaker";
import ScheduleWithRegister from "@/components/eventpage/ScheduleWithRegister";
import { TrackRegistration } from "@/lib/types";
import Resources from "@/components/eventpage/Resources";

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
                    <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />
                    <ScheduleWithRegister
                        sessionId={EVENT_DETAIL.sessionizeApiId}
                        trackRegistrations={trackRegistrations}
                        registrationStartOn={EVENT_DETAIL.registrationStartOn}
                        registrationEndOn={EVENT_DETAIL.registrationEndOn}
                    />
                    <CallForSpeaker
                        registrationLink={EVENT_DETAIL.callForSpeakerLink}
                        registrationStartOn={EVENT_DETAIL.callForSpeakerStartOn}
                        registrationEndOn={EVENT_DETAIL.callForSpeakerEndOn}
                    />
                    <Resources resources={RESOURCES} />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;