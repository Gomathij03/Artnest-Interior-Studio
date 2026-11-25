import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "./Projects";
import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find(
    (item) => item.id === projectId
  );

  useEffect(() => {
    if (!project) return;

    window.scrollTo({ top: 0, behavior: "instant" });

    const elements = document.querySelectorAll(".detail-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("detail-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [projectId, project]);

  if (!project) {
    return (
      <section className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you are looking for is not available.</p>
        <Link to="/#projects">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="project-details-section">
      <div className="project-details-container">

        <Link to="/#projects" className="project-back-link">
          ← BACK TO PROJECTS
        </Link>

        <div className="project-details-heading detail-reveal">
          <span>{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.location}</p>
        </div>

        <div className="project-details-image detail-reveal">
          <img src={project.image} alt={project.title} />
          <div className="details-image-caption">
            <span>ARTNEST INTERIOR STUDIO</span>
            <span>{project.title}</span>
          </div>
        </div>

        <div className="project-details-content detail-reveal">
          <div className="project-details-intro">
            <span>ABOUT THE PROJECT</span>
            <h2>{project.description}</h2>
          </div>

          <div className="project-details-description">
            <h3>Design Concept</h3>
            <p>{project.concept}</p>

            <h3>Our Work</h3>
            <ul>
              {project.work.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Materials & Finishes</h3>
            <p>{project.materials}</p>
          </div>
        </div>

        <div className="project-gallery-heading detail-reveal">
          <span>DESIGN GALLERY</span>
          <h2>Explore the <em>details.</em></h2>
          <p>
            Take a closer look at the spaces, finishes and details
            that bring this project together.
          </p>
        </div>

        <div className="project-gallery">
          {project.gallery.map((photo, index) => (
            <article
              className="project-gallery-item detail-reveal"
              key={`${project.id}-${index}`}
              style={{ "--photo-index": index }}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={photo.image}
                  alt={`${project.title} - ${photo.title}`}
                  loading="lazy"
                />
                <span className="gallery-image-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="gallery-photo-info">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="project-details-footer detail-reveal">
          <div>
            <span>START YOUR DESIGN JOURNEY</span>
            <p>Looking to create a similar space?</p>
          </div>

          <Link to="/#contact">
            LET'S DISCUSS YOUR PROJECT ↗
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;