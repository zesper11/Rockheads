import { promotionalImagemobile, promotionalImagePC } from "../assets/assets";

const Promotion = () => {
  return (
    <section className="promotion h-full" aria-label="Upcoming Rockheads show">
      <picture className="relative h-full">
        <source media="(max-width: 700px)" srcSet={promotionalImagemobile} />
        <img
          src={promotionalImagePC}
          alt="Rockheads live in the UK on December 19, 2026 at Springwest Academy, Feltham"
        />
        <button className="promotion-button absolute top-2/3 sm:left-2/3 border-2 py-4 px-10 hover:bg-amber-500 cursor-pointer">
          <a href="#concerts">Get Tickets</a>
        </button>
      </picture>
    </section>
  );
};

export default Promotion;
