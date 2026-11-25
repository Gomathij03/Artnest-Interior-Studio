
import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const elements =
      contactRef.current.querySelectorAll(".contact-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={contactRef}
    >
      <div className="contact-container">

        {/* LEFT CONTENT */}

        <div className="contact-info contact-reveal">

          <span className="contact-label">
            <span className="contact-label-line"></span>
            GET IN TOUCH
          </span>

          <h2>
            Let's Design
            <br />
            <span>Your Space.</span>
          </h2>

          <p className="contact-description">
            Have a space in mind? Tell us what you need.
            We will help you create an interior that
            feels right for your lifestyle.
          </p>

          {/* CONTACT DETAILS */}

          <div className="contact-details">

            <div className="contact-detail-item">
              <span className="contact-detail-number">01</span>

              <div>
                <span className="contact-detail-label">
                  EMAIL US
                </span>

                <a href="mailto:hello@artnestinterior.com">
                  hello@artnestinterior.com
                </a>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-number">02</span>

              <div>
                <span className="contact-detail-label">
                  OUR STUDIO
                </span>

                <p>Bangalore, India</p>
              </div>
            </div>

          </div>

          {/* BOTTOM MESSAGE */}

          <div className="contact-note">
            <span className="contact-note-symbol">✳</span>
            <p>
              Thoughtful design.
              <br />
              Beautiful everyday living.
            </p>
          </div>

        </div>

        {/* RIGHT FORM */}

        <div className="contact-form-wrapper contact-reveal">

          {submitted ? (

            <div className="success-message">
              <div className="success-icon">✓</div>

              <span>ENQUIRY SUBMITTED</span>

              <h3>
                Thank you
                <br />
                <em>for reaching out.</em>
              </h3>

              <p>
                Your enquiry has been received.
                We look forward to discussing your project.
              </p>

              <button
                className="contact-reset-btn"
                onClick={() => setSubmitted(false)}
              >
                SEND ANOTHER ENQUIRY ↗
              </button>
            </div>

          ) : (

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-heading">
                <span>YOUR PROJECT</span>

                <h3>
                  Tell us about
                  <br />
                  <em>your ideas.</em>
                </h3>

                <p>
                  Fill in the details below to get started.
                </p>
              </div>

              {/* NAME */}

              <div className="form-group">
                <label htmlFor="fullName">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* EMAIL AND PHONE */}

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="email">
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    PHONE NUMBER
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    required
                  />
                </div>

              </div>

              {/* SERVICE */}

              <div className="form-group">
                <label htmlFor="service">
                  TYPE OF INTERIOR
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose your project
                  </option>

                  <option value="Full Home Interiors">
                    Full Home Interiors
                  </option>

                  <option value="Living Room">
                    Living Room
                  </option>

                  <option value="Bedroom">
                    Bedroom
                  </option>

                  <option value="Modular Kitchen">
                    Modular Kitchen
                  </option>

                  <option value="Commercial Interiors">
                    Commercial Interiors
                  </option>
                </select>
              </div>

              {/* MESSAGE */}

              <div className="form-group">
                <label htmlFor="message">
                  PROJECT DETAILS
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Tell us about your space and ideas..."
                  required
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit-btn"
              >
                <span>SUBMIT YOUR ENQUIRY</span>
                <span className="submit-arrow">↗</span>
              </button>

              <p className="contact-form-footer">
                LET'S MAKE YOUR SPACE SPECIAL.
              </p>

            </form>

          )}

        </div>

      </div>
      <a
  href="https://wa.me/916363948504?text=Hello%20Webora%20Interior%20Studio,%20I%20am%20interested%20in%20your%20interior%20design%20services."
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  
>
  <svg
    viewBox="0 0 32 32"
    className="whatsapp-icon"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M16.01 3C8.84 3 3 8.82 3 15.98c0 2.29.6 4.53 1.75 6.5L3 29l6.7-1.72a13 13 0 0 0 6.3 1.62h.01C23.17 28.9 29 23.08 29 15.92 29 8.77 23.18 3 16.01 3zm0 23.72h-.01c-1.94 0-3.85-.52-5.52-1.5l-.4-.24-3.98 1.04 1.06-3.88-.26-.4a10.75 10.75 0 0 1-1.65-5.76c0-5.94 4.83-10.77 10.78-10.77 2.88 0 5.59 1.12 7.62 3.16a10.7 10.7 0 0 1 3.15 7.61c0 5.95-4.84 10.78-10.79 10.78zm5.91-8.07c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.56-.94-.84-1.57-1.88-1.75-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.21 3.37 5.36 4.73.75.32 1.33.52 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.88-.77 2.15-1.51.26-.75.26-1.39.18-1.52-.08-.13-.29-.21-.61-.37z"
    />
  </svg>

</a>
    </section>
  );
}

export default Contact;
