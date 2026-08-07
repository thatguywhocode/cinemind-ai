const BASE_URL = "https://api.themoviedb.org/3";

export async function tmdbFetch<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  const search = new URLSearchParams({
    api_key: process.env.TMDB_API_KEY!,
    language: "en-US",
    ...params,
  });

  try {
    const res = await fetch(
      `${BASE_URL}${endpoint}?${search.toString()}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) {
      throw new Error(
        `TMDB ${endpoint} returned ${res.status}`
      );
    }

    return res.json();
  } catch (error) {
    console.error(`TMDB fetch failed: ${endpoint}`, error);
    throw error;
  }
}