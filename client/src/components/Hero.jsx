import { heroImage, Rockheads } from "../assets/assets";
import "./Components.css";

const Hero = () => {
  return (
    <main className="hero relative isolate min-h-screen overflow-hidden bg-black text-white">
      <img
        src={Rockheads}
        alt="Rockheads"
        className="hero-wordmark"
        aria-hidden="true"
      />

      <img
        src={heroImage}
        alt="The four members of Rockheads"
        className="hero-band"
      />

      <div className="hero-nav-wrap">
        <nav className="hero-nav hero-nav-left" aria-label="Main navigation">
          <a href="#about">About Rockheads <span aria-hidden="true">→</span></a>
          <a href="#concerts">Concerts <span aria-hidden="true">→</span></a>
          <a href="#discography">Discography <span aria-hidden="true">→</span></a>
          <a href="#contact">Contact <span aria-hidden="true">→</span></a>
        </nav>

        <nav className="hero-nav hero-nav-right" aria-label="Featured links">
          <a href="#live-in-uk">Live in UK <span aria-hidden="true">→</span></a>
          <a href="#latest-release">Latest Release <span aria-hidden="true">→</span></a>
          <a href="#gallery">Gallery <span aria-hidden="true">→</span></a>
        </nav>
      </div>
    </main>
  );
};

export default Hero;
