
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
     {/* Logo */}
<Link to="/" className="navbar-logo">
  <img
    src="/images/webora-logo.png"
    alt="ArtNest Interior Studio"
    className="navbar-logo-image"
  />
  <div className="navbar-logo-text">
    <div className="logo-main">ARTNEST</div>
    <span className="logo-sub">INTERIOR STUDIO</span>
  </div>
</Link>

      {/* Navigation Links */}
      <ul className="navbar-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li>
          <a href="/#about" className="nav-link">
            About
          </a>
        </li>

        <li>
          <a href="/#services" className="nav-link">
            Services
          </a>
        </li>

        <li>
          <a href="/#projects" className="nav-link">
            Projects
          </a>
        </li>
      </ul>

      {/* Contact Button */}
      <a href="/#contact" className="navbar-contact">
        LET'S TALK <span>↗</span>
      </a>
    </nav>
  );
}

export default Navbar;
