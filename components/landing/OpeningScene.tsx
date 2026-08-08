"use client";

import { AnimatePresence, motion } from "framer-motion";

import Atmosphere from "@/components/scene/Atmosphere";
import Projector from "@/components/scene/Projector";
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
    <>
      <Atmosphere />

      {/* PROJECTOR */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <Projector visible={!loading && !result} />
      </div>

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-30
          flex
          min-h-[calc(100svh-72px)]
          w-full
          items-center
          justify-center
          px-4
          py-12
          sm:px-6
          sm:py-16
          md:px-10
          md:py-20
          lg:px-14
          xl:px-20
        "
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45 }}
              className="flex w-full items-center justify-center"
            >
              <ThinkingLoader />
            </motion.div>
          ) : result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
              className="w-full max-w-[1400px]"
            >
              <RecommendationResults
                result={result}
                onReset={clear}
              />
            </motion.div>
          ) : (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="w-full min-w-0 max-w-[1400px]"
            >
              <HeroContent
                onSearch={search}
                loading={loading}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}