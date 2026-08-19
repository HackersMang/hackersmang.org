import { MetadataRoute } from "next";
import { EVENT_DETAIL as aiTechverseEvent } from "@/app/ai-techverse/constants";
import { EVENT_DETAIL as nov2024Event } from "@/app/2024-november/constants";
import { EVENT_DETAIL as apr2025Event } from "@/app/2025-april/constants";
import { EVENT_DETAIL as aug2025Event } from "@/app/2025-august/constants";
import { EVENT_DETAIL as hmnov25Event } from "@/app/hmnov25/constants";
import { EVENT_DETAIL as techmang25Event } from "@/app/techmang25/constants";
import { EVENT_DETAIL as techmang26Event } from "@/app/techmang26/constants";
import { EVENT_DETAIL as hmapr26Event } from "@/app/hmapr26/constants";
import { EVENT_DETAIL as hmjun26Event } from "@/app/hmjun26/constants";
import { EVENT_DETAIL as hmsep26Event } from "@/app/hmsep26/constants";
import { SITE_URL } from "@/lib/basemeta";
import { PAST_EVENTS, UPCOMING_EVENTS } from "@/lib/events";

const EVENT_LAST_MODIFIED: Record<string, Date> = {
  "/ai-techverse": aiTechverseEvent.happeningOn,
  "/2024-november": nov2024Event.happeningOn,
  "/2025-april": apr2025Event.happeningOn,
  "/2025-august": aug2025Event.happeningOn,
  "/hmnov25": hmnov25Event.happeningOn,
  "/techmang25": techmang25Event.happeningOn,
  "/techmang26": techmang26Event.happeningOn,
  "/hmapr26": hmapr26Event.happeningOn,
  "/hmjun26": hmjun26Event.happeningOn,
  "/hmsep26": hmsep26Event.happeningOn,
};

const UPCOMING_PATHS = new Set(
  UPCOMING_EVENTS.filter((event) => !event.isExternal).map((event) => event.href)
);

function getEventLastModified(path: string): Date {
  return EVENT_LAST_MODIFIED[path] ?? new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const eventPages: MetadataRoute.Sitemap = [...UPCOMING_EVENTS, ...PAST_EVENTS]
    .filter((event) => !event.isExternal)
    .map((event) => ({
      url: `${SITE_URL}${event.href}`,
      lastModified: getEventLastModified(event.href),
      changeFrequency: "monthly" as const,
      priority: UPCOMING_PATHS.has(event.href) ? 0.9 : 0.8,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/events`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...eventPages,
  ];
}
