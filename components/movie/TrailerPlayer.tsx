"use client";

import { Play, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface TrailerPlayerProps {
  trailerKey?: string;
  backdrop: string;
  title: string;
}

export default function TrailerPlayer({
  trailerKey,
  backdrop,
  title,
}: TrailerPlayerProps) {
  if (!trailerKey) {
    return (
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Trailer
        </h2>

        <div
          className="
            flex
            h-[380px]
            items-center
            justify-center
            rounded-3xl
            border
            border-white/10
            bg-[#111214]
            text-zinc-500
          "
        >
          Trailer not available.
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          Official Trailer
        </h2>

        <a
          href={`https://www.youtube.com/watch?v=${trailerKey}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-2
            text-yellow-400
            transition
            hover:text-yellow-300
          "
        >
          Open on YouTube

          <ExternalLink size={18} />
        </a>

      </div>

      <motion.div
        whileHover={{
          scale: 1.01,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          overflow-hidden
          rounded-3xl
          border
          border-yellow-500/10
          shadow-2xl
        "
      >

        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </motion.div>

    </section>
  );
}