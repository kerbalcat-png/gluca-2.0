import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/glucaLogo_small.png";

function Navbar() {

  const [results, setResults] = useState([]);

  async function handleSearchMenus(){
    let search_query = document.getElementById("searchMenu").value;
    console.log(search_query);

    let response = await fetch(`http://localhost:5000/search/${search_query}`);

    if (response.ok){
      let res = await response.json();
      console.log(res);
      setResults(res);   
    }
  }

  return (
    <>
      <div className="top-banner">
        Ride the spike
      </div>

      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Gluca Logo" className="max-h-full bg-no-repeat" />
            <div className="title">GLUCA</div>
          </Link>
        </div>
      
          <input type="text" id="searchMenu" onChange={handleSearchMenus} />
          <div onClick={handleSearchMenus}>Search</div>

          {results.length > 0 && (
            <ul>
              {results.map((item, index) => (
                <li key={index} > {item.name} </li>
              ))}
            </ul>
          )}


        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;