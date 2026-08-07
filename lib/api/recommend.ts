import type { RecommendationResponse } from "@/types/recommendation";

export async function getRecommendations(
  prompt: string
): Promise<RecommendationResponse> {
  const res = await fetch("/api/recommend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!res.ok) {
    throw new Error("Recommendation failed.");
  }

  return res.json();
}