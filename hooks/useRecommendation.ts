"use client";

import { useState } from "react";
import { getRecommendations } from "@/lib/api/recommend";
import type { RecommendationResponse } from "@/types/recommendation";
export function useRecommendation() {
  const [loading, setLoading] = useState(false);

  const [result, setResult] =
    useState<RecommendationResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  async function search(prompt: string) {
    try {
      setLoading(true);
      setError(null);

      const data = await getRecommendations(prompt);

      setResult(data);
    } catch (err) {
      console.error(err);

      setError("Unable to get recommendations.");
    } finally {
      setLoading(false);
    }
  }

  function clear() {
    setResult(null);
    setError(null);
  }

  return {
    loading,
    result,
    error,
    search,
    clear,
  };
}