// lib/utils.ts
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

// utils/formatDate.ts
export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid Date"; // Handle incorrect date formats
  }

  const options: Intl.DateTimeFormatOptions = { 
    day: "numeric", 
    month: "long", 
    year: "numeric", 
    weekday: "long" 
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Extract day and add ordinal suffix (1st, 2nd, 3rd, etc.)
  const day = date.getDate();
  const suffix = getOrdinalSuffix(day);
  return formattedDate.replace(day.toString(), `${day}${suffix}`);
}

function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";
  }
}

// Tag utility functions
import { Category, CategoryItem } from './types';
import { getHardcodedTagsForSession } from './sessionTags';

/**
 * Extract all tags from a session's categories
 * First checks hardcoded tags based on session title, then adds tags from API response
 */
export function extractTagsFromSession(session: { title: string; categories: Category[] }): CategoryItem[] {
  const tags: CategoryItem[] = [];
  const tagIds = new Set<number>(); // Track tag IDs to avoid duplicates

  // Step 1: Add hardcoded tags first (based on session title)
  const hardcodedTags = getHardcodedTagsForSession(session.title);
  hardcodedTags.forEach(tag => {
    if (!tagIds.has(tag.id)) {
      tags.push(tag);
      tagIds.add(tag.id);
    }
  });

  // Step 2: Add tags from API response (avoiding duplicates)
  session.categories.forEach(category => {
    category.categoryItems.forEach(item => {
      // Avoid duplicates by checking if tag ID already exists
      if (!tagIds.has(item.id)) {
        // If the tag name is "AI TECHVERSE (10 Mins)", then remove the text added in the brackets
        if (item.name.includes("(")) {
          item.name = item.name.split("(")[0].trim();
        }
        tags.push(item);
        tagIds.add(item.id);
      }
    });
  });
  
  return tags;
}
