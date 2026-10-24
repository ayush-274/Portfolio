
import { Outlet } from "react-router-dom";
import LandingNavbar from "../components/navigation/LandingNavbar.jsx";
import Footer from "../components/shared/Footer.jsx";


export default function LandingLayout() {
  return (
    <>
      <LandingNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
