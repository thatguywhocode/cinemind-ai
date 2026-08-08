"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

import Projector from "@/components/scene/Projector";
import ThinkingLoader from "@/components/ai/ThinkingLoader";
import RecommendationResults from "@/components/ai/RecommendationResults";
import HeroContent from "@/components/landing/HeroContent";

import { useRecommendation } from "@/hooks/useRecommendation";

const DustParticles = dynamic(
  () => import("@/components/scene/DustParticles"),
  {
    ssr: false,
  }
);

export default function OpeningScene() {
  const {
    loading,
    result,
    search,
    clear,
  } = useRecommendation();

  return (
    <section className="relative w-full overflow-hidden bg-[#090A0D]">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1700px]
          flex-col
          lg:flex-row
        "
      >
        {/* ================================================================ */}
        {/* PROJECTOR / LEFT SIDE                                           */}
        {/* ================================================================ */}

        <div
          className="
            relative
            h-[280px]
            w-full
            shrink-0
            sm:h-[340px]
            lg:h-auto
            lg:min-h-screen
            lg:w-[35%]
          "
        >
          <Projector />

          <DustParticles />
        </div>

        {/* ================================================================ */}
        {/* CONTENT / RIGHT SIDE                                             */}
        {/* ================================================================ */}

        <div
          className="
            relative
            flex
            min-h-[520px]
            w-full
            flex-1
            items-center
            justify-center
            px-4
            py-12
            sm:px-6
            sm:py-16
            lg:min-h-screen
            lg:px-8
            lg:py-20
            xl:px-12
          "
        >
          <AnimatePresence mode="wait">
            {/* ============================================================ */}
            {/* LOADING                                                      */}
            {/* ============================================================ */}

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
                className="
                  flex
                  w-full
                  max-w-2xl
                  justify-center
                "
              >
                <ThinkingLoader />
              </motion.div>
            ) : result ? (
              /* ============================================================ */
              /* RECOMMENDATIONS                                              */
              /* ============================================================ */

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
                className="w-full max-w-7xl"
              >
                <RecommendationResults
                  result={result}
                  onReset={clear}
                />
              </motion.div>
            ) : (
              /* ============================================================ */
              /* HERO                                                         */
              /* ============================================================ */

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
                className="
                  w-full
                  max-w-3xl
                "
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