"use client";

import { motion } from "framer-motion";

export default function Atmosphere() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-[#050608]" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.18, 0.12],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,180,76,.08) 0%, rgba(232,180,76,.02) 40%, transparent 75%)",
          filter: "blur(80px)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, rgba(0,0,0,.75) 100%)",
        }}
      />
    </>
  );
}