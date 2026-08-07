"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/lib/utils";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  subtitle?: string;
  animated?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-2xl tracking-[0.45em]",
  md: "text-5xl tracking-[0.55em]",
  lg: "text-8xl tracking-[0.65em]",
};

export default function CineMindWordmark({
  subtitle,
  animated = false,
  size = "md",
  className,
}: Props) {
  const letters = "CINEMIND".split("");

  return (
    <div className={cn("text-center", className)}>
      <h1
        className={cn(
          bebas.className,
          "uppercase text-[#FFF8E6]",
          "drop-shadow-[0_0_18px_rgba(230,181,74,.25)]",
          sizes[size]
        )}
      >
        {letters.map((letter, index) =>
          animated ? (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.09,
                duration: 0.25,
              }}
            >
              {letter}
            </motion.span>
          ) : (
            <span key={index}>{letter}</span>
          )
        )}
      </h1>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-5 text-sm uppercase tracking-[0.45em] text-gray-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}