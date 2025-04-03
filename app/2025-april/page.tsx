import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Venue from "../../components/eventpage/Venue";
import Particles from "@/components/magicui/particles";
import Script from 'next/script';
import Intro from "@/components/eventpage/Intro";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, RESOURCES, twitter } from "./constants";
import CallForSpeaker from "../../components/eventpage/CallForSpeaker";
import { baseMetadata } from "@/lib/basemeta";
import Register from "@/components/eventpage/Register";
import Resources from "@/components/eventpage/Resources";
import { Footer } from "@/components/hackersmang/Footer";
import Schedule from "@/components/eventpage/Schedule";

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
                <Particles />
                <div className="relative z-10">
                    <Header />
                    <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl.href} />
                    <Schedule sessionId={EVENT_DETAIL.sessionizeApiId} />
                    <Register registrationLink={EVENT_DETAIL.registrationLink} registrationStartOn={EVENT_DETAIL.registrationStartOn} registrationEndOn={EVENT_DETAIL.registrationEndOn} />
                    <Resources resources={RESOURCES} />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;