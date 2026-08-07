"use client";

import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

export interface SimilarMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: string;
}

interface SimilarMoviesProps {
  movies: SimilarMovie[];
  onMovieClick?: (id: number) => void;
}

export default function SimilarMovies({
  movies,
  onMovieClick,
}: SimilarMoviesProps) {
  if (movies.length === 0) return null;

  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          Similar Movies
        </h2>

        <p className="text-sm text-zinc-500">
          You may also enjoy
        </p>

      </div>

      {/* Movies */}

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          pb-6
          scrollbar-hide
        "
      >
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="min-w-[230px]"
          >
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              rating={movie.rating}
              year={movie.year}
              onClick={onMovieClick}
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}