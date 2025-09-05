import type { FC } from "react";
import HeroSection from "./Sections/HeroSection";
import NewsMarqueeSection from "./Sections/NewsMarqueeSection";
import CarouselSection from "./Sections/CarouselSection";
import CourseWithPricingSection from "./Sections/CourseWithPricingSection";
import SuccessStoriesSection from "./Sections/SuccessStoriesSection";
import AboutSection from "./Sections/AboutSection";
import NewTakeupAtAGlanceSection from "./Sections/NewTakeupAtAGlanceSection";

/**
 * LandingPage Component
 *
 * Wraps the main landing page sections of the website.
 * Currently includes:
 * - HeroSection (animated title, description, CTAs)
 *
 * @returns {JSX.Element} Landing page component
 */
const LandingPage: FC = () => {
  return (
    <div className="bg-[#F6F5F0]">
      <HeroSection />
      <CarouselSection />
      <NewsMarqueeSection />
      <CourseWithPricingSection/>
      <SuccessStoriesSection/>
      <AboutSection/>
      <NewTakeupAtAGlanceSection/>
    </div>
  );
};

export default LandingPage;
