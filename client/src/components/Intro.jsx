import React from "react";
import { aboutImg } from "../assets/assets";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";

import "./Components.css";

const Intro = () => {
  return (
    <section className="w-full text-white px-6 sm:px-10 md:px-16 lg:px-20 py-20 md:py-28 about-us-intro">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="about-title mb-8">
            About <span className="text-neutral-500">Us.</span>
          </h2>
          <p className="about-copy text-neutral-400 max-w-xl">
            We are Rockheads. Loud riffs, raw energy, and a sound that stays
            with you long after the last note. We don't just play rock, we live
            it. Every beat hits hard, every performance brings the fire, and
            every stage is ours to shake.
          </p>
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

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          <img
            src={aboutImg}
            alt="Rockheads"
            className="w-full h-[350px] sm:h-[450px] md:h-[520px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
