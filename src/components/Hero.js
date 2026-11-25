
import React, { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "ARTNEST INTERIOR STUDIO",
    heading: "Beautiful Spaces.",
    highlight: "Thoughtfully Designed.",
    description:
      "Real comfort, visual and physical, is vital to every room.",
    primaryButton: "BOOK A CONSULTATION",
    secondaryButton: "VIEW OUR PROJECTS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "CONTEMPORARY LIVING",
    heading: "Modern Living.",
    highlight: "Timeless Design.",
    description:
      "Discover refined living spaces with thoughtful layouts, premium finishes, and a perfect balance of style and comfort.",
    primaryButton: "DISCOVER OUR DESIGNS",
    secondaryButton: "EXPLORE PROJECTS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "CUSTOMIZED HOME INTERIORS",
    heading: "Designed Around",
    highlight: "Your Lifestyle.",
    description:
      "Every home is unique. We tailor each interior to your needs with personalized design, smart space planning, and elegant details.",
    primaryButton: "START YOUR PROJECT",
    secondaryButton: "VIEW OUR WORK",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "PREMIUM INTERIOR SOLUTIONS",
    heading: "Crafted With Care.",
    highlight: "Made To Last.",
    description:
      "From material selection to the final finish, we focus on quality craftsmanship and detail to create interiors that endure.",
    primaryButton: "TALK TO OUR DESIGNER",
    secondaryButton: "OUR SERVICES",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=90",
    eyebrow: "YOUR DREAM HOME BEGINS HERE",
    heading: "A Space That Feels",
    highlight: "Like You.",
    description:
      "Transform your vision into a beautifully designed home with interiors that combine personal style, functionality, and comfort.",
    primaryButton: "GET A FREE CONSULTATION",
    secondaryButton: "EXPLORE OUR PROJECTS",
  },
];

const highlights = [
  {
    title: "PERSONALIZED DESIGN",
    description: "Interiors tailored to your lifestyle",
  },
  {
    title: "SMART SPACE PLANNING",
    description: "Every corner thoughtfully utilized",
  },
  {
    title: "QUALITY MATERIALS",
    description: "Selected for lasting performance",
  },
  {
    title: "MODERN AESTHETICS",
    description: "Elegant and timeless spaces",
  },
  {
    title: "ATTENTION TO DETAIL",
    description: "Refined finishes in every element",
  },
  {
    title: "CLIENT-FOCUSED",
    description: "Your vision guides every decision",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="hero">
      {/* HERO BANNER */}
      <div className="hero-banner">
        {/* Background Image */}
        <img
          key={currentSlide.image}
          src={currentSlide.image}
          alt="ARTNEST interior design"
          className="hero-banner-image"
        />

        {/* Image Overlay */}
        <div className="hero-overlay"></div>

        {/* Hero Content */}
        <div
          className="hero-banner-content"
          key={`content-${activeSlide}`}
        >
          <span className="hero-eyebrow">
            {currentSlide.eyebrow}
          </span>

          <h1>
            {currentSlide.heading}
            <br />
            <span>{currentSlide.highlight}</span>
          </h1>

          <p>{currentSlide.description}</p>

          <div className="hero-actions">
            <a href="#contact" className="hero-primary-btn">
              {currentSlide.primaryButton}
              <span>↗</span>
            </a>

            <a href="#projects" className="hero-secondary-btn">
              {currentSlide.secondaryButton}
            </a>
          </div>
        </div>

        {/* Floating Badge */}
        <div className="hero-banner-badge">
          <div className="badge-star">✦</div>

          <div>
            <strong>Designed With Purpose</strong>
            <p>Beautiful Spaces. Better Living.</p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hero-slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              className={`hero-slide-dot ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* COMPANY HIGHLIGHTS */}
      <div className="hero-highlights">
        {highlights.map((item, index) => (
          <div className="highlight-card" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
