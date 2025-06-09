import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateSearchUrl(country: string, competitor: string, query: string): string {
  return `/search/${country}/${competitor}/${encodeURIComponent(query)}`;
}