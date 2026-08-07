"use client";

import { AnimatePresence, motion } from "framer-motion";

import Atmosphere from "@/components/scene/Atmosphere";
import Projector from "@/components/scene/Projector";
import dynamic from "next/dynamic";

const DustParticles = dynamic(
  () => import("@/components/scene/DustParticles"),
  {
    ssr: false,
  }
);
import ThinkingLoader from "@/components/ai/ThinkingLoader";
import RecommendationResults from "@/components/ai/RecommendationResults";

import HeroContent from "@/components/landing/HeroContent";

import { useRecommendation } from "@/hooks/useRecommendation";

export default function OpeningScene() {
  const {
    loading,
    result,
    search,
    clear,
  } = useRecommendation();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050608]">
      <Atmosphere />

      <div className="relative mx-auto flex min-h-screen max-w-[1700px]">

        {/* LEFT */}

        <div className="relative w-[35%]">
          <Projector />
          <DustParticles />
        </div>

        {/* RIGHT */}

        <div className="relative flex flex-1 items-center justify-center">

          <AnimatePresence mode="wait">

            {loading ? (

              <motion.div
                key="loading"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="flex w-full justify-center"
              >
                <ThinkingLoader />
              </motion.div>

            ) : result ? (

              <motion.div
                key="result"
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="w-full"
              >
                <RecommendationResults
                  result={result}
                  onReset={clear}
                />
              </motion.div>

            ) : (

              <motion.div
                key="hero"
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -60,
                }}
                transition={{
                  duration: 0.55,
                }}
              >
                <HeroContent
                  onSearch={search}
                  loading={loading}
                />
              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}