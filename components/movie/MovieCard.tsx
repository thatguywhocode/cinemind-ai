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
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      onClick={() => onClick?.(id)}
      className="
        group
        relative
        w-full
        min-w-0
        cursor-pointer
        overflow-hidden
        rounded-xl
        bg-[#101114]
        sm:rounded-2xl
      "
    >
      {/* ============================================================ */}
      {/* POSTER                                                       */}
      {/* ============================================================ */}

      {poster ? (
        <Image
          src={poster}
          alt={title}
          width={400}
          height={600}
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 33vw,
            (max-width: 1280px) 25vw,
            20vw
          "
          className="
            aspect-[2/3]
            h-auto
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
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
            text-xs
            text-zinc-500
            sm:text-sm
          "
        >
          No Poster
        </div>
      )}

      {/* ============================================================ */}
      {/* GRADIENT                                                      */}
      {/* ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
          opacity-90
        "
      />

      {/* ============================================================ */}
      {/* RATING                                                        */}
      {/* ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          right-2
          top-2
          sm:right-3
          sm:top-3
          md:right-4
          md:top-4
        "
      >
        <RatingBadge rating={rating} />
      </div>

      {/* ============================================================ */}
      {/* MOVIE INFORMATION                                             */}
      {/* ============================================================ */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          w-full
          p-3
          sm:p-4
          md:p-5
        "
      >
        <h3
          className="
            line-clamp-2
            text-sm
            font-bold
            leading-tight
            text-white
            sm:text-base
            md:text-xl
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1
            text-[11px]
            text-zinc-300
            sm:mt-2
            sm:text-sm
          "
        >
          {year}
        </p>
      </div>
    </motion.div>
  );
}