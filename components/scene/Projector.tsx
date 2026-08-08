"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Projector() {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 350], [0, -350]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      style={{
        x,
        opacity,
      }}
      className="
        absolute
        z-30

        /* Mobile */
        left-1/2
        bottom-[-20px]
        -translate-x-1/2

        /* Small phones */
        sm:bottom-[-30px]

        /* Tablet */
        md:left-[20px]
        md:bottom-[-20px]
        md:translate-x-0

        /* Desktop */
        lg:left-[20px]
        lg:bottom-[120px]

        /* Large desktop */
        xl:left-[40px]
        xl:bottom-[180px]
      "
    >
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          w-[250px]
          sm:w-[300px]
          md:w-[380px]
          lg:w-[500px]
          xl:w-[600px]
        "
      >
        <Image
          src="/projector.png"
          alt="Cinema Projector"
          width={650}
          height={650}
          priority
          draggable={false}
          className="
            h-auto
            w-full
            select-none
            object-contain
          "
        />
      </motion.div>
    </motion.div>
  );
}