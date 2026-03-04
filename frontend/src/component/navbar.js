import React from "react";
import {Link} from "react-router-dom"
import logo from "../images/glucaLogo_small.png";


function Navbar() {
  return (
    <>

      <div className="top-banner">
        Ride the spike
      </div>

       <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Gluca Logo" className="max-h-full bg-no-repeat" />
        </div>
        <div className="title">GLUCA</div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>
      </>
  );
}

export default Navbar;