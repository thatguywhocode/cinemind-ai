const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = process.env.TMDB_API_KEY!;

export async function fetchTrendingMovies() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch trending movies.");
  }

  return res.json();
}

export async function searchMovies(query: string) {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );

  if (!res.ok) {
    throw new Error("Movie search failed.");
  }

  return res.json();
}

export async function getMovieDetails(id: number) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Movie details not found.");
  }

  return res.json();
}