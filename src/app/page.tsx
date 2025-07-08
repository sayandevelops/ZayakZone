import { HeroSection } from "@/components/sections/hero-section";
import { MenuSection } from "@/components/sections/menu-section";
import { ReviewAnalysisSection } from "@/components/sections/review-analysis-section";
import { ReviewsSection } from "@/components/sections/reviews-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MenuSection />
      <ReviewsSection />
      <ReviewAnalysisSection />
    </>
  );
}
