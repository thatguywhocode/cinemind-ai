import { tmdbFetch } from "./client";

const IMAGE_BASE = "https://image.tmdb.org/t/p/original";
const POSTER_BASE = "https://image.tmdb.org/t/p/w500";

/* -------------------------------------------------------------------------- */
/* APP TYPES */
/* -------------------------------------------------------------------------- */

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile: string | null;
}

export interface SimilarMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  poster: string;
  backdrop: string;
  rating: number;
  year: string;
  runtime: number;
  genres: string[];
  releaseDate: string;
  originalLanguage: string;
  status: string;
  budget: number;
  revenue: number;
  productionCompanies: string[];

  trailerKey?: string;

  watchUrl?: string;

  streamingProviders: {
    name: string;
    logo: string;
  }[];

  cast: CastMember[];
  similar: SimilarMovie[];
}

/* -------------------------------------------------------------------------- */
/* TMDB TYPES */
/* -------------------------------------------------------------------------- */

interface TMDBGenre {
  id: number;
  name: string;
}

interface TMDBCompany {
  id: number;
  name: string;
}

interface TMDBMovieResponse {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
  runtime: number;
  genres: TMDBGenre[];
  original_language: string;
  status: string;
  budget: number;
  revenue: number;
  production_companies: TMDBCompany[];
}

interface TMDBCastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

interface TMDBCreditsResponse {
  cast: TMDBCastMember[];
}

interface TMDBVideo {
  key: string;
  site: string;
  type: string;
}

interface TMDBVideosResponse {
  results: TMDBVideo[];
}

interface TMDBSimilarMovie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

interface TMDBSimilarResponse {
  results: TMDBSimilarMovie[];
}

interface TMDBProvider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
}

interface TMDBCountryProviders {
  link: string;
  flatrate?: TMDBProvider[];
  rent?: TMDBProvider[];
  buy?: TMDBProvider[];
}

interface TMDBWatchProviderResponse {
  results: Record<string, TMDBCountryProviders>;
}

/* -------------------------------------------------------------------------- */
/* SERVICE */
/* -------------------------------------------------------------------------- */

export async function getMovieDetails(
  movieId: number
): Promise<MovieDetails> {
const [
  movieResult,
  creditsResult,
  videosResult,
  similarResult,
  providersResult,
] = await Promise.allSettled([
  tmdbFetch<TMDBMovieResponse>(`/movie/${movieId}`),

  tmdbFetch<TMDBCreditsResponse>(
    `/movie/${movieId}/credits`
  ),

  tmdbFetch<TMDBVideosResponse>(
    `/movie/${movieId}/videos`
  ),

  tmdbFetch<TMDBSimilarResponse>(
    `/movie/${movieId}/similar`
  ),

  tmdbFetch<TMDBWatchProviderResponse>(
    `/movie/${movieId}/watch/providers`
  ),
]);
  if (movieResult.status === "rejected") {
    throw movieResult.reason;
  }

  const movie = movieResult.value;

  const credits: TMDBCreditsResponse =
    creditsResult.status === "fulfilled"
      ? creditsResult.value
      : { cast: [] };

  const videos: TMDBVideosResponse =
    videosResult.status === "fulfilled"
      ? videosResult.value
      : { results: [] };

  const similar: TMDBSimilarResponse =
    similarResult.status === "fulfilled"
      ? similarResult.value
      : { results: [] };

const providerResults: Record<string, TMDBCountryProviders> =
  providersResult.status === "fulfilled"
    ? providersResult.value.results
    : {};

const providerData =
  providerResults["IN"] ??
  providerResults["US"] ??
  providerResults["GB"] ??
  Object.values(providerResults).at(0);

// Always have a watch page
const watchUrl =
  providerData?.link ??
  `https://www.themoviedb.org/movie/${movieId}/watch`;

const allProviders = [
  ...(providerData?.flatrate ?? []),
  ...(providerData?.rent ?? []),
  ...(providerData?.buy ?? []),
];

// Remove duplicates
const uniqueProviders = allProviders.filter(
  (provider, index, array) =>
    array.findIndex(
      (p) => p.provider_id === provider.provider_id
    ) === index
);

const streamingProviders = uniqueProviders.map(
  (provider) => ({
    name: provider.provider_name,
    logo: `https://image.tmdb.org/t/p/w92${provider.logo_path}`,
  })
);

  const trailer =
    videos.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    ) ??
    videos.results.find(
      (video) => video.site === "YouTube"
    ) ??
    videos.results[0];

  return {
    id: movie.id,

    title: movie.title,

    overview: movie.overview,

    poster: movie.poster_path
      ? `${POSTER_BASE}${movie.poster_path}`
      : "/placeholder-poster.jpg",

    backdrop: movie.backdrop_path
      ? `${IMAGE_BASE}${movie.backdrop_path}`
      : "/placeholder-backdrop.jpg",

    rating: movie.vote_average,

    year: movie.release_date
      ? movie.release_date.slice(0, 4)
      : "N/A",

    runtime: movie.runtime,

    genres: movie.genres.map(
      (genre) => genre.name
    ),

    releaseDate: movie.release_date,

    originalLanguage: movie.original_language,

    status: movie.status,

    budget: movie.budget,

    revenue: movie.revenue,

    productionCompanies:
      movie.production_companies.map(
        (company) => company.name
      ),

    trailerKey: trailer?.key,

    watchUrl,

    streamingProviders,

    cast: credits.cast
      .slice(0, 12)
      .map((actor) => ({
        id: actor.id,
        name: actor.name,
        character: actor.character,
        profile: actor.profile_path
          ? `${POSTER_BASE}${actor.profile_path}`
          : null,
      })),

    similar: similar.results
      .slice(0, 10)
      .map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path
          ? `${POSTER_BASE}${movie.poster_path}`
          : "/placeholder-poster.jpg",
        rating: movie.vote_average,
        year: movie.release_date
          ? movie.release_date.slice(0, 4)
          : "N/A",
      })),
  };
}