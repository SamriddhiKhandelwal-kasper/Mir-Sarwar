export interface ContentItem {
  id: string;
  title: string;
  image: string;
  genre?: string;
  year?: number;
  type: 'movie' | 'series' | 'trending';
}

export interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;
  backgroundImage: string;
  relatedImages: string[];
}