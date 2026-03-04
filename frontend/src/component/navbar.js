import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="home">

      <div className="top-banner">
        Ride the spike
      </div>

      <nav className="navbar">
        <div className="title">
          Gluca
        </div>

        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/about">Recipes</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;