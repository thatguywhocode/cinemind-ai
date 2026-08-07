"use client";

import Image from "next/image";
import { Play, Heart, Star, Clock, Calendar } from "lucide-react";

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
    <section className="relative">
      {/* Backdrop */}

      <div className="relative h-[520px] w-full overflow-hidden">
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

        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-[#090A0D]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0D] via-[#090A0D]/40 to-transparent" />
      </div>

      {/* Content */}

      <div className="absolute inset-0 flex items-end px-16 pb-14">
        {/* Poster */}

        <div className="relative h-[360px] w-[240px] overflow-hidden rounded-3xl shadow-2xl">
          {poster && (
            <Image
              src={poster}
              alt={title}
              fill
              sizes="240px"
              className="object-cover"
            />
          )}
        </div>

        {/* Info */}

        <div className="ml-12 max-w-4xl">
          <h1 className="text-6xl font-black text-white">
            {title}
          </h1>

          {/* Meta */}

          <div className="mt-6 flex flex-wrap gap-6 text-zinc-300">
            <div className="flex items-center gap-2">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
              {rating.toFixed(1)}
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {year}
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} />
              {runtime} min
            </div>
          </div>

          {/* Genres */}

          <div className="mt-6 flex flex-wrap gap-3">
            {genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300"
              >
                {genre}
              </span>
            ))}
          </div>

          {/* Overview */}

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            {overview}
          </p>

          {/* AI Recommendation */}

          {recommendationReason && (
            <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
              <p className="font-semibold text-yellow-400">
                ✨ Why CineMind picked this
              </p>

              <p className="mt-3 leading-7 text-zinc-300">
                {recommendationReason}
              </p>
            </div>
          )}

          {/* Buttons */}

<div className="mt-10 flex flex-wrap items-center gap-5">

  {watchUrl ? (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-3
        rounded-full
        bg-[#E8B44C]
        px-8
        py-4
        font-semibold
        text-black
        transition-all
        duration-300
        hover:scale-105
      "
    >
      <Play size={20} />
      Watch Now
    </a>
  ) : (
    <button
      disabled
      className="
        rounded-full
        bg-zinc-700
        px-8
        py-4
        text-zinc-400
        cursor-not-allowed
      "
    >
      Not Streaming
    </button>
  )}

  <button
    className="
      flex
      items-center
      gap-3
      rounded-full
      border
      border-white/10
      bg-white/5
      px-8
      py-4
      transition-all
      duration-300
      hover:border-yellow-500
    "
  >
    <Heart size={20} />
    Save
  </button>
{streamingProviders.length > 0 && (

  <div className="mt-10">

    <p className="mb-4 text-sm uppercase tracking-wider text-zinc-400">
      Available On
    </p>

    <div className="flex flex-wrap gap-4">

      {streamingProviders.map((provider) => (

        <div
          key={provider.name}
          className="
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            backdrop-blur-xl
          "
        >

          <Image
            src={provider.logo}
            alt={provider.name}
            width={36}
            height={36}
            className="rounded-lg"
          />

          <span className="text-white">
            {provider.name}
          </span>

        </div>

      ))}

    </div>

  </div>

)}
</div>
        </div>
      </div>
    </section>
  );
}