import { EventDetailProps, Resource } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#TechMang25",
  subtitle: "Mangaluru Tech Day 2025",
  locationName: "UniCourt Mangaluru",
  locationUrl: "https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7",
  happeningOn: new Date("02/01/2025"), // MM/DD/YYYY
  tracks: [
    {
      name: "Main Hall",
      registrationLink: "https://buytickets.at/hackerspacemangaluru/1308788",
      buttonText: "Register for Main Track"
    }
  ],
  registrationStartOn: new Date("2024-12-01"),
  registrationEndOn: new Date("2025-01-31"),
  callForSpeakerLink: "https://sessionize.com/techmang/",
  callForSpeakerStartOn: new Date("01/05/2025"),
  callForSpeakerEndOn: new Date("01/20/2025"),
  isSchedulePublished: true,
  sessionizeApiId: "bvixkopq",
};

export const RESOURCES: Resource[] = [
  {
    speaker: "Avinash Shetty",
    title: "AIML Trials",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1jVHqMoXPKabIxc3iVO1o8WMf7PLwZf3T/view?usp=drive_link",
        type: "presentation",
      },
    ],
  },
  {
    speaker: "Mani Chandrasekaran",
    title: "Build and scale generative AI applications with Amazon Bedrock",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1I_gB58GBpGlH7rrX7c_firyeV1HpcYrM/view?usp=drive_link",
        type: "presentation",
      }
    ],
  },
  {
    speaker: "Pratham Kotian",
    title: "Dspy : introduction and basics.",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1yqN0KJWK2QD1RN4WxR5NJVyGOriBGt_k/view?usp=drive_link",
        type: "presentation",
      }
    ],
  },
  {
    title: "Introduction to Model Context Protocol: A Beginner's Guide",
    speaker: "Vedanth V",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://drive.google.com/file/d/1kOAQgC0fDhjSB1IwtEULZlaSQ4j069lu/view?usp=drive_link",
        type: "presentation",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/vedanthvnayak/mcp-tool",
        type: "code",
      }
    ],
  },
  {
    title: "Inside the Server, Outside the Browser",
    speaker: "Deveesh Shetty",
    resources: [
      {
        title: "Presentation Slides",
        url: "https://docs.google.com/presentation/d/17rkEGptTVJ_upVr0shwcLX1KREbTNzTI/edit?usp=drive_link&ouid=102557958020123520784&rtpof=true&sd=true",
        type: "presentation",
      }
    ],
  },
]