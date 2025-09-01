import type { FC } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * HeroSection Component
 *
 * A visually impactful hero section for a school/academic website.
 *
 * Features:
 * - Animated heading with typing-like blur/scale effect.
 * - Highlighted word in the heading styled differently.
 * - Description with "snap from below" animation.
 * - Two CTA buttons linking to admission and about pages.
 *
 * Animations:
 * - Heading: Fade-in + scale + blur removal.
 * - Word-by-word animation with staggered delay.
 * - Description: Slide-up with blur-to-clear transition.
 * - CTA buttons: Slide-up with fade-in.
 *
 * Tech Stack:
 * - React (with TypeScript)
 * - Framer Motion for animations
 * - Tailwind CSS for styling
 */
const HeroSection: FC = () => {
  // Data for hero content
  const heroData = {
    trustBadge: "Trusted by 500+ Students & Parents",
    title: "Empowering Students For A Brighter Future",
    highlight: "Brighter Future",
    description:
      "Your journey to academic excellence begins here — with mentors who inspire and a system that delivers results for NEET, JEE, CAT, and State Board exams.",
    primaryBtn: { label: "Apply for Admission", link: "/admission" },
    secondaryBtn: { label: "About Us", link: "/about" },
  };

  // Split title into before-highlight, highlight, after-highlight
  const highlightIndex: number = heroData.title.indexOf(heroData.highlight);
  const beforeHighlight: string = heroData.title.slice(0, highlightIndex);
  const afterHighlight: string = heroData.title.slice(
    highlightIndex + heroData.highlight.length
  );

  // Typing effect for heading
  const headingVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  // Word-by-word typing animation
  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
  };

  // Description "snap from below" animation
  const descriptionVariant: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
    },
  };

  // Break title into words
  const titleWords: string[] =
    `${beforeHighlight}${heroData.highlight}${afterHighlight}`.split(" ");

  return (
    <section className="text-black text-center overflow-hidden">
      {/* Main Title */}
      <motion.h1
        style={{ fontFamily: "InstrumentSerif" }}
        className="text-8xl text-center max-w-5xl mx-auto flex flex-wrap justify-center"
        initial="hidden"
        animate="visible"
        variants={headingVariant}
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            className={
              word === heroData.highlight ? " text-[#E21E22] font-bold" : ""
            }
            variants={wordVariant}
            initial="hidden"
            animate="visible"
            custom={i}
            style={{ marginRight: "0.4em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto italic"
        variants={descriptionVariant}
        initial="hidden"
        animate="visible"
      >
        {heroData.description}
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex justify-center gap-4 mt-8 flex-wrap"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <Link
          to={heroData.primaryBtn.link}
          className=" bg-[#E21E22] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          {heroData.primaryBtn.label}
        </Link>
        <Link
          to={heroData.secondaryBtn.link}
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          {heroData.secondaryBtn.label}
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
