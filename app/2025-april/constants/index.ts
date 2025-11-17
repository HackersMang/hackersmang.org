import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#HMApr25",
  subtitle: "HackersMang, 2025 April Edition",

  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("04/12/2025"), // MM/DD/YYYY

  tracks: [
    {
      name: "AI Workshops",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/1657140",
      buttonText: "Register for AI Workshops"
    },
    {
      name: "Tech Talks [Web, AI, IOT]",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/1628499",
      buttonText: "Register for Tech Talks"
    }
  ],

  callForSpeakerLink: "https://sessionize.com/hackersmang-april-2025-edition",
  callForSpeakerStartOn: new Date("03/08/2025"),
  callForSpeakerEndOn: new Date("31/04/2025"),

  registrationStartOn: new Date("03/14/2025"),
  registrationEndOn: new Date("04/11/2025"),

  isSchedulePublished: false,
  sessionizeApiId: "oav57ftu",
};

// Hero card
export const HERO_CARD_URL = "https://hackersmang.org/2025/april-hero-card.png";

// Meta data
export const eventMetaData = {
  title: "HMApr25 | HackersMang, 2025 April Edition by Hackerspace Mangaluru | Premier Tech Conference in Mangaluru",
  description: "Join HackersMang, Mangaluru's premier tech conference featuring cutting-edge talks on AI, Cloud Computing, DevOps, and more. Network with industry experts and innovators. April 2025 at Hackerspace Mangaluru.",
  bookmarks: 'https://hackersmang.org/2025-april',
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
    title: "How UniCourt Serves Millions of Requests Under 60ms with PHP",
    speaker: "Vivek Texeira",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://docs.google.com/presentation/d/1lxBxs4dU2d18CtS8t5F7yAEysgBWv1Hf/edit#slide=id.g34bb19db7a9_0_110",
        type: "presentation",
      },
    ],
  },
  {
    title: "An Introduction to Angular 19",
    speaker: "Tejas Prabhu",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://example.com/angular19-slideshttps://docs.google.com/presentation/d/1PqFQT4bdCPVfUxiXSX7OMI49MzRH_u5F/edit#slide=id.p1",
        type: "presentation",
      },
      {
        title: "More Resources",
        url: "https://drive.google.com/file/d/1LHB0GyvkybOpApszYgZm-89EIPjMNuGG/view?usp=sharing",
        type: "external",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/tejasprabhuk/hackersmang-demo",
        type: "external",
      },
    ],
  },
  {
    title: "Tanstack Query : Taming async state management",
    speaker: "Reevan Dsouza",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1OMxSxXzSngVv1o7YhRCDaXv42uVchNYb/view?usp=sharing",
        type: "presentation",
      },
    ],
  },
  {
    title: "Need for Speed: Minimizing the impact of Bufferbloat",
    speaker: "Mohit P. Tahiliani",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1bU6kHgLV91TANGRpobs9c9Ta7evNC5LJ/view?usp=sharing",
        type: "presentation",
      },
    ],
  },
  {
    title: "Hello AI, Am I Really Safe Here?",
    speaker: "Amrit Shenava",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://docs.google.com/presentation/d/1EJ4RvU7Xkv3bEYhlMFLsLLQaNDx8a2h1/edit?usp=sharing&ouid=114461731221800587026&rtpof=true&sd=true",
        type: "presentation",
      },
    ],
  },
  {
    title: "A Developer’s Guide to Building Cloud-Native AI ready apps with .NET Aspire",
    speaker: "Augustine Correa",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1G50oDr_tYVIt1T2myJSyJ7cAcBBzdtXj/view?usp=sharing",
        type: "presentation",
      },
    ],
  },
  {
    title: "Mastering Deadlock Resolution in PostgreSQL: Unleash the Power of SKIP LOCKED",
    speaker: "Vineet Stewart Lasrado",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://docs.google.com/presentation/d/1nSEyv_CVX8WL7mtFLWY58SIcy00QmP87/edit?usp=sharing&ouid=114461731221800587026&rtpof=true&sd=true",
        type: "presentation",
      },
    ],
  },
  {
    title: "Beyond Traditional RAG: Building Intelligent Apps with Agentic Retrieval and MCP",
    speaker: "Akshay Kumar U",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1KDovSgi-s6XPBwHh4eVJpisaIhPL8VT2/view?usp=sharing",
        type: "presentation",
      },
    ],
  },
];
