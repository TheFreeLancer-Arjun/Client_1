import type { FC } from "react";
import { motion } from "framer-motion";

/**
 * AboutSection Component
 * -----------------------
 * Displays the introduction of the coaching institute with a split layout:
 * - Left side: Heading and animated image (rotates slightly on hover).
 * - Right side: Subtitle and descriptive text about the institute.
 *
 * Features:
 * - Centralized `sectionContent` object for easy content updates.
 * - Framer Motion animation on the image for an engaging hover effect.
 * - Responsive two-column layout with styled typography.
 */
const AboutSection: FC = () => {
  // Centralized content configuration for the coaching institute
  const sectionContent = {
    left: {
      heading: "Established in 2021",
      image: {
        src: "https://content.jdmagicbox.com/v2/comp/varanasi/v4/0542px542.x542.230310174408.c5v4/catalogue/ekastra-academy-sampoornanand-nagar-colony-varanasi-tutorials-m1mfqdsp6g.jpg",
        alt: "Coaching center classroom",
      },
    },
    right: {
      subtitle: "WELCOME TO NEW TAKE UP COACHING INSTITUTE",
      descriptionMain:
        "Comprehensive coaching for 11th & 12th students covering Physics, Chemistry, Mathematics/Biology along with school syllabus.",
      descriptionSecondary:
        "We also provide expert preparation for NEET, JEE, CET, State Board, and Diploma Polytechnic exams, ensuring students excel academically and in competitive tests.",
    },
  };

  return (
    <div className="p-6">
      <div className="flex w-full justify-center items-start gap-10">
        {/* Left Section */}
        <div
          style={{ fontFamily: "InstrumentSerif" }}
          className="w-[40%] text-2xl flex flex-col gap-10"
        >
          <h1>
            <span className="text-4xl">
              {sectionContent.left.heading.charAt(0)}
            </span>
            {sectionContent.left.heading.slice(1)}
          </h1>
          <motion.img
            whileHover={{
              rotate: [0, -2, 2, -2, 2, 0],
              transition: { duration: 0.4 },
            }}
            className="w-[10cm] h-[7cm] rounded-2xl object-cover"
            src={sectionContent.left.image.src}
            alt={sectionContent.left.image.alt}
          />
        </div>

        {/* Right Section */}
        <div className="w-[60%] pr-10">
          <h1 className="italic text-gray-500 text-lg">
            {sectionContent.right.subtitle}
          </h1>
          <p className="mt-5 text-xl">
            <span className="font-semibold text-2xl">
              <span className="text-4xl uppercase">
                {sectionContent.right.descriptionMain.charAt(0)}
              </span>
              {sectionContent.right.descriptionMain.slice(1)}
            </span>{" "}
            <span className="text-gray-500 text-2xl">
              {sectionContent.right.descriptionSecondary}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
