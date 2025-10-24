import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Script from 'next/script';
import Intro from "@/components/eventpage/Intro";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, RESOURCES, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import About from "./components/About";
import { TrackRegistration } from "@/lib/types";

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
                    <About />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;