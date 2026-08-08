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
    <div
      className="
        flex
        w-full
        flex-col
        items-center
        text-center
        lg:items-start
        lg:text-left
      "
    >
      {/* ================================================================ */}
      {/* BRAND                                                            */}
      {/* ================================================================ */}

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
          text-[2.8rem]
          leading-none
          tracking-[0.18rem]
          text-[#FFF7E6]
          drop-shadow-[0_0_25px_rgba(232,180,76,.35)]
          sm:text-[4rem]
          sm:tracking-[0.3rem]
          md:text-[4.5rem]
          lg:text-[5rem]
          lg:tracking-[0.35rem]
          xl:text-[6rem]
          xl:tracking-[0.4rem]
        "
      >
        C I N E M I N D
      </motion.h1>

      {/* ================================================================ */}
      {/* SUBTITLE                                                         */}
      {/* ================================================================ */}

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
        className="
          mt-6
          flex
          w-full
          max-w-xl
          items-center
          gap-3
          sm:mt-8
          sm:gap-5
        "
      >
        <div className="h-px flex-1 bg-yellow-700/40" />

        <p
          className="
            whitespace-nowrap
            text-[9px]
            tracking-[0.3rem]
            text-zinc-400
            sm:text-xs
            sm:tracking-[0.5rem]
          "
        >
          NOW SHOWING
        </p>

        <div className="h-px flex-1 bg-yellow-700/40" />
      </motion.div>

      {/* ================================================================ */}
      {/* HEADING                                                          */}
      {/* ================================================================ */}

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
          mt-10
          max-w-3xl
          text-4xl
          font-extrabold
          leading-[1.08]
          text-white
          sm:mt-12
          sm:text-5xl
          md:text-6xl
          lg:mt-14
        "
      >
        Find Your Next
        <br />
        Favorite Movie
      </motion.h2>

      {/* ================================================================ */}
      {/* DESCRIPTION                                                      */}
      {/* ================================================================ */}

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
          mt-6
          max-w-lg
          px-2
          text-base
          leading-7
          text-zinc-400
          sm:mt-8
          sm:px-0
          sm:text-lg
          sm:leading-8
        "
      >
        Discover films through emotion, not endless scrolling.
      </motion.p>

      {/* ================================================================ */}
      {/* SEARCH                                                           */}
      {/* ================================================================ */}

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
        className="
          mt-8
          w-full
          max-w-2xl
          sm:mt-10
        "
      >
        <MoodSearch
          onSearch={onSearch}
          loading={loading}
        />
      </motion.div>

      {/* ================================================================ */}
      {/* MOOD CHIPS                                                       */}
      {/* ================================================================ */}

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
        className="
          mt-6
          flex
          w-full
          max-w-2xl
          flex-wrap
          justify-center
          gap-2
          sm:mt-8
          sm:gap-3
          lg:justify-start
        "
      >
        {moods.map((mood) => (
          <button
            key={mood}
            type="button"
            className="
              rounded-full
              border
              border-yellow-700/20
              bg-[#101114]/80
              px-4
              py-2.5
              text-xs
              font-medium
              text-zinc-200
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-yellow-500
              hover:bg-[#18191d]
              hover:shadow-[0_0_20px_rgba(232,180,76,.15)]
              sm:px-5
              sm:py-3
              sm:text-sm
            "
          >
            {mood}
          </button>
        ))}
      </motion.div>

      {/* ================================================================ */}
      {/* SCROLL                                                           */}
      {/* ================================================================ */}

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
        className="
          mt-12
          pb-8
          text-center
          sm:mt-16
          lg:mt-20
        "
      >
        <p
          className="
            text-[9px]
            tracking-[0.3rem]
            text-yellow-500
            sm:text-xs
            sm:tracking-[0.45rem]
          "
        >
          SCROLL TO EXPLORE
        </p>

        <div className="mt-3 animate-bounce text-2xl text-yellow-500 sm:mt-4 sm:text-3xl">
          ↓
        </div>
      </motion.div>
    </div>
  );
}