import React from "react";
import Image from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/components/General/Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrap row">
          {/* footer logo */}
          <div className="footer-logo col-lg-3 col-md-6">
            <img src={Image} alt="logo" className="footer-logo__image" />
            <p className="footer-logo__text">copyright@2020</p>
          </div>

          {/* footer nav */}
          <nav className="footer-nav col-lg-3 col-md-6">
            <ul className="footer-nav__menu">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Products">
                <li>Our product</li>
              </Link>
              <Link to="/Policy">
                <li>Policy</li>
              </Link>
              <Link to="/About">
                <li>About us</li>
              </Link>
            </ul>
          </nav>
          {/* <!-- footer contact --> */}
          <div className="footer-contact col-lg-3 col-md-6">
            <div className="footer-contact__info">
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              <p>TP HCM. VIETNAM</p>
            </div>

            <div className="footer-contact__info">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>contact@gmail.com</p>
            </div>

            <div className="footer-contact__info">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <p>+09. 123456789</p>
            </div>
          </div>
          {/* <!-- footer about --> */}
          <div className="footer-about col-lg-3 col-md-6">
            <p>ABOUT THE COMPANY</p>

            <p>UncleFarm is a company for buying food and vegetable</p>

            <ul className="footer-about__icon">
            
            <li>
              <a href="https://www.facebook.com/Uncle-Veggies-100367225056687/" target="blank">
                <i> <FontAwesomeIcon icon={faFacebookSquare} /></i>
               
                </a>
              </li>
           
             
              <li>
                <a href="https://www.instagram.com/unclefarmveggies/" target="blank">
                <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </li>
              <li>
              <a href="https://twitter.com/uncleveggies/" target="blank">
                <FontAwesomeIcon icon={faTwitterSquare} /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;