import { Link } from "react-router-dom";
import "./App.css";
import logo from "./images/glucaLogo_small.png";

function Home() {
  return (
    <div className="home">

      <div className="top-banner">
        RIDE THE SPIKE
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

      <section className="hero">
        <div className="hero-left">
          <h1>
            GREAT HEALTH <br />
            DOESN'T HAVE TO <br />
            COST THE EARTH
          </h1>

          <p>
            Gluca helps you scan food products and instantly understand
            their glucose impact.
          </p>

          <Link to="/scan">
            <button className="scan-btn">SCAN NOW</button>
          </Link>
        </div>

        <div className="hero-right">
          <div className="product-card">
            <h3>Gluca Scanner</h3>
            <p>Real-time barcode detection</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;