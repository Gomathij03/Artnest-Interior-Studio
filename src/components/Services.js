
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    title: "Full Home Interiors",
    description:
      "Complete home interiors designed with comfort, elegance, and practical solutions for every room.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    path: "/services/full-home",
    label: "COMPLETE HOME DESIGN",
  },
  {
    title: "Bedroom Interiors",
    description:
      "Beautiful bedrooms with elegant furniture, smart storage, and relaxing designs.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    path: "/services/bedroom",
    label: "COMFORT & STYLE",
  },
  {
    title: "Kitchen Interiors",
    description:
      "Modern kitchens with functional layouts, quality finishes, and smart storage solutions.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    path: "/services/kitchen",
    label: "SMART KITCHEN DESIGN",
  },
  {
    title: "Living Room Interiors",
    description:
      "Welcoming living spaces designed with beautiful furniture, lighting, and thoughtful details.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    path: "/services/living-room",
    label: "MODERN LIVING",
  },
  {
    title: "Commercial Interiors",
    description:
      "Professional interiors for offices, retail spaces, and businesses that balance style and functionality.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    path: "/services/commercial",
    label: "WORKSPACE DESIGN",
  },
  {
    title: "Bathroom Interiors",
    description:
      "Elegant and functional bathrooms with refined finishes, smart storage, and modern fittings.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=85",
    path: "/services/bathroom",
    label: "MODERN BATHROOMS",
  },
];

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".service-reveal");

    // Show everything immediately if IntersectionObserver is unavailable.
    if (!("IntersectionObserver" in window)) return;

    // Apply the hidden state only after JavaScript has loaded.
    elements.forEach((element) => {
      element.classList.add("service-pending");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("service-visible");
            entry.target.classList.remove("service-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 60px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="services-section"
      id="services"
      ref={sectionRef}
    >
      <div className="services-container">

        {/* SECTION HEADING */}
        <div className="services-header service-reveal">
          <div className="services-heading-left">
            <span className="services-subtitle">
              <span className="subtitle-line"></span>
              OUR EXPERTISE
            </span>

            <h2>
              Our <span>Services</span>
            </h2>
          </div>

          <div className="services-heading-right">
            <p>
              We design beautiful and functional spaces
              that match your needs, style, and lifestyle.
            </p>

            <Link to="/#contact" className="services-discover">
              DISCUSS YOUR PROJECT <span>↗</span>
            </Link>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {services.map((service, index) => (
            <article
              className={`service-card service-reveal service-delay-${index % 3}`}
              key={service.path}
            >
              <Link
                to={service.path}
                className="service-image-link"
                aria-label={`Explore ${service.title}`}
              >
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading={index < 3 ? "eager" : "lazy"}
                  />

                  <div className="service-image-overlay"></div>

                  <span className="service-label">
                    {service.label}
                  </span>

                  <span className="service-arrow">↗</span>
                </div>
              </Link>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link
                  to={service.path}
                  className="service-explore"
                >
                  EXPLORE SERVICE <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="services-bottom service-reveal">
          <span>DESIGNED WITH PURPOSE</span>
          <p>Beautiful Spaces. Better Living.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;
