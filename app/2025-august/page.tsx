import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Venue from "../../components/eventpage/Venue";
import Script from 'next/script';
import Intro from "@/components/eventpage/Intro";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import About from "./components/About";
import CallForSpeaker from "@/components/eventpage/CallForSpeaker";

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
            <main className="relative bg-grainy outfit-extra-light">
                <div className="relative z-10">
                    <Header />
                    <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />
                    <CallForSpeaker
                        registrationLink={EVENT_DETAIL.callForSpeakerLink}
                        registrationStartOn={EVENT_DETAIL.callForSpeakerStartOn}
                        registrationEndOn={EVENT_DETAIL.callForSpeakerEndOn}
                    />
                    <About />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;