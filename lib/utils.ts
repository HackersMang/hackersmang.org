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

/**
 * Extract all tags from a session's categories
 */
export function extractTagsFromSession(session: { categories: Category[] }): CategoryItem[] {
  const tags: CategoryItem[] = [];
  
  session.categories.forEach(category => {
    category.categoryItems.forEach(item => {
      // Avoid duplicates by checking if tag already exists
      if (!tags.find(tag => tag.id === item.id)) {
        tags.push(item);
      }
    });
  });
  
  return tags;
}
