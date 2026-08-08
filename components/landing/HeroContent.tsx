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
        mx-auto
        flex
        w-full
        max-w-[850px]
        flex-col
        items-center
        text-center

        /* ================= MOBILE ================= */

        px-3
        pt-8
        pb-10

        /* ================= SMALL MOBILE ================= */

        min-[380px]:px-4

        /* ================= TABLET ================= */

        sm:pt-10

        /* ================= DESKTOP ================= */

        lg:ml-[44%]
        lg:mr-0
        lg:max-w-[850px]
        lg:items-start
        lg:text-left
        lg:px-0
        lg:pt-0
        lg:pb-0
      "
    >
      {/* ============================================================
          BRAND
      ============================================================ */}

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
          whitespace-nowrap
          leading-none
          text-[#FFF7E6]
          drop-shadow-[0_0_25px_rgba(232,180,76,.35)]

          /* MOBILE */

          text-[2.15rem]
          tracking-[0.12rem]

          min-[380px]:text-[2.45rem]

          /* TABLET */

          sm:text-[4rem]
          sm:tracking-[0.3rem]

          md:text-[4.5rem]

          /* DESKTOP */

          lg:text-[5rem]
          lg:tracking-[0.35rem]
pt-22
          xl:text-[6rem]
          xl:tracking-[0.4rem]
        "
      >
        C I N E M I N D
      </motion.h1>

     {/* ============================================================
    SUBTITLE
============================================================ */}

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
    mt-4
    flex
    w-full
    max-w-[340px]
    items-center
    gap-3

    min-[380px]:max-w-[360px]

    sm:mt-8
    sm:max-w-xl
    sm:gap-5

    lg:max-w-[700px]
    lg:gap-5
  "
>
  {/* Left dash */}
  <div className="h-px flex-1 bg-yellow-700/40" />

  <p
    className="
      whitespace-nowrap
      text-[7px]
      tracking-[0.22rem]
      text-zinc-400

      min-[380px]:text-[8px]
      min-[380px]:tracking-[0.28rem]

      sm:text-xs
      sm:tracking-[0.5rem]

      lg:text-xs
      lg:tracking-[0.5rem]
    "
  >
    AI MOVIE DISCOVERY
  </p>

  {/* Right dash */}
  <div className="h-px flex-1 bg-yellow-700/40" />
</motion.div>

      {/* ============================================================
          DESCRIPTION
      ============================================================ */}

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
          mt-5
          max-w-[340px]
          px-1
          text-sm
          leading-6
          text-zinc-400

          min-[380px]:max-w-[370px]
          min-[380px]:text-[15px]
lg:whitespace-nowrap
          sm:mt-8
          sm:max-w-lg
          sm:px-0
          sm:text-lg
          sm:leading-8
        "
      >
        Tell CineMind what you feel like watching. We'll find the movie that fits.
      </motion.p>

      {/* ============================================================
          SEARCH
      ============================================================ */}

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
  mt-6
  w-full
  max-w-[390px]

  min-[400px]:max-w-[380px]

  sm:mt-10
  sm:max-w-2xl
"
      >
        <MoodSearch
          onSearch={onSearch}
          loading={loading}
        />
      </motion.div>

      {/* ============================================================
          MOOD CHIPS
      ============================================================ */}

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
          mt-5
          flex
          w-full
          max-w-[370px]
          flex-wrap
          items-center
          justify-center
          gap-2

          min-[380px]:gap-2.5

          sm:mt-8
          sm:max-w-2xl
          sm:gap-3

          lg:justify-start
        "
      >
        {moods.map((mood) => (
          <button
            key={mood}
            type="button"
            onClick={() => onSearch(mood)}
            disabled={loading}
            className="
              rounded-full
              border
              border-yellow-700/20
              bg-[#101114]/80
              px-3
              py-2
              text-[11px]
              font-medium
              text-zinc-200
              backdrop-blur-md
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-yellow-500
              hover:bg-[#18191d]
              hover:shadow-[0_0_20px_rgba(232,180,76,.15)]

              disabled:cursor-not-allowed
              disabled:opacity-50

              min-[380px]:px-3.5
              min-[380px]:py-2.5
              min-[380px]:text-xs

              sm:px-5
              sm:py-3
              sm:text-sm
            "
          >
            {mood}
          </button>
        ))}
      </motion.div>

      {/* ============================================================
    SCROLL
============================================================ */}

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
    mt-8
    pb-2
    text-center

    min-[380px]:mt-8

    sm:mt-12

    lg:mt-5
    lg:w-full
  "
>
  <p
    className="
      text-[8px]
      tracking-[0.28rem]
      text-yellow-500

      sm:text-xs
      sm:tracking-[0.45rem]
    "
  >
    SCROLL TO EXPLORE
  </p>

  <div
    className="
      mt-2
      animate-bounce
      text-xl
      text-yellow-500

      sm:mt-3
      sm:text-3xl
    "
  >
    ↓
  </div>
</motion.div>
    </div>
  );
}