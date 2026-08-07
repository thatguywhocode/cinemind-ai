"use client";

import Navbar from "@/components/landing/Navbar";
import OpeningScene from "@/components/landing/OpeningScene";
import TrendingMovies from "@/components/landing/TrendingMovies";

export default function LandingScene() {
  return (
    <main className="bg-[#050608] text-white overflow-x-hidden">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero */}
      <OpeningScene />

      {/* Next Section */}
      <TrendingMovies />

    </main>
  );
}