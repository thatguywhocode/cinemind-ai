import { getMovies } from "@/lib/tmdb/discover";

export async function getTrendingMovies() {
  return getMovies("trending");
}