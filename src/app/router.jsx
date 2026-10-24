
import { Routes, Route } from "react-router-dom";

import LandingLayout from "../layouts/LandingLayout.jsx";
import PortfolioLayout from "../layouts/PortfolioLayout.jsx";
import FreelanceLayout from "../layouts/FreelanceLayout.jsx";

import HomePage from "../pages/HomePage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import ProjectPage from "../pages/ProjectPage.jsx";
import FreelancePage from "../pages/FreelancePage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/portfolio" element={<PortfolioLayout />}>
        <Route index element={<PortfolioPage />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
      </Route>

      <Route path="/freelance" element={<FreelanceLayout />}>
        <Route index element={<FreelancePage />} />
      </Route>

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
