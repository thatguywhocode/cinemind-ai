import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/landing/OpeningScene";
import TrendingMovies from "@/components/landing/TrendingMovies";
import FeatureCards from "@/components/landing/FeatureCards";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <TrendingMovies />
      <FeatureCards />
    </MainLayout>
  );
}