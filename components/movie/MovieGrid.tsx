"use client";

import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  year: string;
  genres?: string[];
}

interface MovieGridProps {
  title?: string;
  movies: Movie[];
  showViewAll?: boolean;
  onMovieClick?: (id: number) => void;
}

export default function MovieGrid({
  title,
  movies,
  showViewAll = false,
  onMovieClick,
}: MovieGridProps) {
  return (
    <section className="w-full min-w-0">
      {/* ================================================================ */}
      {/* HEADER                                                           */}
      {/* ================================================================ */}

      {(title || showViewAll) && (
        <div
          className="
            mb-7
            flex
            items-end
            justify-between
            gap-4
            sm:mb-10
          "
        >
          {title && (
            <h2
              className="
                min-w-0
                text-2xl
                font-bold
                leading-tight
                text-white
                sm:text-3xl
                md:text-4xl
              "
            >
              {title}
            </h2>
          )}

          {showViewAll && (
            <button
              type="button"
              className="
                shrink-0
                text-xs
                font-medium
                text-[#E8B44C]
                transition
                hover:translate-x-1
                hover:text-yellow-300
                sm:text-sm
              "
            >
              View All →
            </button>
          )}
        </div>
      )}

      {/* ================================================================ */}
      {/* MOVIE GRID                                                       */}
      {/* ================================================================ */}

      <motion.div
        layout
        className="
          grid
          w-full
          min-w-0
          grid-cols-2
          gap-x-3
          gap-y-6
          sm:gap-5
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:gap-7
        "
      >
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            layout
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "0px 0px -50px 0px",
            }}
            transition={{
              duration: 0.45,
              delay: Math.min(index * 0.06, 0.3),
            }}
            className="min-w-0"
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
      </motion.div>
    </section>
  );
}