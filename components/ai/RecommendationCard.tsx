"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Play,
  BookmarkPlus,
  Sparkles,
  Clock,
} from "lucide-react";

interface RecommendationCardProps {
  title: string;
  poster: string;
  rating: number;
  year: string;
  duration: string;
  genres: string[];
  reason: string;
    watchUrl?: string;
}

export default function RecommendationCard({
  title,
  poster,
  rating,
  year,
  duration,
  genres,
  reason,
    watchUrl,
}: RecommendationCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{ duration: 0.3 }}
      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_30px_rgba(0,0,0,.35)]
      "
    >
      <div className="grid md:grid-cols-[260px_1fr]">

        {/* Poster */}

        <div className="relative h-full">

          <Image
            src={poster}
            alt={title}
            width={260}
            height={390}
            className="h-full w-full object-cover"
          />

        </div>

        {/* Content */}

        <div className="flex flex-col p-8">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-3xl font-bold text-white">
                {title}
              </h2>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-zinc-400">

                <span>{year}</span>

                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {duration}
                </span>

                <span className="flex items-center gap-1 text-[#E8B44C]">
                  <Star
                    size={16}
                    className="fill-[#E8B44C]"
                  />
                  {rating.toFixed(1)}
                </span>

              </div>

            </div>

          </div>

          {/* Genres */}

          <div className="mt-6 flex flex-wrap gap-3">

            {genres.map((genre) => (
              <span
                key={genre}
                className="
                rounded-full
                bg-[#E8B44C]/10
                border
                border-[#E8B44C]/20
                px-4
                py-1.5
                text-sm
                text-[#F6D06F]
                "
              >
                {genre}
              </span>
            ))}

          </div>

          {/* AI Explanation */}

          <div
            className="
            mt-8
            rounded-2xl
            border
            border-[#E8B44C]/20
            bg-[#E8B44C]/5
            p-6
            "
          >

            <div className="mb-3 flex items-center gap-3">

              <Sparkles
                className="text-[#E8B44C]"
                size={22}
              />

              <h3 className="font-semibold text-[#F8D77B]">
                Why CineMind recommends this
              </h3>

            </div>

            <p className="leading-8 text-zinc-300">
              {reason}
            </p>

          </div>

          {/* Buttons */}

<div className="mt-auto flex gap-4 pt-8">

  {watchUrl && (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-2
        rounded-full
        bg-[#E8B44C]
        px-6
        py-3
        font-semibold
        text-black
        transition
        hover:scale-105
      "
    >
      <Play size={18} />
      Watch Now
    </a>
  )}

  <button
    className="
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/10
      bg-white/5
      px-6
      py-3
      text-white
      backdrop-blur-xl
      transition
      hover:border-[#E8B44C]
    "
  >
    <BookmarkPlus size={18} />
    Save
  </button>

</div>

        </div>

      </div>

    </motion.div>
  );
}