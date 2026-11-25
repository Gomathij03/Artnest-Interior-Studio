import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

export const projects = [
  {
    id: "2bhk",
    title: "2 BHK Home",
    category: "2 BHK Residential Interiors",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    description:
      "A thoughtfully designed 2 BHK home that makes every corner comfortable, functional and beautiful.",
    concept:
      "This home combines modern design with practical space planning. A balanced palette, warm lighting and smart storage create a welcoming atmosphere.",
    work: [
      "Living and dining area design",
      "Master bedroom and guest bedroom interiors",
      "Modular kitchen planning",
      "Wardrobe and storage solutions",
      "Lighting and false ceiling design",
      "Furniture and decor selection",
    ],
    materials:
      "Engineered wood, laminate finishes, soft furnishings, quartz surfaces and warm LED lighting.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        title: "Living Area",
        description: "A comfortable living space with a modern furniture layout.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        title: "Master Bedroom",
        description: "A relaxing bedroom with warm tones and elegant finishes.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Modular Kitchen",
        description: "A practical kitchen with organised storage and clean finishes.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Dining Space",
        description: "A simple dining area designed for everyday family moments.",
      },
    ],
  },

  {
    id: "3bhk",
    title: "3 BHK Home",
    category: "3 BHK Residential Interiors",
    location: "Chennai, India",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description:
      "A contemporary 3 BHK residence designed to bring comfort, elegance and functionality together.",
    concept:
      "The design creates a consistent look throughout the home while giving each room its own character through colours, textures and lighting.",
    work: [
      "Complete home interior planning",
      "Living and dining room interiors",
      "Master bedroom design",
      "Two additional bedroom designs",
      "Modular kitchen and utility planning",
      "Custom wardrobes and storage",
    ],
    materials:
      "Premium laminates, natural wood textures, decorative wall finishes, glass details and layered lighting.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        title: "Living Room",
        description: "An open and inviting living space with contemporary details.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Master Bedroom",
        description: "A comfortable bedroom with a coordinated colour palette.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Kitchen",
        description: "A modern kitchen with functional cabinets and work surfaces.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        title: "Guest Bedroom",
        description: "A welcoming guest room with simple and elegant styling.",
      },
    ],
  },

  {
    id: "4bhk",
    title: "4 BHK Home",
    category: "4 BHK Luxury Residential Interiors",
    location: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    description:
      "A spacious 4 BHK home planned with elegant interiors, refined details and comfortable family spaces.",
    concept:
      "The design focuses on spacious layouts, coordinated materials and carefully planned lighting to create a refined home experience.",
    work: [
      "Complete 4 BHK interior design",
      "Living room and family lounge",
      "Dining area and kitchen interiors",
      "Master and additional bedroom designs",
      "Walk-in wardrobe and storage planning",
      "Decorative lighting and ceiling design",
    ],
    materials:
      "Natural stone finishes, premium wood textures, designer laminates, upholstery and decorative lighting.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        title: "Grand Living Room",
        description: "A spacious living room with a refined and balanced layout.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Master Suite",
        description: "A calm bedroom with warm textures and elegant detailing.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Modern Kitchen",
        description: "A functional kitchen with generous storage and clean lines.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        title: "Family Space",
        description: "A comfortable shared space for everyday family time.",
      },
    ],
  },

  {
    id: "kitchen",
    title: "Modular Kitchen",
    category: "Kitchen Interiors",
    location: "Coimbatore, India",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    description:
      "A modern modular kitchen designed for smooth workflow, organised storage and everyday convenience.",
    concept:
      "The kitchen combines a clean contemporary appearance with an efficient layout, durable finishes and easy-to-access storage.",
    work: [
      "Kitchen layout planning",
      "Modular base and wall cabinets",
      "Tall unit and pantry storage",
      "Countertop and backsplash selection",
      "Appliance placement",
      "Task and ambient lighting",
    ],
    materials:
      "Moisture-resistant boards, premium laminates, quartz countertops, glass and durable cabinet hardware.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        title: "Modern Kitchen",
        description: "A clean kitchen design with practical storage solutions.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        title: "Kitchen Layout",
        description: "An efficient layout planned for comfortable movement.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        title: "Kitchen Finishes",
        description: "A coordinated combination of textures and finishes.",
      },
    ],
  },

  {
    id: "bedroom",
    title: "Bedroom Interiors",
    category: "Bedroom Design",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    description:
      "A peaceful bedroom designed to provide comfort, functionality and a relaxing atmosphere.",
    concept:
      "Soft colours, warm lighting, comfortable furniture and smart storage come together to create a restful personal space.",
    work: [
      "Bedroom layout planning",
      "Bed backdrop and wall design",
      "Wardrobe and storage design",
      "Bedside furniture selection",
      "Lighting and colour coordination",
      "Curtains and decor styling",
    ],
    materials:
      "Wood finishes, soft fabrics, neutral wall colours, upholstered panels and warm lighting.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        title: "Master Bedroom",
        description: "A relaxing bedroom with warm and neutral tones.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Bedroom Styling",
        description: "A simple design with comfortable furnishings.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        title: "Bedroom Details",
        description: "Thoughtful finishes and lighting for a calm atmosphere.",
      },
    ],
  },

  {
    id: "living-room",
    title: "Living Room",
    category: "Living Room Interiors",
    location: "Chennai, India",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    description:
      "A welcoming living room designed around comfort, natural light and modern style.",
    concept:
      "The space balances comfortable furniture, thoughtful lighting and a coordinated colour palette to create an inviting environment.",
    work: [
      "Living room space planning",
      "Sofa and furniture arrangement",
      "TV unit and feature wall design",
      "False ceiling and lighting",
      "Curtains and decor selection",
      "Colour and material coordination",
    ],
    materials:
      "Natural wood, upholstery fabrics, decorative wall finishes, glass details and ambient lighting.",
    gallery: [
      {
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
        title: "Main Living Area",
        description: "A comfortable seating area with a modern layout.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
        title: "TV Unit Design",
        description: "A clean feature wall with coordinated finishes.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        title: "Living Details",
        description: "Carefully selected furniture and decorative accents.",
      },
    ],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <span className="projects-label">OUR PROJECTS</span>
            <h2>
              Spaces Made <span>Beautiful.</span>
            </h2>
          </div>

          <p>
            Explore our residential interiors and thoughtfully designed
            spaces, created around comfort and functionality.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.id}
              style={{ "--card-index": index }}
            >
              <Link
                to={`/projects/${project.id}`}
                className="project-image-link"
                aria-label={`View ${project.title} project`}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />

                  <div className="project-image-overlay">
                    <span>EXPLORE PROJECT ↗</span>
                  </div>

               
                </div>
              </Link>

              <div className="project-info">
                <div>
                  <span className="project-category">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.location}</p>
                </div>

                <Link
                  to={`/projects/${project.id}`}
                  className="project-arrow"
                  aria-label={`Explore ${project.title}`}
                >
                  ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;