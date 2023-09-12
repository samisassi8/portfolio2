import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Formation from "./pages/Formation";
import Contact from "./pages/Contact";

const App = () => {
  const [activeRoute, setActiveRoute] = useState("experience");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/experience" element={<Experience />} />
        <Route path="/formation" element={<Formation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<h1>Homepage</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
