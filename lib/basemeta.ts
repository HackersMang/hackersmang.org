import { Metadata } from "next";

export const SITE_NAME = "HackersMang";
export const SITE_URL = "https://hackersmang.org";
export const SITE_CREATOR = "HackersMang Community";
export const SITE_PUBLISHER = "Vercel";
export const SITE_APPLICAION_NAME = "HackersMang Website";

export const baseMetadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    generator: SITE_NAME,
    applicationName: SITE_APPLICAION_NAME,
    referrer: 'origin-when-cross-origin',
    authors: [
        { 
            name: SITE_CREATOR,
            url: SITE_URL
        }
    ],
    creator: SITE_CREATOR,
    publisher: SITE_PUBLISHER,
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
};


