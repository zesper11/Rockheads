import { galleryImages } from "../assets/assets";

const Gallery = () => {
  return (
    <section className="p-10">
      <div className="section-heading">
        <h2>a trip down the memory lane</h2>
        <p>
          throwback to unforgettable moments on stage and beautiful memories
          with the audience.
        </p>
      </div>
      <div className="masonry-grid">
        {galleryImages.slice(0, 20).map((img, i) => (
          <div className="masonry-item" key={i}>
            <img src={img} alt="img"></img>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
