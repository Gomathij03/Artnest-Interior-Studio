
import React, { useEffect, useRef } from "react";
import "./Footer.css";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const elements =
      footerRef.current.querySelectorAll(".footer-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("footer-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" ref={footerRef}>

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand footer-reveal">
          <a href="#home" className="footer-logo">
            ARTNEST<span>.</span>
          </a>

          <p className="footer-brand-subtitle">
            INTERIOR STUDIO
          </p>

          <p className="footer-brand-description">
            Creating beautiful spaces with
            thoughtful design and simple details.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
            >
              Pinterest ↗
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className="footer-column footer-reveal">
          <h4>EXPLORE</h4>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Our Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* SERVICES */}

        <div className="footer-column footer-reveal">
          <h4>WHAT WE DO</h4>

          <a href="#services">Full Home Interiors</a>
          <a href="#services">Living Room Design</a>
          <a href="#services">Modular Kitchen</a>
          <a href="#services">Bedroom Design</a>
          <a href="#services">Commercial Interiors</a>
        </div>

        {/* CONTACT */}

        <div className="footer-contact footer-reveal">
          <h4>LET'S CONNECT</h4>

          <p>
            Have a project in mind?
            <br />
            We'd love to hear from you.
          </p>

          <a
            href="mailto:hello@artnestinterior.com"
            className="footer-email"
          >
            hello@artnestinterior.com ↗
          </a>

          <span className="footer-location">
            Bangalore, India
          </span>

          <a href="#contact" className="footer-contact-btn">
            START A PROJECT
            <span>↗</span>
          </a>
        </div>

      </div>

      {/* LARGE BRAND TEXT */}

      <div className="footer-big-brand footer-reveal">
       ARTNEST
      </div>

      {/* BOTTOM BAR */}

      <div className="footer-bottom">

        <p>
          © 2026 ARTNEST INTERIOR STUDIO. ALL RIGHTS RESERVED.
        </p>

        <p className="footer-made">
          DESIGNED WITH PURPOSE.
        </p>

        <button
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          BACK TO TOP ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;
