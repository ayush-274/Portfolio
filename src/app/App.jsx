
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import AppRouter from "./router.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}
