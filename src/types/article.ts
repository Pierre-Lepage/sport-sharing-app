// src/types/article.ts

export enum SportCategory {
  SPORTS_HIVER = 'SPORTS_HIVER',
  SPORTS_NAUTIQUES = 'SPORTS_NAUTIQUES',
  SPORTS_RAQUETTE = 'SPORTS_RAQUETTE'
}

// Interface pour un article individuel
export interface IArticle {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: SportCategory;
  location: string;
  owner: {
      id: string;
      username: string;
  };
  createdAt: string;
  updatedAt: string;
  availability: boolean;
}

// Nouvelle interface pour la réponse paginée
export interface ArticlesResponse {
  articles: IArticle[];
  currentPage: number;
  totalPages: number;
  totalArticles: number;
}