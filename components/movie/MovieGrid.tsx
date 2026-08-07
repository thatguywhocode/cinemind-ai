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
    <section className="px-8 py-16">

      {(title || showViewAll) && (
        <div className="mb-10 flex items-center justify-between">

          {title && (
            <h2 className="text-4xl font-bold text-white">
              {title}
            </h2>
          )}

          {showViewAll && (
            <button
              className="
                text-[#E8B44C]
                transition
                hover:translate-x-1
                hover:text-yellow-300
              "
            >
              View All →
            </button>
          )}

        </div>
      )}

      <motion.div
        layout
        className="
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
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
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
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