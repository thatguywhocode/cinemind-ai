"use client";

import { motion } from "framer-motion";
import MoodSearch from "./MoodSearch";

interface HeroContentProps {
  onSearch: (prompt: string) => void;
  loading: boolean;
}

const moods = [
  "😊 Feel Good",
  "🚀 Sci-Fi",
  "❤️ Romance",
  "👻 Horror",
  "🎬 Classic",
];

export default function HeroContent({
  onSearch,
  loading,
}: HeroContentProps) {
  return (
    <div className="ml-28 w-full max-w-[750px] pt-32">

      {/* Brand */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          font-marquee
          text-[5rem]
          xl:text-[6rem]
          leading-none
          tracking-[0.4rem]
          text-[#FFF7E6]
          drop-shadow-[0_0_25px_rgba(232,180,76,.35)]
        "
      >
        C I N E M I N D
      </motion.h1>

      {/* Subtitle */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        className="mt-8 flex items-center gap-6"
      >
        <div className="h-px flex-1 bg-yellow-700/40" />

        <p className="whitespace-nowrap text-xs tracking-[0.6rem] text-zinc-400">
          NOW SHOWING
        </p>

        <div className="h-px flex-1 bg-yellow-700/40" />
      </motion.div>

      {/* Heading */}

      <motion.h2
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.35,
        }}
        className="
          mt-14
          text-6xl
          font-extrabold
          leading-tight
          text-white
        "
      >
        Find Your Next
        <br />
        Favorite Movie
      </motion.h2>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.45,
        }}
        className="
          mt-8
          max-w-xl
          text-lg
          leading-8
          text-zinc-400
        "
      >
        Discover films through emotion, not endless scrolling.
      </motion.p>

      {/* Search */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.55,
        }}
        className="mt-10"
      >
        <MoodSearch
          onSearch={onSearch}
          loading={loading}
        />
      </motion.div>

      {/* Mood Chips */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.7,
        }}
        className="mt-8 flex flex-wrap gap-4"
      >
        {moods.map((mood) => (
          <button
            key={mood}
            className="
              rounded-full
              border
              border-yellow-700/20
              bg-[#101114]/80
              px-6
              py-3
              text-sm
              font-medium
              text-zinc-200
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-yellow-500
              hover:bg-[#18191d]
              hover:shadow-[0_0_20px_rgba(232,180,76,.15)]
            "
          >
            {mood}
          </button>
        ))}
      </motion.div>

      {/* Scroll */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.9,
        }}
        className="mt-20 text-center"
      >
        <p className="text-xs tracking-[0.45rem] text-yellow-500">
          SCROLL TO EXPLORE
        </p>

        <div className="mt-4 animate-bounce text-3xl text-yellow-500">
          ↓
        </div>
      </motion.div>

    </div>
  );
}