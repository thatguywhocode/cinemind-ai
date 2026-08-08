"use client";

import Navbar from "@/components/landing/Navbar";
import OpeningScene from "@/components/landing/OpeningScene";
import TrendingMovies from "@/components/landing/TrendingMovies";
import CinemaCurtains from "@/components/scene/CinemaCurtains";
import FilmGrain from "@/components/scene/FilmGrain";

export default function LandingScene() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#090a0d]">
      {/* Cinematic film grain */}
      <FilmGrain />

      {/* Opening theater curtains */}
      <CinemaCurtains />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 w-full">
        {/* Hero */}
        <section className="relative min-h-screen w-full">
          <OpeningScene />
        </section>

        {/* Trending movies */}
        <section className="relative w-full">
          <TrendingMovies />
        </section>
      </main>
    </div>
  );
}