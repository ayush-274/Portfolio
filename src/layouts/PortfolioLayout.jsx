
import { Outlet } from "react-router-dom";
import PortfolioNavbar from "../components/navigation/PortfolioNavbar.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function PortfolioLayout() {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
