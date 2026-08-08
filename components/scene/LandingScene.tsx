"use client";

import Navbar from "@/components/landing/Navbar";
import OpeningScene from "@/components/landing/OpeningScene";
import TrendingMovies from "@/components/landing/TrendingMovies";

export default function LandingScene() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#090A0D] text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full">
          <OpeningScene />
        </section>

        {/* Trending Section */}
        <section className="w-full">
          <TrendingMovies />
        </section>
      </main>
    </div>
  );
}