import { SITE_CREATOR, SITE_NAME, SITE_URL } from "@/lib/basemeta";
import { EventDetailProps, Resource, Partner } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#TechMang26",
  subtitle: "AI in Action: Build · Test · Ship",
  pageUrl: "/techmang26",
  locationName: "Wrkwrk Triangle",
  locationUrl: "https://www.google.com/maps/dir/12.9204224,74.8388352/wrkwrk+Triangle,+3rd,+4th,+5th+floor,+Wrkwrk+triangle,+wrkwrk+Triangle,+NH+66,+Kottara+Chowki,+Derabail,+Mangaluru+575008,+Panvel+-+Kochi+-+Kanyakumari+Hwy,+Derebail,+Mangaluru,+Karnataka+575006/@12.8870616,74.8561301,13.58z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba35b463be9c45f:0x8f5bdede4e4f1e52!2m2!1d74.8377175!2d12.9089805?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",
  happeningOn: new Date("01/31/2026"), // MM/DD/YYYY - Update with actual date
  tracks: [
    {
      name: "AI Talks",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/2012555",
      buttonText: "Register for AI Talks"
    },
    {
      name: "AI workshops",
      registrationLink: "https://www.tickettailor.com/events/hackerspacemangaluru/2012553",
      buttonText: "Register for AI workshops"
    }
  ],
  registrationStartOn: new Date("01/01/2026"), // MM/DD/YYYY
  registrationEndOn: new Date("01/21/2026"), // MM/DD/YYYY
  callForSpeakerLink: "https://sessionize.com/hackersmang-techmang-2026/",
  callForSpeakerStartOn: new Date("11/28/2025"), // MM/DD/YYYY
  callForSpeakerEndOn: new Date("01/30/2026"), // MM/DD/YYYY
  isSchedulePublished: false,
  sessionizeApiId: "bgrouyg6",
  showComingSoonBanner: false,

  summitAffiliation: {
    isEnabled: false,
    summitName: "AI Impact Summit 2026",
    tagline: "Official Pre-Summit Event of India - AI Impact Summit 2026",
    summitWebsiteUrl: "https://impact.indiaai.gov.in/",
    imageUrl: "/branding/2026/ai-impact-summit/logo.png"
  },
  partners: [
    {
      label: "Co-hosted",
      logoPath: "/branding/2026/tie/logo.png",
      alt: "TiE Mangaluru Logo",
      url: "https://tiemangaluru.org/"
    },
    {
      label: "Venue Partner",
      logoPath: "/branding/2026/wrkwrk/logo.png",
      alt: "Wrkwrk Logo",
      url: "https://www.wrkwrk.in/"
    }
  ] as Partner[],
};

// Hero card
export const HERO_CARD_URL = "https://hackersmang.org/2026/techmang26-hero-card.png";

// Meta data
export const eventMetaData = {
  title: "TechMang26 | The Annual Flagship Event of Hackerspace Mangaluru | 2026 edition by Hackerspace Mangaluru",
  description: "Join TechMang26, The Annual Flagship Event of Hackerspace Mangaluru. Network with industry experts and innovators. January 2026 at Hackerspace Mangaluru.",
  bookmarks: 'https://hackersmang.org/techmang26',
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
    title: "Build AI-Powered Apps with AI-SDK",
    speaker: "Jayasurya Kotian",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1E47FZdbzI9MHsJOSUENX5pFqT8H20I6q/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Dealing with practical issues in Reinforcement Learning: Variance and Constraints",
    speaker: "Arun Ramaswamy",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/11KHZ1lKh3soqaYO--2Jn70XtMpc6Mg5X/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "From Idea to Impact: How BMAD Method Transforms Development",
    speaker: "Vedanth V",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://docs.google.com/presentation/d/1MQ5MfN_8QX3g7NOUqnkTjY0VjmOFj0wz/edit?usp=drive_web&ouid=114461731221800587026&rtpof=true",
        type: "presentation"
      }
    ]
  },
  {
    title: "Global by Default: How AI is Solving the Internationalisation Bottleneck",
    speaker: "Amjad N & Antony Anson",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1cWOPIBqnpImxSbrF3JffDgkO5rXC1keU/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Hierarchical Language Network for Semantic Classification (HeLN)",
    speaker: "Pratham Kotian",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/15IMm87h1KHA1jBXraTo57rBoR2lwjwMd/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Mastering Hackathons in 2026: From Problem Statement to Winning Prototype (with AI Use Cases)",
    speaker: "Yash Thakare",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/173i3MdFWZe0HNccNB4Ie4BlcM8mdK609/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Say Hello to Smart Surveillance: A Feed That Talks Back",
    speaker: "Vedanth V",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1qwCwr1YZcWHmDyhUy_oM5zuSDIiO6KL-/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Ship Faster with AI: How I Use AI Daily as a Developer",
    speaker: "Yash Thakare",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1Q-DnkNpExXZshSRG3l-4AwYhpEaN-f1w/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "State Machines: The Last State Management Solution You'll Ever Need",
    speaker: "Ajith Kumar P M & Aswathy Saji",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://docs.google.com/presentation/d/1W6Q-p1Ltoyld1l3MRixCfHGO3OPvdHgrWGqvYvbkXeE/edit?slide=id.g3b8b0301df6_0_181#slide=id.g3b8b0301df6_0_181",
        type: "presentation"
      }
    ]
  },
  {
    title: "Supercharging Android Apps with On-Device AI: Gemini Nano & Prompt API",
    speaker: "Dinoy Raj",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1uHfCCeRarekq6lN64qoz3THNr6eqZMR2/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Supervised Contrastive Learning for Entity Resolution",
    speaker: "Mohammed Nouman",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1k3Rtmwb5TPsmfAftwjAWBqNzPJOO6zKk/view",
        type: "presentation"
      }
    ]
  },
  {
    title: "Voice AI Agents: From Concept to Real-World Impact in Hospitality & Food Ordering",
    speaker: "Vishnunaik N T",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1bou4C7q0E8NK-kaK571715Ns8Fm5jGTl/view",
        type: "presentation"
      }
    ]
  }
];

