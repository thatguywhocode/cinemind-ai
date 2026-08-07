"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RatingBadge from "./RatingBadge";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string | null;
  rating: number;
  year: string;
  genres?: string[];
  onClick?: (id: number) => void;
}

export default function MovieCard({
  id,
  title,
  poster,
  rating,
  year,
  onClick,
}: MovieCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={() => onClick?.(id)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-3xl">
        {/* Poster */}

        {poster ? (
          <Image
            src={poster}
            alt={title}
            width={400}
            height={600}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
            className="
              aspect-[2/3]
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <div
            className="
              flex
              aspect-[2/3]
              w-full
              items-center
              justify-center
              bg-zinc-900
              text-zinc-500
            "
          >
            No Poster
          </div>
        )}

        {/* Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
            opacity-90
          "
        />

        {/* Rating */}

        <div className="absolute right-4 top-4">
          <RatingBadge rating={rating} />
        </div>

        {/* Movie Info */}

        <div className="absolute bottom-0 w-full p-5">
          <h3 className="line-clamp-2 text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-zinc-300">
            {year}
          </p>
        </div>
      </div>
    </motion.div>
  );
}