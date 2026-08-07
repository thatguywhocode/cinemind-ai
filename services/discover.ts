import { discoverMovies } from "@/lib/tmdb/discover";
import type { MoodAnalysis } from "@/lib/ai/schema";

export async function discoverCandidates(
  mood: MoodAnalysis
) {
  return discoverMovies(mood);
}