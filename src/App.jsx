import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import { LanguageProvider } from "./i18n/LanguageContext";
import { AiDaeeProvider } from "./context/AiDaeeContext";

export default function App() {
  return (
    <LanguageProvider>
      <AiDaeeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AiDaeeProvider>
    </LanguageProvider>
  );
}
