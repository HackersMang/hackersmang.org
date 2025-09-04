import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#HMAug25",
  subtitle: "HackersMang, 2025 August Edition",

  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("08/23/2025"), // MM/DD/YYYY

  tracks: [
    {
      name: "AI [Workshops & Talks]",
      registrationLink: "https://buytickets.at/hackerspacemangaluru/1704645",
      buttonText: "Register for AI Workshops"
    },
    {
      name: "Tech Talks [Web, AI, IOT]",
      registrationLink: "https://buytickets.at/hackerspacemangaluru/1704644",
      buttonText: "Register for Tech Talks"
    }
  ],

  callForSpeakerLink: "https://sessionize.com/hackersmang-august-2025-edition/",
  callForSpeakerStartOn: new Date("07/21/2025"),
  callForSpeakerEndOn: new Date("08/15/2025"),

  registrationStartOn: new Date("07/24/2025"),
  registrationEndOn: new Date("08/23/2025"),

  isSchedulePublished: false,
  sessionizeApiId: 'bufbqryp',
};

// Hero card
export const HERO_CARD_URL = "https://hackersmang.org/2025/august-hero-card.png";

// Meta data
export const eventMetaData = {
  title: "HackersMang | 2025 August edition by Hackerspace Mangaluru | Premier Tech Conference in Mangaluru",
  description: "Join HackersMang, Mangaluru's premier tech conference featuring cutting-edge talks on AI, Cloud Computing, DevOps, and more. Network with industry experts and innovators. August 2025 at Hackerspace Mangaluru.",
  bookmarks: 'https://hackersmang.org/2025-august',
  category: 'Tech Conference',
};

// DO NOT EDIT BELOW THIS LINE

// SEO meta data
export const openGraph = {
  title: eventMetaData.title,
  description: eventMetaData.description,
  url: eventMetaData.bookmarks,
  siteName: SITE_NAME,
  images: [
    {
      url: HERO_CARD_URL,
      width: 1200,
      height: 630,
      alt: `${EVENT_DETAIL.title} | ${EVENT_DETAIL.subtitle} Banner`
    },
  ],
  locale: 'en_US',
  type: 'website',
}

export const twitter = {
  card: 'summary_large_image',
  title: eventMetaData.title,
  description: eventMetaData.description,
  images: {
      url: HERO_CARD_URL,
      alt: `${EVENT_DETAIL.title} | ${EVENT_DETAIL.subtitle} Preview`
  },
  creator: SITE_CREATOR,
  site: SITE_NAME,
};

export const alternates = {
  canonical: eventMetaData.bookmarks,
  languages: {
      'en-US': '/en-US',
  },
};

// JSON-LD
export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: eventMetaData.title,
  description: eventMetaData.description,
  startDate: EVENT_DETAIL.happeningOn,
  endDate: EVENT_DETAIL.happeningOn,
  location: {
      '@type': 'Place',
      name: EVENT_DETAIL.locationName,
      address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mangaluru',
          addressRegion: 'Karnataka',
          addressCountry: 'IN'
      }
  },
  organizer: {
      '@type': eventMetaData.category,
      name: SITE_NAME,
      url: SITE_URL
  },
  offers: {
      '@type': 'Offer',
      url: eventMetaData.bookmarks,
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
  },
  image: [
      HERO_CARD_URL,
  ]
};

// Resources
export const RESOURCES: Resource[] = [
  {
    title: "OpenUSD: An Open Source Bridge for 3D",
    speaker: "Koushik Shanbhag",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1Ix69Qjuyxkn5yKtJkYoBUCk3xT4AmrKI/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Building private LLM-powered second brain on Intel CPU",
    speaker: "Pradeep Sharma",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/18AR5wE-6MpLzWdBa-8o2ihlGu2YaXXPY/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Voice AI Agents: From Concept to Real-World Impact in Hospitality",
    speaker: "Shreyas Udupa",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1Igee7tl_5ana3OC0p1HFIiY1mwG2fxPJ/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Google's Agent Development Kit",
    speaker: "Vedanth V",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1n75k5Gn4ndMos4PUTAXujJQasgDMgyq5/view",
        type: "presentation"
      }
    ]
  }
];
