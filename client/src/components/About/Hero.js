import React from "react";
import Image0 from "../../assets/aboutImage/bgAbout.jpeg";
import "../../styles/components/About/hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-wrap">
          {/* Backgroup image */}
          <img
            className="hero-wrap__image"
            src={Image0}
            alt="background_about"
          ></img>

          {/* text */}
          <div className="hero-wrap__text">
            <h1>About Us</h1>
            <p>Why Choose Uncle Farm</p>
            <p>
              We Offer Organic Fruits Anh Vegetables Fresh From Our Field To
              Your Home
            </p>
            <p>
              Visit Our Site For A Complete List Of Exclusive We Are Stocking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
