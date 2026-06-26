import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Submit from "./pages/Submit";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
      <footer className="footer">
        <p>May Allah accept our efforts in spreading His message. ☪</p>
      </footer>
    </BrowserRouter>
  );
}
