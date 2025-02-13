import { EventDetailProps } from "@/lib/types";

export const EVENT_DETAIL: EventDetailProps = {
  title: "#TechMang25",
  subtitle: "Mangaluru Tech Day 2025",
  locationName: "UniCourt Mangaluru",
  locationUrl: new URL("https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7"),
  happeningOn: new Date("02/01/2025"), // MM/DD/YYYY
  registrationLink: new URL('https://buytickets.at/hackerspacemangaluru/1308788'),
  registrationStartOn: new Date("01/21/2025"),
  registrationEndOn: new Date("03/31/2025"),
  callForSpeakerLink:  new URL("https://sessionize.com/techmang/"),
  callForSpeakerStartOn: new Date("01/05/2025"),
  callForSpeakerEndOn: new Date("01/20/2025"),
};
