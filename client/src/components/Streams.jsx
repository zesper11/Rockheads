import React from "react";
import { streamingServiceIcons } from "../assets/assets";

const Streams = () => {
  return (
    <div className="streams">
      <h2 className="sm:text-3xl md:text-2xl text-gray-400">
        Stream our music on
      </h2>

      <div className="Streaming-sites-container">
        {streamingServiceIcons.map((icon, i) => (
          <img src={icon} alt="Streaming service" key={i} />
        ))}
      </div>
    </div>
  );
};

export default Streams;
