import type { FC } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const newsScroll = [
  { news: "List of Selected Students for Yo",icon: "🚀"},
  { news: "1Pharmacy Council of India (PCI)", icon: "🎉" },
  { news: "2Pharmacy Council of India (PCI)", icon: "📰" },
  { news: "3Pharmacy Council of India (PCI)", icon: "🌟" },
  { news: "4Pharmacy Council of India (PCI)", icon: "⚡" },
];

const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-100%"], // scroll left continuously
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // adjust for speed
        ease: "linear",
      },
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const NewsMarqueeSection: FC = () => {
  return (
    <div className="group relative text-black overflow-hidden h-[3cm] border-b-2 border-white">
      <motion.div
        className="flex whitespace-nowrap space-x-10 will-change-transform"
        variants={marqueeVariants}
        animate="animate"
        whileHover={{ animationPlayState: "paused" }} // pause on hover
      >
        {[...newsScroll, ...newsScroll].map((item, index) => (
          <motion.span
            key={`${index}`}
            className="news-item text-7xl font-semibold flex items-center gap-2"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {item.icon} {item.news}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default NewsMarqueeSection;
