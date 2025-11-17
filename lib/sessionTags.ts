import { CategoryItem } from './types';

/**
 * Hardcoded mapping of session titles to tags
 * If a session title contains any of these keys (case-insensitive),
 * the corresponding tags will be added
 */
export const SESSION_TITLE_TAGS: Array<{
  titleMatch: string | string[]; // Session title or array of possible titles
  tags: CategoryItem[]; // Tags to add for this session
}> = [
  // Example entries - replace with your actual session titles and tags
  {
    titleMatch: "Build your code-first app with Azure AI Agent Service",
    tags: [
      { id: 1, name: "Students Only" },
    ]
  },
];

/**
 * Find hardcoded tags for a session title
 * @param sessionTitle - The title of the session
 * @returns Array of CategoryItem tags, or empty array if no match found
 */
export function getHardcodedTagsForSession(sessionTitle: string): CategoryItem[] {
  if (!sessionTitle) return [];

  const normalizedTitle = sessionTitle.toLowerCase().trim();

  for (const mapping of SESSION_TITLE_TAGS) {
    const matches = Array.isArray(mapping.titleMatch)
      ? mapping.titleMatch
      : [mapping.titleMatch];

    const foundMatch = matches.some(match => 
      normalizedTitle.includes(match.toLowerCase().trim())
    );

    if (foundMatch) {
      return mapping.tags;
    }
  }

  return [];
}

