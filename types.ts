import { LucideIcon } from 'lucide-react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon?: string; // URL to favicon or generic icon name
  tags: string[];
  isHot?: boolean;
  isNew?: boolean;
  image: string; // Specific image for the tool card (Required now for better visuals)
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tools: Tool[];
  themeColor: string; // For visual accents (e.g., "blue", "purple", "emerald")
  gradient: string;   // CSS gradient string for the card visual area
}