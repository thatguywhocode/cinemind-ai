import { getMovieDetails } from "@/lib/tmdb/movie";

export async function fetchMovie(id: number) {
  return getMovieDetails(id);
}