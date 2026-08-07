"use client";

import MovieGrid from "@/components/movie/MovieGrid";
import MovieModal from "@/components/movie/MovieModal";
import MovieHero from "@/components/movie/MovieHero";
import MovieInfo from "@/components/movie/MovieInfo";
import { useMovie } from "@/hooks/useMovie";
import TrailerPlayer from "@/components/movie/TrailerPlayer";
import CastList from "@/components/movie/CastList";
import SimilarMovies from "@/components/movie/SimilarMovies";
import { useTrending } from "@/hooks/useTrending";


export default function TrendingMovies() {
  const {
    movies,
    loading: trendingLoading,
  } = useTrending();

  const {
    movie,
    loading,
    open,
    openMovie,
    closeMovie,
  } = useMovie();

  if (trendingLoading) {
  return (
    <section className="py-24">
      <div className="flex justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
      </div>
    </section>
  );
}

  return (
    <>
  <MovieGrid
  title="Trending This Week"
  movies={movies}
  showViewAll
  onMovieClick={openMovie}
/>

      <MovieModal
        open={open}
        onClose={closeMovie}
      >
        {loading ? (
          <div className="flex h-[80vh] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
              <h2 className="text-2xl font-semibold text-white">
                Fetching movie details...
              </h2>
            </div>
          </div>
        ) : movie ? (
          <>
          <MovieHero
  id={movie.id}
  title={movie.title}
  overview={movie.overview}
  backdrop={movie.backdrop}
  poster={movie.poster}
  rating={movie.rating}
  year={movie.year}
  runtime={movie.runtime}
  genres={movie.genres}
  watchUrl={movie.watchUrl}
  streamingProviders={movie.streamingProviders}
/>

          <div className="px-16 py-10 space-y-16">
  <MovieInfo
    runtime={movie.runtime}
    releaseDate={movie.releaseDate}
    originalLanguage={movie.originalLanguage}
    status={movie.status}
    budget={movie.budget}
    revenue={movie.revenue}
    productionCompanies={movie.productionCompanies}
  />

  <TrailerPlayer
    trailerKey={movie.trailerKey}
    backdrop={movie.backdrop}
    title={movie.title}
  />
</div>
<CastList
  cast={movie.cast}
/>
<SimilarMovies
  movies={movie.similar}
  onMovieClick={openMovie}
/>
          </>
        ) : (
          <div className="flex h-[80vh] items-center justify-center text-white">
            Failed to load movie.
          </div>
        )}
      </MovieModal>
    </>
  );
}