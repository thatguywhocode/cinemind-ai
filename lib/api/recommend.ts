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

  const responseText = await res.text();

  console.log("========== RECOMMENDATION API ==========");
  console.log("URL:", "/api/recommend");
  console.log("STATUS:", res.status);
  console.log("STATUS TEXT:", res.statusText);
  console.log("OK:", res.ok);
  console.log("RESPONSE:", responseText);
  console.log("=========================================");

  if (!res.ok) {
    throw new Error(
      `Recommendation API failed: ${res.status} ${res.statusText} - ${responseText}`
    );
  }

  try {
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Invalid JSON from /api/recommend:", responseText);
    throw new Error("Recommendation API returned invalid JSON.");
  }
}