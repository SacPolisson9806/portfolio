import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import "./Navbar/Navbarcss.css"

import Home from "./Pages/Homes"
import "./Pages/Homecss.css"

import Projet from "./Pages/Projects"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-content"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet" element={<Projet />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App