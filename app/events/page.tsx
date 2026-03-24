import Header from "@/components/hackersmang/Header";
import "@/assets/fonts.css";
import { Footer } from "@/components/hackersmang/Footer";
import EventCard from "@/components/hackersmang/EventCard";
import { Metadata } from "next";
import { baseMetadata } from "@/lib/basemeta";
import { UPCOMING_EVENTS, PAST_EVENTS } from "@/lib/events";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Events | HackersMang - Tech Events & Conferences",
  description: "Discover all upcoming and past tech events, conferences, and workshops organized by Hackerspace Mangaluru and the HackersMang community.",
};

export default function EventsPage() {

  return (
    <main className="relative bg-white h-full w-full">
      <Header />
      <section className="relative pt-20 lg:pt-24 min-h-screen bg-neutral-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 py-12 lg:py-16">
          {/* Header Section */}
          <div className="text-left lg:text-center mb-12 lg:mb-16 flex flex-col items-start lg:items-center justify-center gap-4 lg:gap-8 text-neutral-navy">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-yellow rounded-full mb-4">
              <div className="w-2 h-2 bg-neutral-navy rounded-full animate-pulse"></div>
              <span className="text-sm outfit-extra-light text-neutral-navy font-bold">
                All Events
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl outfit-extra-bold text-neutral-navy leading-[0.9] mb-4">
              Our Events
            </h1>
            <p className="text-lg lg:text-xl text-neutral-navy outfit-extra-light leading-relaxed max-w-3xl">
              Discover tech events and conferences organized by Hackerspace Mangaluru and the HackersMang community.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-12 lg:gap-16">
            {/* Upcoming Events Section */}
            {UPCOMING_EVENTS.length > 0 && (
              <div className="space-y-6">
                <div className="border-b border-neutral-200/50 pb-2">
                  <h2 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy">Upcoming Events</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {UPCOMING_EVENTS.map((event, index) => (
                    <EventCard key={`upcoming-${index}`} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* Past Events Section */}
            {PAST_EVENTS.length > 0 && (
              <div className="space-y-6">
                <div className="border-b border-neutral-200/50 pb-2">
                  <h2 className="text-2xl lg:text-3xl outfit-extra-bold text-neutral-navy">Past Events</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {PAST_EVENTS.map((event, index) => (
                    <EventCard key={`past-${index}`} event={event} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer hidePastEvents={true} />
    </main>
  );
}
