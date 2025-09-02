    import type { FC } from "react";

interface Category {
  title: string;
  description: string;
  data: string;
  features: string[];
}

const categories: Category[] = [
  {
    title: "11th & 12th preparing",
    description:
      "Comprehensive coaching for 11th & 12th students covering Physics, Chemistry, Mathematics/Biology along with school syllabus.",
    data: "",
    features: [
      "NCERT & Advanced Concepts",
      "Weekly Tests & Assignments",
      "Doubt Solving Sessions",
    ],
  },
  {
    title: "NEET preparing",
    description:
      "Focused preparation for competitive exams like NEET with expert faculty.",
    data: "",
    features: [
      "Mock Test Series",
      "Concept Strengthening Sessions",
      "24/7 Doubt Support",
    ],
  },
  {
    title: "JEE preparing",
    description:
      "Focused preparation for competitive exams like JEE with expert faculty.",
    data: "",
    features: [
      "Mock Test Series",
      "Concept Strengthening Sessions",
      "24/7 Doubt Support",
    ],
  },
  {
    title: "CET preparing",
    description:
      "Focused preparation for competitive exams like CET with expert faculty.",
    data: "",
    features: [
      "Mock Test Series",
      "Concept Strengthening Sessions",
      "24/7 Doubt Support",
    ],
  },
  {
    title: "State Board preparing",
    description:
      "Special coaching for State Board syllabus with emphasis on scoring high in board exams.",
    data: "",
    features: [
      "Chapter-wise Notes",
      "Previous Year Question Papers",
      "Weekly Practice Tests",
    ],
  },
  {
    title: "Diploma Polytechnic preparing",
    description:
      "Coaching for Diploma Polytechnic students with industry-oriented training and subject expertise.",
    data: "",
    features: [
      "Practical Oriented Learning",
      "Semester-wise Preparation",
      "Project Guidance",
    ],
  },
];

const CourseWithPricingSection: FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col justify-center items-center mb-5">
        <h1
          style={{ fontFamily: "InstrumentSerif" }}
          className="text-5xl md:text-8xl text-center"
        >
          Course Categories
        </h1>
        <h2 className="text-lg text-center max-w-xl mt-5 mb-5 text-gray-500 italic">
          New TakeUp is preparing students for 35+ Course categories. Scroll
          down to find the one you are preparing for.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map(({ title, description, data, features }) => (
          <div
            key={title}
            className="bg-white rounded-3xl p-2 border-2 border-dashed border-gray-300 flex flex-col justify-between"
          >
            <div>
              <div className="bg-[#F6F5F0] rounded-lg p-4 mb-4 w-full border-2 border-dashed border-gray-200">
                <p className="text-xl mb-2 font-bold">{title}</p>
                <span className="text-4xl font-extrabold">{data}</span>
              </div>

              <div className="p-3">
                <p className="text-gray-500 mb-6 h-[2cm] line-clamp-3">
                  {description}
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <button className="bg-[#101010] text-white rounded-2xl py-4 font-semibold transition w-full text-xl">
                  Enroll offline class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseWithPricingSection;
