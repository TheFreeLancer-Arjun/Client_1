"use client";

import type { FC } from "react";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Card type
interface Card {
  title: string;
  count: string;
  description: string;
}

// Sample data
const cards: Card[] = [
  {
    title: "Students",
    count: "25,000+",
    description: "Across undergraduate and postgraduate levels",
  },
  {
    title: "Academic",
    count: "18,000+",
    description: "Students get placement at top companies",
  },
  {
    title: "Faculties",
    count: "500+",
    description: "Experienced professors and researchers",
  },
  {
    title: "Alumni",
    count: "40,000+",
    description: "Spread globally in top positions",
  },
];

const NewTakeupAtAGlanceSection: FC = () => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  const leftCard = cards[startIndex];
  const rightCard = cards[(startIndex + 1) % cards.length];

  return (
    <div className="flex w-full p-4">
      {/* Heading */}
      <div className="w-[40%]">
        <h1
          style={{ fontFamily: "InstrumentSerif" }}
          className="text-7xl w-[11cm] leading-snug"
        >
          <span className="text-8xl font-medium">N</span>ew Takeup{" "}
          <span className="text-gray-500">at a glance</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="w-[60%] flex justify-center items-center gap-5">
        {/* Left Card */}
        <div className="w-[50%] h-[10cm] bg-white rounded-2xl p-10 flex flex-col justify-between shadow">
          <h1 className="text-4xl border-b-4 border-[#F6F5F0] text-[#E21E22]">
            {leftCard.title}
          </h1>
          <div>
            <h1 className="text-6xl font-semibold">{leftCard.count}</h1>
            <h1 className="text-3xl text-gray-500 mt-5">
              {leftCard.description}
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[50%] flex flex-col justify-center items-center gap-4">
          {/* Right Card */}
          <div className="w-full h-[7.6cm] bg-white rounded-2xl p-10 flex flex-col justify-between shadow">
            <h1 className="text-4xl border-b-4 border-[#F6F5F0] text-[#E21E22]">
              {rightCard.title}
            </h1>
            <div>
              <h1 className="text-5xl font-semibold">{rightCard.count}</h1>
              <h1 className="text-2xl text-gray-500 mt-5">
                {rightCard.description}
              </h1>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="w-full h-[2cm] rounded-2xl">
            <div className="w-full flex h-full justify-start items-center gap-5 p-2">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-white rounded-2xl px-5 py-5  shadow"
              >
                <FaChevronLeft size={20} className="text-[#E21E22]" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#E21E22] rounded-2xl px-5 py-5 shadow"
              >
                <FaChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTakeupAtAGlanceSection;
