"use client";

import Image from "next/image";
import {
  Heart,
  Star,
  Clock,
  Calendar,
  Play,
} from "lucide-react";

interface MovieHeroProps {
  id: number;
  title: string;
  overview: string;
  backdrop: string;
  poster: string;
  rating: number;
  year: string;
  runtime: number;
  genres: string[];
  recommendationReason?: string;
  watchUrl?: string;

  streamingProviders: {
    name: string;
    logo: string;
  }[];
}

export default function MovieHero({
  id,
  title,
  overview,
  backdrop,
  poster,
  rating,
  year,
  runtime,
  genres,
  recommendationReason,
  watchUrl,
  streamingProviders,
}: MovieHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#090A0D]">
      {/* ============================================================ */}
      {/* BACKDROP                                                      */}
      {/* ============================================================ */}

      <div
        className="
          relative
          h-[520px]
          w-full
          sm:h-[580px]
          lg:h-[650px]
        "
      >
        {backdrop && (
          <Image
            src={backdrop}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}

        {/* Bottom gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#090A0D]
            via-[#090A0D]/50
            to-transparent
          "
        />

        {/* Left gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#090A0D]
            via-[#090A0D]/30
            to-transparent
          "
        />

        {/* Mobile dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-black/20
            sm:bg-transparent
          "
        />
      </div>

      {/* ============================================================ */}
      {/* CONTENT                                                       */}
      {/* ============================================================ */}

      <div
        className="
          relative
          z-10
          -mt-[300px]
          px-4
          pb-8
          sm:-mt-[320px]
          sm:px-8
          sm:pb-10
          lg:-mt-[370px]
          lg:px-16
          lg:pb-14
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1700px]
            flex-col
            lg:flex-row
            lg:items-end
          "
        >
          {/* ======================================================== */}
          {/* POSTER                                                     */}
          {/* ======================================================== */}

          <div
            className="
              relative
              mx-auto
              h-[260px]
              w-[175px]
              shrink-0
              overflow-hidden
              rounded-2xl
              bg-[#111214]
              shadow-2xl
              sm:h-[330px]
              sm:w-[220px]
              sm:rounded-3xl
              lg:mx-0
              lg:h-[360px]
              lg:w-[240px]
            "
          >
            {poster ? (
              <Image
                src={poster}
                alt={title}
                fill
                sizes="
                  (max-width: 640px) 175px,
                  (max-width: 1024px) 220px,
                  240px
                "
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-zinc-500">
                No Poster
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* INFO                                                       */}
          {/* ======================================================== */}

          <div
            className="
              mt-6
              min-w-0
              w-full
              lg:ml-10
              lg:mt-0
              lg:max-w-4xl
              xl:ml-12
            "
          >
            {/* Title */}

            <h1
              className="
                break-words
                text-3xl
                font-black
                leading-tight
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              {title}
            </h1>

            {/* ====================================================== */}
            {/* META                                                     */}
            {/* ====================================================== */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                gap-x-4
                gap-y-2
                text-sm
                text-zinc-300
                sm:mt-6
                sm:gap-6
                sm:text-base
              "
            >
              {/* Rating */}

              <div className="flex items-center gap-2">
                <Star
                  size={17}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span>
                  {rating.toFixed(1)}
                </span>
              </div>

              {/* Year */}

              <div className="flex items-center gap-2">
                <Calendar size={17} />

                <span>{year}</span>
              </div>

              {/* Runtime */}

              <div className="flex items-center gap-2">
                <Clock size={17} />

                <span>
                  {runtime
                    ? `${runtime} min`
                    : "N/A"}
                </span>
              </div>
            </div>

            {/* ====================================================== */}
            {/* GENRES                                                    */}
            {/* ====================================================== */}

            {genres.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                {genres.map((genre) => (
                  <span
                    key={genre}
                    className="
                      rounded-full
                      border
                      border-yellow-500/20
                      bg-yellow-500/10
                      px-3
                      py-1.5
                      text-xs
                      text-yellow-300
                      sm:px-4
                      sm:py-2
                      sm:text-sm
                    "
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {/* ====================================================== */}
            {/* OVERVIEW                                                  */}
            {/* ====================================================== */}

            {overview && (
              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-6
                  text-zinc-300
                  sm:mt-8
                  sm:text-base
                  sm:leading-7
                  lg:text-lg
                  lg:leading-8
                "
              >
                {overview}
              </p>
            )}

            {/* ====================================================== */}
            {/* AI RECOMMENDATION                                        */}
            {/* ====================================================== */}

            {recommendationReason && (
              <div
                className="
                  mt-5
                  max-w-3xl
                  rounded-2xl
                  border
                  border-yellow-500/20
                  bg-yellow-500/5
                  p-4
                  sm:mt-8
                  sm:p-5
                "
              >
                <p className="text-sm font-semibold text-yellow-400 sm:text-base">
                  ✨ Why CineMind picked this
                </p>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-zinc-300
                    sm:mt-3
                    sm:leading-7
                  "
                >
                  {recommendationReason}
                </p>
              </div>
            )}

            {/* ====================================================== */}
            {/* BUTTONS                                                   */}
            {/* ====================================================== */}

            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3
                sm:mt-8
                sm:flex-row
                sm:flex-wrap
                sm:gap-4
              "
            >
              {/* Watch Now */}

              {watchUrl ? (
                <a
                  href={watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#E8B44C]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:bg-[#FFD86B]
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                  "
                >
                  <Play
                    size={18}
                    className="fill-black"
                  />

                  Watch Now
                </a>
              ) : (
                <div
                  className="
                    flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3
                    text-sm
                    text-zinc-400
                    sm:w-auto
                    sm:px-8
                    sm:py-4
                  "
                >
                  <Play size={18} />

                  Not Streaming
                </div>
              )}

              {/* Save */}

              <button
                type="button"
                className="
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-yellow-500
                  sm:w-auto
                  sm:px-8
                  sm:py-4
                "
              >
                <Heart size={18} />

                Save
              </button>
            </div>

            {/* ====================================================== */}
            {/* STREAMING PROVIDERS                                      */}
            {/* ====================================================== */}

            {streamingProviders.length > 0 && (
              <div className="mt-7 sm:mt-9">
                <p
                  className="
                    mb-3
                    text-xs
                    uppercase
                    tracking-wider
                    text-zinc-400
                    sm:mb-4
                  "
                >
                  Available On
                </p>

                <div className="flex max-w-full flex-wrap gap-2 sm:gap-4">
                  {streamingProviders.map(
                    (provider) => (
                      <div
                        key={provider.name}
                        className="
                          flex
                          min-w-0
                          max-w-full
                          items-center
                          gap-2
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-2
                          backdrop-blur-xl
                          sm:gap-3
                          sm:rounded-2xl
                          sm:px-4
                          sm:py-3
                        "
                      >
                        {provider.logo && (
                          <Image
                            src={provider.logo}
                            alt={provider.name}
                            width={32}
                            height={32}
                            className="
                              h-7
                              w-7
                              shrink-0
                              rounded-lg
                              object-cover
                              sm:h-9
                              sm:w-9
                            "
                          />
                        )}

                        <span
                          className="
                            max-w-[140px]
                            truncate
                            text-xs
                            text-white
                            sm:max-w-[200px]
                            sm:text-sm
                          "
                        >
                          {provider.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}