"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, x: 80, y: 40, size: 2, duration: 6, delay: 0.1, opacity: 0.4 },
  { id: 2, x: 120, y: 80, size: 3, duration: 7, delay: 0.4, opacity: 0.35 },
  { id: 3, x: 180, y: 20, size: 2, duration: 5, delay: 0.8, opacity: 0.3 },
  { id: 4, x: 250, y: 100, size: 4, duration: 8, delay: 0.3, opacity: 0.45 },
  { id: 5, x: 320, y: 50, size: 3, duration: 6, delay: 0.9, opacity: 0.4 },
  { id: 6, x: 390, y: 140, size: 2, duration: 7, delay: 0.2, opacity: 0.3 },
  { id: 7, x: 460, y: 70, size: 3, duration: 5, delay: 0.7, opacity: 0.5 },
  { id: 8, x: 530, y: 110, size: 2, duration: 6, delay: 0.6, opacity: 0.35 },
  { id: 9, x: 600, y: 30, size: 4, duration: 8, delay: 0.5, opacity: 0.45 },
  { id: 10, x: 700, y: 150, size: 3, duration: 7, delay: 0.4, opacity: 0.4 },
  { id: 11, x: 760, y: 60, size: 2, duration: 5, delay: 0.2, opacity: 0.3 },
  { id: 12, x: 820, y: 120, size: 3, duration: 6, delay: 0.9, opacity: 0.35 },
];

export default function DustParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <div
        className="absolute"
        style={{
          left: 270,
          top: 300,
          width: 900,
          height: 240,
          clipPath: "polygon(0 50%,100% 0,100% 100%)",
        }}
      >
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-[#FFD66B]"
            style={{
              width: particle.size,
              height: particle.size,
              filter: "blur(1px)",
            }}
            initial={{
              x: particle.x,
              y: particle.y,
              opacity: particle.opacity,
            }}
            animate={{
              x: particle.x + 60,
              y: particle.y + 20,
              opacity: [0, particle.opacity, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}