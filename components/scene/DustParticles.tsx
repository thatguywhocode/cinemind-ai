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
      {/* ================================================================ */}
      {/* DESKTOP PARTICLE BEAM                                            */}
      {/* ================================================================ */}

      <div
        className="
          absolute
          left-[180px]
          top-[240px]
          hidden
          h-[240px]
          w-[750px]
          lg:block
          xl:left-[270px]
          xl:top-[300px]
          xl:h-[240px]
          xl:w-[900px]
        "
        style={{
          clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
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

      {/* ================================================================ */}
      {/* MOBILE PARTICLES                                                 */}
      {/* ================================================================ */}

      <div
        className="
          absolute
          left-1/2
          top-[80px]
          block
          h-[180px]
          w-[320px]
          -translate-x-1/2
          sm:top-[100px]
          sm:h-[200px]
          sm:w-[420px]
          lg:hidden
        "
        style={{
          clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
        }}
      >
        {particles.slice(0, 8).map((particle, index) => {
          const mobileX = (particle.x / 820) * 320;
          const mobileY = (particle.y / 160) * 180;

          return (
            <motion.span
              key={particle.id}
              className="absolute rounded-full bg-[#FFD66B]"
              style={{
                width: Math.max(1.5, particle.size * 0.8),
                height: Math.max(1.5, particle.size * 0.8),
                filter: "blur(1px)",
              }}
              initial={{
                x: mobileX,
                y: mobileY,
                opacity: particle.opacity,
              }}
              animate={{
                x: mobileX + 30,
                y: mobileY + 12,
                opacity: [0, particle.opacity, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay + index * 0.05,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}