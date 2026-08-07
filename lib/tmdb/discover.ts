import { tmdbFetch } from "./client";
import { getGenreIds } from "./genres";
import type { TMDBMovie, MovieCategory, Movie } from "@/types/movie";
import type { MoodAnalysis } from "@/lib/ai/schema";

interface DiscoverResponse {
  page: number;
  results: TMDBMovie[];
}

const CATEGORY_ENDPOINTS: Record<MovieCategory, string> = {
  trending: "/trending/movie/week",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  now_playing: "/movie/now_playing",
  upcoming: "/movie/upcoming",
};

const POSTER_BASE = "https://image.tmdb.org/t/p/w500";

export async function getMovies(
  category: MovieCategory
): Promise<Movie[]> {
  const data = await tmdbFetch<DiscoverResponse>(
    CATEGORY_ENDPOINTS[category]
  );

  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path
      ? `${POSTER_BASE}${movie.poster_path}`
      : "/placeholder-poster.jpg",
    rating: movie.vote_average,
    year: movie.release_date
      ? movie.release_date.slice(0, 4)
      : "N/A",
  }));
}

export async function discoverMovies(
  mood: MoodAnalysis
): Promise<DiscoverResponse> {
  const genreIds = getGenreIds(mood.genres);

  return tmdbFetch<DiscoverResponse>(
    "/discover/movie",
    {
      with_genres: genreIds,
      sort_by: "popularity.desc",
      include_adult: "false",
      vote_count_gte: "500",
      language: "en-US",
      page: "1",
    }
  );
}