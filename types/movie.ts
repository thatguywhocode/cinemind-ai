export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genres?: string[];
}

export type MovieCategory =
  | "trending"
  | "popular"
  | "top_rated"
  | "now_playing"
  | "upcoming";

/* -------------------------------------------------------------------------- */
/*                               TMDB TYPES                                   */
/* -------------------------------------------------------------------------- */

export interface TMDBMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
  popularity: number;
  video: boolean;
  vote_count: number;
}

/* -------------------------------------------------------------------------- */
/*                           AI RECOMMENDATION TYPES                          */
/* -------------------------------------------------------------------------- */

export interface RecommendationMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genres: string[];
  reason: string;
}

export interface RecommendationResponse {
  mood: {
    mood: string;
    confidence: number;
  };

  recommendations: RecommendationMovie[];
}