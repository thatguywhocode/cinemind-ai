"use client";

import { useState } from "react";
import type { MovieDetails } from "@/lib/tmdb/movie";
import { getMovie } from "@/lib/api/movie";


export function useMovie() {
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const movieCache = new Map<number, MovieDetails>();

  async function openMovie(id: number) {
  setOpen(true);

  if (movieCache.has(id)) {
    setMovie(movieCache.get(id)!);
    return;
  }

  setLoading(true);
  setMovie(null);

  try {
    const data = await getMovie(id);

    movieCache.set(id, data);

    setMovie(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  function closeMovie() {
    setOpen(false);
    setMovie(null);
  }

  return {
    movie,
    loading,
    open,
    openMovie,
    closeMovie,
  };
}