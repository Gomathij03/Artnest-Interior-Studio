
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ServiceDetails.css";

const serviceData = {
  "full-home": {
    number: "01",
    title: "Full Home Interiors",
    subtitle: "A Beautiful Home Designed Around You.",
    description:
      "We Design Complete Homes With Comfortable Spaces, Practical Layouts, And Beautiful Finishes. Every Room Is Planned To Work Together.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        title: "Living Room Design",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Modern Kitchen",
      },
      {
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Bedroom Design",
      },
      {
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Dining Space",
      },
    ],
    offerings: [
      "Complete Home Design",
      "Living Room Interiors",
      "Bedroom Interiors",
      "Kitchen Design",
      "Dining Room Design",
      "Wardrobe And Storage",
      "Lighting Design",
      "Furniture Selection",
    ],
    process: [
      "Initial Consultation",
      "Space Planning",
      "3D Design Presentation",
      "Material Selection",
      "Installation",
      "Final Handover",
    ],
  },

  bedroom: {
    number: "02",
    title: "Bedroom Interiors",
    subtitle: "Your Personal Space Of Comfort.",
    description:
      "We Create Bedrooms That Feel Comfortable And Relaxing. From Wardrobes To Lighting, Every Detail Is Planned For Your Everyday Needs.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Master Bedroom",
      },
      {
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
        title: "Modern Bedroom",
      },
      {
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
        title: "Bedroom Furniture",
      },
      {
        image: "https://images.unsplash.com/photo-1615874694520-474822394e73",
        title: "Bedroom Styling",
      },
    ],
    offerings: [
      "Master Bedroom Design",
      "Guest Bedroom Design",
      "Kids Bedroom Design",
      "Custom Wardrobes",
      "Bed Backdrop Design",
      "Bedside Units",
      "Lighting And Decor",
      "Bedroom Storage",
    ],
    process: [
      "Design Consultation",
      "Room Measurements",
      "Layout Planning",
      "3D Design Presentation",
      "Furniture Installation",
      "Final Styling",
    ],
  },

  kitchen: {
    number: "03",
    title: "Kitchen Interiors",
    subtitle: "Smart Kitchens For Everyday Living.",
    description:
      "We Design Modern Kitchens With Convenient Layouts, Durable Materials, And Smart Storage. Each Kitchen Is Planned For Easy Everyday Use.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Modern Modular Kitchen",
      },
      {
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
        title: "Kitchen Cabinets",
      },
      {
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
        title: "Kitchen Storage",
      },
      {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Contemporary Kitchen",
      },
    ],
    offerings: [
      "Modular Kitchen Design",
      "L-Shaped Kitchens",
      "U-Shaped Kitchens",
      "Island Kitchens",
      "Kitchen Cabinets",
      "Countertop Selection",
      "Storage Solutions",
      "Kitchen Lighting",
    ],
    process: [
      "Initial Consultation",
      "Kitchen Measurements",
      "Layout Planning",
      "3D Kitchen Design",
      "Material Selection",
      "Installation",
    ],
  },

  "living-room": {
    number: "04",
    title: "Living Room Interiors",
    subtitle: "A Welcoming Space For Every Moment.",
    description:
      "We Design Living Rooms That Bring Comfort And Style Together. Furniture, Lighting, And Storage Are Planned To Make The Space Useful And Inviting.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        title: "Modern Living Room",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        title: "Elegant Living Space",
      },
      {
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Living Room Decor",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Contemporary Interiors",
      },
    ],
    offerings: [
      "Living Room Layout",
      "TV Unit Design",
      "Sofa And Furniture Selection",
      "Feature Wall Design",
      "False Ceiling Design",
      "Lighting Design",
      "Curtains And Decor",
      "Storage Solutions",
    ],
    process: [
      "Design Consultation",
      "Space Measurements",
      "Furniture Planning",
      "3D Design Presentation",
      "Material Selection",
      "Final Installation",
    ],
  },

  commercial: {
    number: "05",
    title: "Commercial Interiors",
    subtitle: "Professional Spaces With Purpose.",
    description:
      "We Create Functional And Attractive Commercial Spaces For Offices, Shops, And Businesses. Our Designs Support Daily Work And Create A Positive Experience.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        title: "Office Interiors",
      },
      {
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        title: "Workplace Design",
      },
      {
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
        title: "Meeting Space",
      },
      {
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        title: "Modern Workspace",
      },
    ],
    offerings: [
      "Office Interior Design",
      "Reception Area Design",
      "Meeting Room Design",
      "Retail Shop Interiors",
      "Workstation Planning",
      "Storage And Cabinets",
      "Lighting Design",
      "Furniture Selection",
    ],
    process: [
      "Business Consultation",
      "Site Measurements",
      "Space Planning",
      "3D Design Presentation",
      "Material Selection",
      "Project Handover",
    ],
  },
    bathroom: {
    number: "06",
    title: "Bathroom Interiors",
    subtitle: "A Refined Space For Everyday Comfort.",
    description:
      "We Design Modern Bathrooms With Elegant Finishes, Functional Storage, Quality Fittings, And Thoughtful Lighting To Create Comfortable Everyday Spaces.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
        title: "Modern Bathroom",
      },
      {
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
        title: "Elegant Bathroom Design",
      },
      {
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Contemporary Interiors",
      },
      {
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        title: "Premium Interior Details",
      },
    ],
    offerings: [
      "Modern Bathroom Design",
      "Vanity Unit Design",
      "Shower Area Planning",
      "Bathroom Storage",
      "Tile And Material Selection",
      "Lighting Design",
      "Mirror And Fittings",
      "Space Optimization",
    ],
    process: [
      "Initial Consultation",
      "Space Measurements",
      "Layout Planning",
      "3D Design Presentation",
      "Material Selection",
      "Final Installation",
    ],
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];
  const [activeImage, setActiveImage] = useState(null);

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? service.gallery.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === service.gallery.length - 1 ? 0 : current + 1
    );
  };


useEffect(() => {
  if (activeImage === null || !service) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setActiveImage(null);
    }

    if (event.key === "ArrowLeft") {
      setActiveImage((current) =>
        current === 0 ? service.gallery.length - 1 : current - 1
      );
    }

    if (event.key === "ArrowRight") {
      setActiveImage((current) =>
        current === service.gallery.length - 1 ? 0 : current + 1
      );
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [activeImage, service]);


  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <Link to="/#services">← Back To Services</Link>
      </div>
    );
  }

  return (
    <main className="service-details-page">

      {/* BACK TO SERVICES */}

      <div className="service-top-navigation">
        <Link to="/#services" className="service-back-button">
          <span>←</span> BACK TO SERVICES
        </Link>
      </div>

      {/* HERO */}

      <section className="service-details-hero">
        <div className="service-details-text">
          <span className="service-details-label">
  {service.number} / OUR SERVICES
</span>

          <h1>{service.title}</h1>

          <h3>{service.subtitle}</h3>

          <p className="service-description">
            {service.description}
          </p>

          <Link to="/#contact" className="service-cta">
            DISCUSS YOUR PROJECT ↗
          </Link>
        </div>

        <div className="service-details-image">
          <img src={service.image} alt={service.title} />
        </div>
      </section>

      {/* OFFERINGS */}

      <section className="service-offerings">
        <div className="service-section-heading">
          <span className="service-section-label">WHAT WE OFFER</span>
          <h2>Our Design Solutions</h2>
          <p>
            Explore The Services Included In Our {service.title}.
          </p>
        </div>

        <div className="service-offerings-grid">
          {service.offerings.map((item, index) => (
            <article className="service-offering-card" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                Planned With Care To Match Your Space And Requirements.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}

      <section className="service-gallery">
        <div className="service-gallery-header">
          <span className="service-section-label">DESIGN GALLERY</span>
          <h2>Explore Our Designs</h2>
          <p>
            View Design Ideas And Details Related To {service.title}.
          </p>
        </div>

        <div className="service-gallery-grid">
          {service.gallery.map((item, index) => (
            <button
              className="service-gallery-item"
              key={item.title}
              onClick={() => setActiveImage(index)}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />

              <div className="gallery-overlay">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>VIEW IMAGE ↗</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}

      {activeImage !== null && (
        <div
          className="image-lightbox"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <img
            src={service.gallery[activeImage].image}
            alt={service.gallery[activeImage].title}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            &#10095;
          </button>

          <span className="lightbox-counter">
            {activeImage + 1} / {service.gallery.length}
          </span>
        </div>
      )}

      {/* PROCESS */}

      <section className="service-process">
        <div className="service-section-heading">
          <span className="service-section-label">OUR APPROACH</span>
          <h2>How We Work</h2>
          <p>
            A Clear Process From The First Discussion To Project Completion.
          </p>
        </div>

        <div className="service-process-grid">
          {service.process.map((step, index) => (
            <article className="service-process-card" key={step}>
              <span>STEP 0{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}

      <section className="service-details-bottom">
        <span>LET'S CREATE SOMETHING BEAUTIFUL</span>
        <h2>Ready To Plan Your Space?</h2>
        <p>
          Contact Our Team To Discuss Your Interior Design Requirements.
        </p>

        <Link to="/#contact" className="service-cta">
          GET IN TOUCH ↗
        </Link>
      </section>

      {/* BOTTOM BACK LINK */}

      <div className="service-bottom-navigation">
        <Link to="/#services">
          ← BACK TO ALL SERVICES
        </Link>
      </div>

    </main>
  );
}

export default ServiceDetails;
