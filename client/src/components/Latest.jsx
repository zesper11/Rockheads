import { Vynal } from "../assets/assets";
import "./Components.css";

const streamingServices = [
  "Apple Music",
  "Spotify",
  "YouTube Music",
  "SoundCloud",
  "Amazon Music",
  "Deezer",
  "Tidal",
];

const Latest = () => {
  return (
    <section className="latest-release flex min-h-screen items-center bg-black text-white">
      <div className="latest-art">
        <img
          src={Vynal}
          alt="Maya ko Aago vinyl artwork"
          className="latest-vinyl"
        />
      </div>
      <div className="latest-info px-8 py-12 md:px-12">
        <p className="latest-kicker mb-4 text-neutral-500">
          Latest Release
        </p>
        <h1 className="latest-title mb-6 text-neutral-100">
          Maya ko Aago
        </h1>
        <p className="latest-description mb-10 max-w-2xl text-neutral-400">
          A fiery alternative rock anthem about the consuming passion of love,
          heartbreak, and the wounds that even time struggles to heal.
        </p>
        <div className="flex max-w-xl flex-wrap gap-2">
          {streamingServices.map((service) => (
            <span
              key={service}
              className="rounded-md border border-neutral-600 px-3 py-2 text-sm text-neutral-200"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;
