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
import ScheduleWithRegister from "@/components/eventpage/ScheduleWithRegister";
import { TrackRegistration } from "@/lib/types";
import Register from "@/components/eventpage/Register";

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
                        <div className="w-full max-w-screen-lg flex flex-col items-center justify-center text-center">
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
                            <div className="w-full bg-neutral/10 flex flex-col items-center justify-center text-center my-4 lg:mt-16 px-4 gap-4">
                                <div className="w-full pt-8 px-4">
                                    <div className="max-w-screen-lg mx-auto text-center">
                                        <h2 className="text-xl lg:text-2xl font-bold text-secondary outfit-bold mb-2">
                                            🎉 Registration is Now Open!
                                        </h2>
                                        <p className="text-secondary outfit-extra-light">
                                            Secure your spot for HackersMang August 2025
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col md:flex-row items-center justify-center text-center">
                                    <Register
                                        registrationLink={trackRegistrations[0].registrationLink}
                                        registrationStartOn={EVENT_DETAIL.registrationStartOn}
                                        registrationEndOn={EVENT_DETAIL.registrationEndOn}
                                        buttonText={trackRegistrations[0].buttonText}
                                        disableCodeOfConduct={true}
                                    />
                                    <Register
                                        registrationLink={trackRegistrations[1].registrationLink}
                                        registrationStartOn={EVENT_DETAIL.registrationStartOn}
                                        registrationEndOn={EVENT_DETAIL.registrationEndOn}
                                        buttonText={trackRegistrations[1].buttonText}
                                        disableCodeOfConduct={true}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;