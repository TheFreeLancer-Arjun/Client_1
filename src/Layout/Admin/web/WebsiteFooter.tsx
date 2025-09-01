
import type { FC } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const WebsiteFooter: FC = () => {
  return (
    <footer className="bg-gradient-to-b bg-[#101010] text-white h-[95vh]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 p-20">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img
            src="/53840206_391503088067352_5898508892333146112_n.jpg"
            alt="Coaching Logo"
            className="h-24 w-24 object-contain rounded-3xl"
          />
        </div>

        {/* Center Link Groups */}
        <div className="flex flex-wrap justify-between flex-1 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3">Courses</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/jee">JEE Preparation</Link>
              </li>
              <li>
                <Link to="/neet">NEET Coaching</Link>
              </li>
              <li>
                <Link to="/cat">CAT Training</Link>
              </li>
              <li>
                <Link to="/state-board">State Board Classes</Link>
              </li>
              <li>
                <Link to="/polytechnic">Diploma Polytechnic</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/materials">Study Materials</Link>
              </li>
              <li>
                <Link to="/test-series">Test Series</Link>
              </li>
              <li>
                <Link to="/previous-papers">Previous Year Papers</Link>
              </li>
              <li>
                <Link to="/exam-calendar">Exam Calendar</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Admissions</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/apply">Apply Online</Link>
              </li>
              <li>
                <Link to="/fees">Fee Structure</Link>
              </li>
              <li>
                <Link to="/scholarships">Scholarships</Link>
              </li>
              <li>
                <Link to="/batch-timings">Batch Timings</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faculty">Faculty</Link>
              </li>
              <li>
                <Link to="/student-portal">Student Portal</Link>
              </li>
              <li>
                <Link to="/events">Events & Seminars</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div>
        <div className="flex items-end justify-center gap-2 text-gray-400 pl-20 pr-20">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[33%] bg-[#181A1D] h-[2cm] rounded-full flex justify-center items-center hover:text-blue-500"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[33%] bg-[#181A1D] h-[2cm] rounded-full flex justify-center items-center hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[33%] bg-[#181A1D] h-[2cm] rounded-full flex justify-center items-center hover:text-red-600"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Giant Brand Text */}
      <div className="mt-10 w-full text-[310px] leading-none font-bold text-center bg-gradient-to-b from-white to-[#101010] text-transparent bg-clip-text uppercase">
        <h1 style={{ fontFamily: "InstrumentSerif" }}>New Takeup</h1>
      </div>
    </footer>
  );
};

export default WebsiteFooter;
