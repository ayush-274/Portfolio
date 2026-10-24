
import { Outlet } from "react-router-dom";

import PortfolioNavbar from "../components/navigation/PortfolioNavbar.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function PortfolioLayout() {
  return (
    <div className="portfolio-site-shell">
      <PortfolioNavbar />

      <main id="main-content" className="portfolio-main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
