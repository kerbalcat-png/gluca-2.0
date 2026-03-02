import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
// import About from "./About.jsx";
// import Scan from "./Scan.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/scan" element={<Scan />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;