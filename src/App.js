
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetails from "./components/ServiceDetails";
import ProjectDetails from "./components/ProjectDetails";


import "./App.css";

function HomePage() {
  return (
    <div className="website">
      <Navbar />
      <Hero />
    
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<HomePage />} />

        {/* Individual Service Details */}
        <Route
          path="/services/:serviceId"
          element={
            <div className="website">
              <Navbar />
              <ServiceDetails />
              <Footer />
            </div>
          }
        />
        <Route
  path="/projects/:projectId"
  element={<ProjectDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
