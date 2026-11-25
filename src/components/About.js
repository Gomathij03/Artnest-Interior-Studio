
import React, { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const elements = aboutRef.current.querySelectorAll(".about-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">

        {/* HEADING */}
        <div className="about-heading about-reveal">
          <span className="about-label">
            ABOUT OUR STUDIO
          </span>

          <h2>
            Beautiful Spaces.
            <br />
            <span>Better Living.</span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* IMAGE */}
          <div className="about-image-box about-reveal">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              alt="Modern interior living room"
            />

            <div className="about-image-tag">
              ARTNEST INTERIOR STUDIO
            </div>
          </div>

          {/* TEXT */}
          <div className="about-content about-reveal">

            <span className="about-small-title">
              WHO WE ARE
            </span>

            <h3>
              We Design Homes
              <br />
              
            </h3>

            <p>
              We create beautiful and comfortable interiors
              for modern living. Every space is designed
              to match your needs and style.
            </p>

            <p>
              From living rooms to kitchens and bedrooms,
              we focus on smart layouts, quality finishes,
              and simple designs that last.
            </p>

            <a href="#services" className="about-button">
              EXPLORE OUR SERVICES
              <span>↗</span>
            </a>

            {/* DESIGN FEATURES */}
            <div className="about-features">

              <div className="about-feature">
                <span>01</span>
                <h4>Smart Design</h4>
              </div>

              <div className="about-feature">
                <span>02</span>
                <h4>Quality Finishes</h4>
              </div>

              <div className="about-feature">
                <span>03</span>
                <h4>Comfortable Spaces</h4>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
