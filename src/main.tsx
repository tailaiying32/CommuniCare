import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import Contact from "./pages/Contact.tsx";
import App from "./pages/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/app" element={<App />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
