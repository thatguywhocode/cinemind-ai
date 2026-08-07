export interface RecommendationMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genres: string[];
  reason: string;
}

export interface RecommendationMood {
  mood: string;
}

export interface RecommendationResponse {
  mood: RecommendationMood;
  recommendations: RecommendationMovie[];
}