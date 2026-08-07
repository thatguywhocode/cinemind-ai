import type { MovieDetails } from "@/lib/tmdb/movie";

export async function getMovie(
  id: number
): Promise<MovieDetails> {
  const response = await fetch(`/api/movie/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch movie.");
  }

  return response.json();
}