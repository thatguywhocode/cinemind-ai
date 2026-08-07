"use client";

import { useEffect, useState } from "react";
import type { Movie } from "@/types/movie";

export function useTrending() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/trending");
        const data = await res.json();

        setMovies(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    movies,
    loading,
  };
}