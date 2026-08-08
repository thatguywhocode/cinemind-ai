"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
} from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "#movies" },
  { label: "AI Picks", href: "#ai-picks" },
  { label: "Watchlist", href: "#watchlist" },
  { label: "About", href: "#about" },
];

function NavLink({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick?: () => void;
}) {
  const controls = useAnimation();

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => {
        controls.start({
          scaleX: 1,
          originX: 1,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        });
      }}
      onMouseLeave={async () => {
        await controls.start({
          originX: 0,
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
        text-sm
        font-medium
        text-zinc-300
        transition-colors
        duration-300
        hover:text-white
        sm:text-[15px]
      "
    >
      {label}

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 120],
    [
      "rgba(5,6,8,0.15)",
      "rgba(8,9,12,0.88)",
    ]
  );

  const border = useTransform(
    scrollY,
    [0, 120],
    [
      "rgba(255,255,255,0)",
      "rgba(255,255,255,0.08)",
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
    <>
      {/* ============================================================ */}
      {/* NAVBAR                                                        */}
      {/* ============================================================ */}

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
        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-[1700px]
            items-center
            justify-between
            px-4
            sm:px-6
            lg:h-[82px]
            lg:px-10
            xl:px-14
          "
        >
          {/* ======================================================== */}
          {/* LOGO                                                      */}
          {/* ======================================================== */}

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="
              shrink-0
              font-marquee
              text-[1.35rem]
              tracking-[0.25rem]
              text-[#FFF7E6]
              sm:text-2xl
              sm:tracking-[0.4rem]
            "
          >
            CINEMIND
          </Link>

          {/* ======================================================== */}
          {/* DESKTOP NAV                                               */}
          {/* ======================================================== */}

          <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))}
          </nav>

          {/* ======================================================== */}
          {/* DESKTOP ACTIONS                                           */}
          {/* ======================================================== */}

          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            {/* Search */}

            <button
              type="button"
              aria-label="Search"
              className="
                rounded-full
                p-2
                text-zinc-300
                transition
                hover:text-[#E8B44C]
              "
            >
              <Search size={21} />
            </button>

            {/* Sign In */}

            <button
              type="button"
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-5
                py-2.5
                text-sm
                text-white
                backdrop-blur-xl
                transition
                hover:border-[#E8B44C]
              "
            >
              Sign In
            </button>

            {/* Sign Up */}

            <button
              type="button"
              className="
                rounded-full
                bg-[#E8B44C]
                px-6
                py-2.5
                text-sm
                font-semibold
                text-black
                transition
                hover:scale-105
                hover:bg-[#FFD86B]
              "
            >
              Sign Up
            </button>
          </div>

          {/* ======================================================== */}
          {/* MOBILE ACTIONS                                            */}
          {/* ======================================================== */}

          <div className="flex items-center gap-1 lg:hidden">
            {/* Mobile Search */}

            <button
              type="button"
              aria-label="Search"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-zinc-300
                transition
                hover:text-[#E8B44C]
              "
            >
              <Search size={20} />
            </button>

            {/* Hamburger */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileOpen}
              onClick={() =>
                setMobileOpen((open) => !open)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                backdrop-blur-xl
                transition
                hover:border-[#E8B44C]
              "
            >
              {mobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ============================================================ */}
      {/* MOBILE MENU                                                   */}
      {/* ============================================================ */}

      <motion.div
        initial={false}
        animate={{
          opacity: mobileOpen ? 1 : 0,
          y: mobileOpen ? 0 : -15,
          pointerEvents: mobileOpen
            ? "auto"
            : "none",
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          fixed
          inset-x-3
          top-[82px]
          z-40
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-[#0D0E12]/95
          shadow-[0_20px_60px_rgba(0,0,0,.5)]
          backdrop-blur-2xl
          lg:hidden
        "
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={false}
              animate={{
                opacity: mobileOpen ? 1 : 0,
                x: mobileOpen ? 0 : -10,
              }}
              transition={{
                duration: 0.2,
                delay: mobileOpen
                  ? index * 0.04
                  : 0,
              }}
            >
              <Link
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="
                  block
                  rounded-xl
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  text-zinc-300
                  transition
                  hover:bg-white/5
                  hover:text-[#E8B44C]
                "
              >
                {item.label}
              </Link>
            </motion.div>
          ))}

          {/* Mobile divider */}

          <div className="my-2 h-px bg-white/10" />

          {/* Mobile authentication */}

          <div className="grid grid-cols-2 gap-3 p-1">
            <button
              type="button"
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:border-[#E8B44C]
              "
            >
              Sign In
            </button>

            <button
              type="button"
              className="
                rounded-xl
                bg-[#E8B44C]
                px-4
                py-3
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#FFD86B]
              "
            >
              Sign Up
            </button>
          </div>
        </nav>
      </motion.div>
    </>
  );
}