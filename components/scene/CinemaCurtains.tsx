"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CinemaCurtains() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-[100]
        overflow-hidden
      "
    >
      {/* LEFT */}

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          delay: 1.1,
          duration: 2.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          absolute
          left-0
          top-0
          h-full
          w-[52%]
        "
      >
        <Curtain />
      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{
          delay: 1.1,
          duration: 2.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={() => {
          setTimeout(() => {
            setVisible(false);
          }, 500);
        }}
        className="
          absolute
          right-0
          top-0
          h-full
          w-[52%]
        "
      >
        <Curtain />
      </motion.div>
    </div>
  );
}

function Curtain() {
  return (
    <div
      className="h-full w-full"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            rgba(255,255,255,.025) 0px,
            rgba(0,0,0,.22) 18px,
            rgba(255,255,255,.02) 38px,
            rgba(0,0,0,.3) 55px
          ),
          linear-gradient(
            90deg,
            #080102,
            #300609 45%,
            #170304
          )
        `,
        boxShadow:
          "inset 0 0 80px rgba(0,0,0,.65)",
      }}
    />
  );
}