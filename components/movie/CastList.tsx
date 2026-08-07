"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile: string | null;
}

interface CastListProps {
  cast: CastMember[];
}

export default function CastList({
  cast,
}: CastListProps) {
  if (!cast.length) return null;

  return (
    <section className="mt-16">
      {/* Heading */}

      <h2 className="mb-8 text-3xl font-bold text-white">
        Top Cast
      </h2>

      {/* Cast */}

      <div
        className="
          flex
          gap-6
          overflow-x-auto
          pb-4
          scrollbar-hide
        "
      >
        {cast.map((actor, index) => (
          <motion.div
            key={actor.id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="
              min-w-[170px]
              rounded-3xl
              border
              border-white/10
              bg-[#111214]
              p-5
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-yellow-500/30
            "
          >
            {/* Photo */}

            <div
              className="
                relative
                mx-auto
                h-28
                w-28
                overflow-hidden
                rounded-full
              "
            >
              <Image
                src={actor.profile ?? "/placeholder-profile.jpg"}
                alt={actor.name}
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>

            {/* Name */}

            <h3
              className="
                mt-5
                text-center
                text-lg
                font-semibold
                text-white
              "
            >
              {actor.name}
            </h3>

            {/* Character */}

            <p
              className="
                mt-2
                text-center
                text-sm
                leading-6
                text-zinc-400
              "
            >
              {actor.character}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}