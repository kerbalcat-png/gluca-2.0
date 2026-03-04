import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Recipes from "./Recipes.jsx";
import Navbar from "./component/navbar.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>    
    <div className="home">

      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;