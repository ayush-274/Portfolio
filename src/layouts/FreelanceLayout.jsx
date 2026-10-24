
import { Outlet } from "react-router-dom";
import FreelanceNavbar from "../components/navigation/FreelanceNavbar.jsx";
import Footer from "../components/shared/Footer.jsx";

export default function FreelanceLayout() {
  return (
    <>
      <FreelanceNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
