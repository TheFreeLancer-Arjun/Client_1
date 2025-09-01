import type { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from "./Layout/Admin/web/WebsiteLayout";
import LandingPage from "./Screens/Web/Landing/LandingPage";

// Import the layouts/pages

/**
 * App Component
 *
 * The main application component that sets up the routing structure for both
 * the Website and Admin sections using `react-router-dom`.
 *
 * Structure:
 * - Website routes are nested under `WebsiteLayout`
 * - Admin routes are nested under `AdminLayout`
 *
 * @returns {JSX.Element} The root component of the application containing all routes.
 */
const App: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
