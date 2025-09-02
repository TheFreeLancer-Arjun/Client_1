import { useEffect, useState } from "react";
import type { FC } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";


const homePageSlider: string[] = [
  "/imagefrom coolage parma.svg",
  "https://www.shivajipharma.com/assets/img/banner/s-2.jpg",
  "https://www.shivajipharma.com/assets/img/banner/s-4.jpg",
  "https://www.shivajipharma.com/assets/img/banner/s-3.webp",
  "https://www.shivajipharma.com/assets/img/banner/s-1.jpg",
];

const slideText: string[] = [
  "Admissions Open 2025 – Join Shri Chhatrapati Shivaji College of Pharmacy and Shape Your Future in Healthcare.",
  "Accredited by PCI & Affiliated to DBATU – Excellence in Pharmaceutical Education Since Inception.",
  "Cutting-Edge Laboratories and Research Opportunities for Aspiring Pharmacists.",
  "Experienced Faculty, Industrial Exposure, and Skill-Based Learning to Empower Your Career.",
];

const CarouselSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? homePageSlider.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % homePageSlider.length);
  };

  // Animation variants
  const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8 } },
  };

  const textVariant: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div className="relative w-full p-4">
      <div className="relative h-screen overflow-hidden rounded-[40px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute top-0 left-0 w-full h-full"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <img
              src={homePageSlider[activeIndex]}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover rounded-[40px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[40px] flex flex-col justify-end p-20">
              <div className="w-full h-[5cm] flex">
                {/* Year */}
                <motion.div
                  className="w-[33%] flex justify-start items-start"
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span className="text-white mt-2 text-3xl">
                    {new Date().getFullYear()}
                  </span>
                </motion.div>

                {/* Slide Text */}
                <motion.div
                  className="w-[33%] flex justify-center items-start"
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="text-white text-xl md:text-2xl font-semibold max-w-2xl text-start">
                    {slideText[activeIndex]}
                  </p>
                </motion.div>

                {/* Navigation Buttons */}
                <motion.div
                  className="w-[33%] flex h-full justify-center items-start gap-5"
                  variants={textVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <button
                    type="button"
                    aria-label="Previous Slide"
                    className="bg-white rounded-2xl px-5 py-5"
                    onClick={goToPrevious}
                  >
                    <FaChevronLeft size={20} className="text-black" />
                  </button>

                  <button
                    type="button"
                    aria-label="Next Slide"
                    className="bg-[#E21E22] rounded-2xl px-5 py-5"
                    onClick={goToNext}
                  >
                    <FaChevronRight size={20} className="text-white text-lg" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CarouselSection;
