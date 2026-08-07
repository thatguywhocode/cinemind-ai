import { tmdbFetch } from "./client";
import type { TMDBMovie } from "@/types/movie";

interface SearchResponse {
  page: number;
  results: TMDBMovie[];
}

export async function searchMovies(query: string) {
  return tmdbFetch<SearchResponse>("/search/movie", {
    query,
    include_adult: "false",
    language: "en-US",
    page: "1",
  });
}