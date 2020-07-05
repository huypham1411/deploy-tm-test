import React, { lazy, Suspense } from "react";
import Hero from "../components/About/Hero";
// import Info from "../components/About/Info";
import "../styles/containers/About/About.css";

// const Hero = lazy(()=> import('../components/About/Hero'));
const Info = lazy (()=> import('../components/About/Info'));
const About = () => {
  return (
    <div className="About">
      <Hero />
      <Suspense fallback={<div/>}>
        <Info />
      </Suspense>
    </div>
  );
};

export default About;
