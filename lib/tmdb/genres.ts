export const TMDB_GENRES: Record<string, number> = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  Thriller: 53,
  TV: 10770,
  War: 10752,
  Western: 37,
};

export function getGenreIds(genres: string[]) {
  return genres
    .map((genre) => TMDB_GENRES[genre])
    .filter(Boolean)
    .join(",");
}