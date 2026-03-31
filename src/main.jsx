import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Parcours from "./Pages/Parcours";
import Projects from "./Pages/Projects";
import Competence from "./Pages/Competence";
import Veille from "./Pages/Veille";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";

// 🔥 IMPORTS DES PAGES PROJETS
import Driveonepage    from "./Pages/Driveonepage";
import Esportpage      from "./Pages/Esportpage";
import Personnagepage  from "./Pages/Personnagepage";
import Tutosymfonypage from "./Pages/Tutosymfonypage";
import Hubjeuxpage     from "./Pages/Hubjeuxpage";

import "./Pages/global.css"; 

const App = () => (
  <BrowserRouter>

    {/* Navbar affichée sur toutes les pages */}
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Parcours" element={<Parcours />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Competence" element={<Competence />} />
      <Route path="/Veille" element={<Veille />} />
      <Route path="/Contact" element={<Contact />} />

      {/* 🔥 ROUTES PROJETS */}
      <Route path="/Pages/Driveonepage" element={<Driveonepage />} />
      <Route path="/Pages/Esportpage" element={<Esportpage />} />
      <Route path="/Pages/Personnagepage" element={<Personnagepage />} />
      <Route path="/Pages/Tutosymfonypage" element={<Tutosymfonypage />} />
      <Route path="/Pages/Hubjeuxpage" element={<Hubjeuxpage />} />

    </Routes>

  </BrowserRouter>
);

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}