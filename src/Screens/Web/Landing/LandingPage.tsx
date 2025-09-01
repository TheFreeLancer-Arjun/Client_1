import type { FC } from "react";
import HeroSection from "./Sections/HeroSection";

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
    </div>
  );
};

export default LandingPage;
