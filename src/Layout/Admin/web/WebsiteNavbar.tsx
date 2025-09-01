import React, { useState, type FC } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import type { RouteItem } from "./WebsiteRoutes";

interface WebsiteNavbarProps {
  routes: RouteItem[];
}

/**
 * Renders the main website navigation bar with desktop and mobile menus.
 *
 * Features:
 * - Displays logo, routes, and submenus.
 * - Highlights active route based on the current location.
 * - Includes search input and login button.
 * - Mobile-friendly hamburger menu with toggleable submenus.
 *
 * @param {WebsiteNavbarProps} props - The props containing route definitions.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const WebsiteNavbar: FC<WebsiteNavbarProps> = ({ routes }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const location = useLocation();

  // Use startsWith to match nested routes
  const isActive = (path: string): boolean => location.pathname.startsWith(path);

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const toggleSubmenu = (index: number): void =>
    setActiveSubmenu(activeSubmenu === index ? null : index);

  return (
    <nav className="bg-[#F6F5F0] h-[2.5cm]">
      <div className="p-4 flex justify-between items-center">
        {/* Logo & Desktop Menu */}
        <div className="flex justify-center items-center gap-20">
          <div className="w-[5cm] h-[1.3cm] text-[#E21E22] rounded-xl flex justify-center items-center text-xl gap-2">
            <img
              className="h-full object-contain rounded-full"
              src="/53840206_391503088067352_5898508892333146112_n.jpg"
              alt="Takeup Science Institute Logo"
            />
            <h1 className="uppercase">
              takeup
              <h1 className="text-[14px]">science institute</h1>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-baseline space-x-4 justify-center border-[3px] rounded-xl border-white">
            {routes.map((route, index) => (
              <div
                key={index}
                className="cursor-pointer text-black px-4 py-3 text-sm font-medium border-r-2 relative group border-white"
              >
                <h1 className="flex items-center gap-2">
                  {route.label} <FaChevronDown />
                </h1>

                {route.submenu && (
                  <div className="absolute left-0 mt-4 w-[6cm] bg-[#F5F5EB] rounded-b-3xl py-2 z-50 hidden group-hover:block border-[3px]">
                    <div className="w-full flex">
                      <div>
                        {route.submenu.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={sub.path}
                            className={`${
                              isActive(sub.path)
                                ? "bg-white text-[#E21E22]"
                                : "text-black hover:bg-white"
                            } block px-4 py-2`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Search & Login */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex w-[13.1cm] justify-between items-center border-[3px] rounded-xl font-semibold border-white">
            <div className="border-r-2 w-[25%] flex justify-center items-center p-[10px] border-white">
              Gallery
            </div>
            <div className="border-r-2 w-[25%] flex justify-center items-center p-[10px] border-white">
              Contact
            </div>
            <div className="border-r-2 w-[25%] flex justify-center items-center p-[10px] border-white">
              Training
            </div>
            <div className="w-[25%] flex justify-around items-center">
              <input
                className="outline-none w-[1.5cm] h-[1cm] rounded-lg"
                type="text"
                placeholder="Search "
              />
              <div className="px-2 py-2 bg-[#E21E22] rounded-lg text-white">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-[2.5cm] h-[1.3cm] bg-[#E21E22] text-white rounded-xl flex justify-center items-center">
            Login
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <div>
        <div className="flex items-center justify-between h-16">
          <button
            onClick={toggleMenu}
            className="text-black md:hidden focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="p-6 w-64 bg-gray-900 h-full">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none mb-6"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {routes.map((route, index) => (
            <div key={index} className="mb-4 bg-black border-2">
              {"path" in route && (route as any).path ? (
                <Link
                  to={(route as any).path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive((route as any).path)
                      ? "bg-gray-900 text-yellow-400"
                      : "text-white hover:bg-gray-700"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {route.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleSubmenu(index)}
                    className="w-full text-left text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium border-2"
                  >
                    {route.label}
                  </button>
                  {route.submenu && activeSubmenu === index && (
                    <div className="ml-4">
                      {route.submenu.map((sub, subIndex) => (
                        <Link
                          key={subIndex}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`${
                            isActive(sub.path)
                              ? "bg-gray-900 text-yellow-400"
                              : "text-white hover:bg-gray-700"
                          } block px-3 py-2 rounded-md text-sm`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default WebsiteNavbar;
