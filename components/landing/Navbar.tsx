"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

import { useState } from "react";

const navItems = ["Home", "Movies", "AI Picks", "Watchlist", "About"];

function NavLink({ item }: { item: string }) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="#"
      onMouseEnter={() => {
        setHovered(true);

        controls.start({
          scaleX: 1,
          originX: 1, // Right -> Left
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        });
      }}
      onMouseLeave={async () => {
        setHovered(false);

        await controls.start({
          originX: 0, // switch origin
          transition: {
            duration: 0,
          },
        });

        controls.start({
          scaleX: 0,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        });
      }}
      className="
      relative
      py-2
      text-[15px]
      font-medium
      text-zinc-300
      transition-colors
      duration-300
      hover:text-white
      "
    >
      {item}

      <motion.span
        initial={{
          scaleX: 0,
          originX: 1,
        }}
        animate={controls}
        className="
        absolute
        -bottom-1
        left-0
        h-[2px]
        w-full
        rounded-full
        bg-[#E8B44C]
        "
      />
    </Link>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 120],
    [
      "rgba(5,6,8,0)",
      "rgba(8,9,12,.72)",
    ]
  );

  const border = useTransform(
    scrollY,
    [0, 120],
    [
      "rgba(255,255,255,0)",
      "rgba(255,255,255,.08)",
    ]
  );

  const backdropFilter = useTransform(
    scrollY,
    [0, 120],
    [
      "blur(0px)",
      "blur(18px)",
    ]
  );

  return (
    <motion.header
      style={{
        background,
        borderBottomColor: border,
        backdropFilter,
      }}
      className="
      fixed
      inset-x-0
      top-0
      z-50
      border-b
      "
    >
      <div className="mx-auto flex h-20 max-w-[1700px] items-center justify-between px-12">

        <Link
          href="/"
          className="
          font-marquee
          text-2xl
          tracking-[0.45rem]
          text-[#FFF7E6]
          "
        >
          CINEMIND
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-5">

          <button className="text-zinc-300 hover:text-[#E8B44C] transition">
            <Search size={22} />
          </button>

          <button className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-xl hover:border-[#E8B44C] transition">
            Sign In
          </button>

          <button className="rounded-full bg-[#E8B44C] px-7 py-2.5 font-semibold text-black hover:scale-105 transition">
            Sign Up
          </button>

        </div>

      </div>
    </motion.header>
  );
}