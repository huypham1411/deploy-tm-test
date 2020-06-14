import React from "react";
import Hero from "../components/About/Hero";
import Info from "../components/About/Info";
import "../styles/containers/About/About.css";

const About = () => {
  return (
    <div className="About">
      <Hero />
      <Info />
    </div>
  );
};

export default About;
