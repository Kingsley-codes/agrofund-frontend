import HeroSection from "@/components/hompage/HeroSection";
import TrustSection from "@/components/hompage/TrustSection";
import HowItWorks from "@/components/hompage/HowItWorks";
import FeaturedOpportunities from "@/components/hompage/FeaturedOpportunities";
import SuccessStories from "@/components/hompage/SuccessStories";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <FeaturedOpportunities />
      <SuccessStories />
    </>
  );
}
