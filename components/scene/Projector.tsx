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
      left-[50px]
      bottom-[220px]
      z-30
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
      >
        <Image
          src="/projector.png"
          alt="Cinema Projector"
          width={650}
          height={650}
          priority
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
}