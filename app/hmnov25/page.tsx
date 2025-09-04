import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Venue from "../../components/eventpage/Venue";
import Script from 'next/script';
import Intro from "@/components/eventpage/Intro";
import { alternates, EVENT_DETAIL, eventMetaData, jsonLd, openGraph, RESOURCES, twitter } from "./constants";
import { baseMetadata } from "@/lib/basemeta";
import { Footer } from "@/components/hackersmang/Footer";
import About from "./components/About";
import CallForSpeaker from "@/components/eventpage/CallForSpeaker";
import ScheduleWithRegister from "@/components/eventpage/ScheduleWithRegister";
import { TrackRegistration } from "@/lib/types";
import Register from "@/components/eventpage/Register";
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
            <main className="relative bg-grainy outfit-extra-light">
                <div className="relative z-10">
                    <Header />
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <div className="w-full max-w-screen-xl flex flex-col items-center justify-center text-center">
                            <Intro title={EVENT_DETAIL.title} subtitle={EVENT_DETAIL.subtitle} />
                            <About />
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;