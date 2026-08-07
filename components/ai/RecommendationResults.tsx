"use client";

import { motion } from "framer-motion";
import RecommendationCard from "./RecommendationCard";
import type { RecommendationResponse } from "@/types/recommendation";

interface RecommendationResultsProps {
  result: RecommendationResponse;
  onReset: () => void;
}

export default function RecommendationResults({
  result,
  onReset,
}: RecommendationResultsProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl px-12 py-24"
    >
      {/* Header */}

      <div className="mb-14 flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-bold text-white">
            Recommended For You
          </h1>

          <p className="mt-4 text-lg text-zinc-400">
            Based on your mood:
            <span className="ml-2 capitalize text-[#E8B44C]">
              {result.mood.mood}
            </span>
          </p>

        </div>

        <button
          onClick={onReset}
          className="
            rounded-full
            border
            border-yellow-500/20
            px-6
            py-3
            text-[#E8B44C]
            transition-all
            duration-300
            hover:border-yellow-500
            hover:bg-yellow-500/10
          "
        >
          ← New Search
        </button>

      </div>

      {/* Recommendation Cards */}

      <div className="space-y-10">

        {result.recommendations.map((movie, index) => (

          <motion.div
            key={movie.id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.45,
            }}
          >

         <RecommendationCard
  title={movie.title}
  poster={movie.poster}
  rating={movie.rating}
  year={movie.year}
  duration="2h 10m"
  genres={movie.genres}
  reason={movie.reason}
  watchUrl={`https://www.themoviedb.org/movie/${movie.id}/watch`}
/>
          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}