"use client";

import { motion } from "framer-motion";

interface FilmGrainProps {
  className?: string;
}

export default function FilmGrain({
  className = "",
}: FilmGrainProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Fine film grain */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 0.6px, transparent 0.6px)",
          backgroundSize: "4px 4px",
          mixBlendMode: "screen",
        }}
      />

      {/* Very subtle film flicker */}
      <motion.div
        className="absolute inset-0 bg-white/[0.015]"
        animate={{
          opacity: [0.01, 0.025, 0.012, 0.02, 0.01],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}