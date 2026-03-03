import React from "react";


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
          <li><a href="/About.jsx">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;