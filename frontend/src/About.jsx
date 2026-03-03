import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/glucaLogo_small.png";
import "./About.css";

const About = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo}  alt="Gluca Logo" className="max-h-full bg-no-repeat"/>
        </div>

        <div className="title">GLUCA</div>

        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>

      <div className="about-container">
        <section className="about-hero">
          <h1>About Gluca</h1>
          <p>
            Smarter glucose tracking. Personalised nutrition. Health made simple.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Gluca empowers individuals to take control of their health by
            tracking glucose levels in real-time and transforming that data into
            personalized recipe recommendations. We believe managing glucose
            should feel supportive — not overwhelming.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Track</h3>
              <p>
                Log your glucose readings manually or sync with supported glucose
                monitors. Visual dashboards help you understand patterns over time.
              </p>
            </div>

            <div className="about-card">
              <h3>Analyze</h3>
              <p>
                Our smart system evaluates your glucose trends to determine what
                foods best support your current levels and long-term goals.
              </p>
            </div>

            <div className="about-card">
              <h3>Generate</h3>
              <p>
                Receive personalised recipe recommendations tailored to your
                glucose range — whether you need to stabilize, increase, or lower
                your levels.
              </p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Who It's For</h2>
          <p>
            Gluca is designed for individuals managing diabetes, prediabetes,
            athletes optimizing performance, and anyone looking to better
            understand how nutrition affects their body.
          </p>
        </section>

        <section className="about-section about-cta">
          <h2>Take Control Today</h2>
          <p>
            Your glucose data tells a story. Let’s turn it into actionable,
            delicious, and healthy decisions.
          </p>
          <button className="about-button">Start Tracking</button>
        </section>
      </div>
    </>
  );
};

export default About;