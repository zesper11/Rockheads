import React from "react";
import { Rockheads, badge } from "../assets/assets";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import "./Components.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand and Socials */}
        <div className="footer-brand">
          <img src={badge} alt="Rockheads logo" className="footer-logo" />

          <p className="footer-tagline">Follow us on:</p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <AiFillInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Current Page Navigation */}
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#tour">Tour</a>
            </li>
            <li>
              <a href="#latest-release">Latest Release</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        {/* Other Navigation */}
        <div className="footer-column">
          <h3>Discover</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/concerts">Concerts</Link>
            </li>
            <li>
              <Link to="/discography">Discography</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rockheads.</p>
        <p>Made by Rohan Niroula</p>
      </div>
    </footer>
  );
};

export default Footer;
