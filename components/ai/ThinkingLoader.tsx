"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Film,
  Sparkles,
  Search,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    icon: Brain,
    text: "Understanding your mood...",
  },
  {
    icon: Search,
    text: "Searching TMDB database...",
  },
  {
    icon: Film,
    text: "Ranking the best movies...",
  },
  {
    icon: WandSparkles,
    text: "Generating personalized recommendations...",
  },
];

export default function ThinkingLoader() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[40px]
          border
          border-yellow-500/20
          bg-[#0D0F12]/80
          p-14
          backdrop-blur-2xl
        "
      >

        {/* Icon */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border
            border-yellow-500/20
            bg-yellow-500/10
          "
        >
          <Sparkles
            size={42}
            className="text-[#E8B44C]"
          />
        </motion.div>

        {/* Heading */}

        <motion.h2
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
            mt-8
            text-center
            text-4xl
            font-bold
            text-white
          "
        >
          CineMind is Thinking
        </motion.h2>

        <p
          className="
            mt-4
            text-center
            text-zinc-400
          "
        >
          Sit back while we understand your mood
          and curate the perfect cinematic experience.
        </p>

        {/* Progress */}

        <div
          className="
            mt-10
            h-2
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            initial={{
              width: "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-[#FFD86B]
              via-[#E8B44C]
              to-[#B8860B]
            "
          />
        </div>

        {/* Steps */}

        <div className="mt-12 space-y-6">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <motion.div
                key={step.text}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  x: 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-500/10
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#E8B44C]"
                  />
                </div>

                <p className="text-lg text-zinc-300">
                  {step.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </motion.div>

    </div>
  );
}