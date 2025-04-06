import "@/assets/fonts.css"
import { Metadata } from "next";
import Header from "@/components/hackersmang/Header";
import Venue from "../../components/eventpage/Venue";
import About from "./components/About";
import Script from 'next/script';
import Register from "../../components/eventpage/Register";
import Schedule from "../../components/eventpage/Schedule";
import Intro from "@/components/eventpage/Intro";
import { EVENT_DETAIL, RESOURCES } from "./constants";
import CallForSpeaker from "../../components/eventpage/CallForSpeaker";
import Resources from "../../components/eventpage/Resources";
import { Footer } from "@/components/hackersmang/Footer";

export const metadata: Metadata = {
    metadataBase: new URL('https://hackersmang.org'),
    title: "TechMang25 | Premier Tech Conference in Mangaluru | 2025 edition by Hackerspace Mangaluru",
    description: "Join TechMang25, Mangaluru's premier tech conference featuring cutting-edge talks on AI, Cloud Computing, DevOps, and more. Network with industry experts and innovators. February 2025 at Hackerspace Mangaluru.",
    generator: 'HackersMang',
    applicationName: 'HackersMang',
    referrer: 'origin-when-cross-origin',
    keywords: [
        // Primary Keywords
        'TechMang25', 'Mangaluru Tech Conference', 'Karnataka Tech Events', 'Tech Conference 2025',
        // Technology Categories
        'Artificial Intelligence', 'Cloud Computing', 'DevOps', 'Cybersecurity', 'Blockchain',
        'Machine Learning', 'Data Science', 'IoT', 'Edge Computing', '5G',
        // Programming & Frameworks
        'Python', 'JavaScript', 'React', 'Node.js', 'TypeScript',
        // Cloud & Infrastructure
        'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
        // Development Tools
        'Git', 'GitHub', 'CI/CD', 'Jenkins', 'Terraform',
        // Event-specific
        'Tech Symposium Mangaluru', 'IT Conference Karnataka', 'Developer Conference India'
    ],
    authors: [
        { name: 'Hackerspace' },
        { name: 'Mangaluru', url: 'https://hackersmang.org' }
    ],
    creator: 'Mashfooq Hussain',
    publisher: 'Hackerspace Mangaluru',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: "TechMang25 | Premier Tech Conference in Mangaluru | 2025 edition by Hackerspace Mangaluru",
        description: "Join #TechMang25, Mangaluru's premier tech conference featuring cutting-edge talks on AI, Cloud Computing, DevOps, and more. Network with industry experts and innovators.",
        url: 'https://hackersmang.org/techmang25',
        siteName: 'Hackerspace Mangaluru',
        images: [
            {
                url: 'https://hackersmang.org/techmang25/cards/og-card.png',
                width: 1200,
                height: 630,
                alt: 'TechMang25 2025 Conference Banner',
            },
            {
                url: 'https://hackersmang.org/techmang25/cards/twitter-card.png',
                width: 1024,
                height: 512,
                alt: 'TechMang25 2025 Twitter Preview',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "TechMang25 | Premier Tech Conference in Mangaluru | 2025 edition by Hackerspace Mangaluru",
        description: "Join us for cutting-edge tech talks, workshops, and networking at Mangaluru's biggest tech conference.",
        images: {
            url: 'https://hackersmang.org/techmang25/cards/hero-card.png',
            alt: 'TechMang25 2025 Conference Preview'
        },
        creator: '@hackersmang',
        site: '@hackersmang',
    },
    alternates: {
        canonical: 'https://hackersmang.org/techmang25',
        languages: {
            'en-US': '/en-US',
        },
    },
    bookmarks: ['https://hackersmang.org/techmang25'],
    category: 'technology',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'TechMang25 2025',
    description: 'Mangaluru\'s premier tech conference featuring cutting-edge talks on AI, Cloud Computing, DevOps, and more.',
    startDate: '2025-01-17T09:00:00+05:30',
    endDate: '2025-01-17T18:00:00+05:30',
    location: {
        '@type': 'Place',
        name: 'Hackerspace Mangaluru',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mangaluru',
            addressRegion: 'Karnataka',
            addressCountry: 'IN'
        }
    },
    organizer: {
        '@type': 'Organization',
        name: 'Hackerspace Mangaluru',
        url: 'https://hackersmang.org'
    },
    offers: {
        '@type': 'Offer',
        url: 'https://hackersmang.org/techmang25/register',
        price: '0',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock'
    },
    image: [
        'https://hackersmang.org/techmang25/cards/og-card.png',
        'https://hackersmang.org/techmang25/cards/twitter-card.png'
    ]
};

function page() {
    // Extract registration link from the first track for backward compatibility
    const registrationLink = EVENT_DETAIL.tracks?.[0]?.registrationLink || null;

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
                    <CallForSpeaker registrationLink={EVENT_DETAIL.callForSpeakerLink} registrationStartOn={EVENT_DETAIL.callForSpeakerStartOn} registrationEndOn={EVENT_DETAIL.callForSpeakerEndOn} />
                    <Venue happeningOn={EVENT_DETAIL.happeningOn} locationName={EVENT_DETAIL.locationName} locationUrl={EVENT_DETAIL.locationUrl} />
                    <Schedule sessionId={process.env.NEXT_PUBLIC_SESSIONIZE_API_ID} />
                    <Resources resources={RESOURCES} />
                    <Register 
                        registrationLink={registrationLink} 
                        registrationStartOn={EVENT_DETAIL.registrationStartOn} 
                        registrationEndOn={EVENT_DETAIL.registrationEndOn} 
                    />
                    <About />
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default page;