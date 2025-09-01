import type { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./WebsiteFooter";
import WebsiteNavbar from "./WebsiteNavbar";
import WebsiteRoutes from "./WebsiteRoutes";

/**
 * WebsiteLayout Component
 *
 * Provides the main layout structure for the website including:
 * - Navigation bar with routes
 * - Dynamic content rendering via React Router's <Outlet />
 * - Footer
 *
 * This component acts as a wrapper for all website pages.
 *
 * @returns {JSX.Element} The rendered website layout.
 */
const WebsiteLayout: FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Navigation Bar */}
      <WebsiteNavbar routes={WebsiteRoutes} />

      {/* Outlet for Dynamic Content */}
      <div className="content">
        <Outlet /> {/* Renders the active route's content */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
