
import { useTheme } from "../../hooks/useTheme.js";
import ThemeToggle from "../ui/ThemeToggle.jsx";

export default function PortfolioNavbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      {/* Add your navigation links here */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
    </nav>
  );
}
