import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./index.js";
import About from "./About.js";
import Scan from "./Scan.js";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/scan" element={<Scan />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
