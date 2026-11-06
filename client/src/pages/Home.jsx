import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Promotion from "../components/Promotion";
import Streams from "../components/Streams";
import Footer from "../components/Footer";
import "../index.css";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="root">
      <Hero />
      <Promotion />
      <Latest />
      <Gallery />
      <Streams />
      <Footer />
    </div>
  );
};

export default Home;
