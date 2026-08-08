"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

const dustParticles = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: 5 + ((i * 19) % 90),
  y: 25 + ((i * 31) % 50),
  size: i % 6 === 0 ? 2 : 1,
  duration: 3.5 + ((i * 7) % 25) / 10,
  delay: (i * 0.16) % 3,
}));

interface ProjectorProps {
  visible?: boolean;
}

export default function Projector({
  visible = true,
}: ProjectorProps) {
  const [isOn, setIsOn] = useState(true);

  const projecting = visible && isOn;

  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  const { scrollY } = useScroll();

  const scrollX = useTransform(
    scrollY,
    [0, 650],
    [0, -35]
  );

  const scrollYPosition = useTransform(
    scrollY,
    [0, 650],
    [0, -55]
  );

  const scale = useTransform(
    scrollY,
    [0, 650],
    [1, 0.88]
  );

  return (
    <motion.div
      className="
        pointer-events-none
        absolute
        inset-0
      "
      style={{
        x: scrollX,
        y: scrollYPosition,
        scale,
        transformOrigin: "left top",
      }}
    >
      {/* =====================================================
          PROJECTOR SCENE
      ===================================================== */}

      <motion.div
  className="
    absolute

    /* ================= MOBILE ================= */

    left-[-105px]
    top-[105px]
    h-[230px]
    w-[230px]

    max-[380px]:left-[-115px]
    max-[380px]:top-[105px]
    max-[380px]:h-[215px]
    max-[380px]:w-[215px]

    /* ================= TABLET ================= */

    sm:left-[-45px]
    sm:top-[55px]
    sm:h-[380px]
    sm:w-[380px]

    /* ================= DESKTOP ================= */

    md:left-0
    md:top-[100px]
    md:h-[500px]
    md:w-[500px]
  "
  animate={{
    x: visible ? 0 : -420,
    opacity: visible ? 1 : 0,
    y: [0, -2, 0],
  }}
  transition={{
    x: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
    opacity: {
      duration: 0.55,
      ease: "easeOut",
    },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
>
        {/* ===================================================
            PROJECTOR FLOAT
        =================================================== */}

        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* =================================================
              BEAM
          ================================================= */}

          {projecting && (
            <div
              className="
                pointer-events-none
                absolute

                /* ================= MOBILE ================= */

                left-[125px]
                top-[88px]
                h-[75px]
                w-[430px]

                max-[380px]:left-[115px]
                max-[380px]:top-[82px]
                max-[380px]:h-[70px]
                max-[380px]:w-[400px]

                /* ================= TABLET ================= */

                sm:left-[190px]
                sm:top-[135px]
                sm:h-[125px]
                sm:w-[750px]

                /* ================= DESKTOP ================= */

                md:left-[250px]
                md:top-[180px]
                md:h-[170px]
                md:w-[1050px]

                z-0
                overflow-hidden
              "
              style={{
                clipPath:
                  "polygon(0 47%, 100% 4%, 100% 96%, 0 53%)",

                background:
                  "linear-gradient(90deg, rgba(255,214,110,0.32) 0%, rgba(255,204,95,0.20) 25%, rgba(255,194,75,0.10) 60%, rgba(255,194,75,0.035) 85%, transparent 100%)",

                filter: "blur(1px)",
              }}
            >
              {/* =================================================
                  MOVING GRAIN
              ================================================= */}

              {dustParticles.map((particle) => (
                <motion.span
                  key={particle.id}
                  className="
                    absolute
                    rounded-full
                    bg-[#FFD66B]
                  "
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: particle.size,
                    height: particle.size,
                    boxShadow:
                      "0 0 5px rgba(255,214,107,0.65)",
                  }}
                  animate={{
                    x: [0, 30, 70],
                    y: [0, -3, 4],
                    opacity: [
                      0,
                      0.55,
                      0.3,
                      0,
                    ],
                    scale: [
                      0.6,
                      1,
                      0.8,
                    ],
                  }}
                  transition={{
                    duration: particle.duration,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              {/* =================================================
                  SOFT BEAM GLOW
              ================================================= */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                "
                animate={{
                  opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background:
                    "radial-gradient(ellipse at 0% 50%, rgba(255,220,130,0.18), transparent 65%)",
                  filter: "blur(15px)",
                }}
              />
            </div>
          )}

          {/* =================================================
              PROJECTOR RIM LIGHT
          ================================================= */}

          <motion.div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-[5]
              h-full
              w-full
            "
            animate={{
              opacity: projecting
                ? [0.35, 0.48, 0.35]
                : 0.12,
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/projector.png"
              alt=""
              width={500}
              height={500}
              draggable={false}
              aria-hidden="true"
              sizes="500px"
              className="
                h-full
                w-full
                object-contain
              "
              style={{
                filter:
                  "drop-shadow(0 0 5px rgba(255,215,120,0.55)) drop-shadow(0 0 14px rgba(255,195,80,0.22))",
              }}
            />
          </motion.div>

          {/* =================================================
              MAIN PROJECTOR
          ================================================= */}

          <div
            className="
              pointer-events-auto
              relative
              z-10
              h-full
              w-full
              cursor-pointer
              select-none
            "
            onClick={() =>
              setIsOn((previous) => !previous)
            }
            title={
              projecting
                ? "Turn projector off"
                : "Turn projector on"
            }
          >
            <Image
              src="/projector.png"
              alt="Vintage cinema projector"
              width={500}
              height={500}
              priority
              draggable={false}
              sizes="500px"
              className="
                h-full
                w-full
                select-none
                object-contain
              "
            />
          </div>

          {/* =================================================
              STATUS
          ================================================= */}

          <motion.div
            className="
              pointer-events-none
              absolute

              /* MOBILE */

              left-[105px]
              top-[255px]

              max-[380px]:left-[95px]
              max-[380px]:top-[245px]

              /* TABLET */

              sm:left-[250px]
              sm:top-[380px]

              /* DESKTOP */

              md:left-[325px]
              md:top-[500px]

              z-50
              flex
              items-center
              gap-2
              whitespace-nowrap
              rounded-full
              border
              border-white/10
              bg-black/70
              px-3
              py-1.5
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-zinc-400
              backdrop-blur-sm
            "
            animate={{
              opacity: visible ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}