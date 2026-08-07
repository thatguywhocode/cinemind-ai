"use client";

import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-2">

      {[0, 1, 2].map((dot) => (
        <motion.div
          key={dot}
          animate={{
            y: [0, -8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            delay: dot * 0.2,
            duration: 0.8,
          }}
          className="
            h-3
            w-3
            rounded-full
            bg-[#E8B44C]
          "
        />
      ))}

    </div>
  );
}