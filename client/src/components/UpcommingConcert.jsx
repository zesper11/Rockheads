import React from "react";

const UpcommingConcert = () => {
  return (
    <section>
      <div className="closest-concert">
        <div>
          <img
            src="https://th.bing.com/th/id/R.3efe7902ffb4110060c29d3a218464b8?rik=q40RujzSNrmyNw&pid=ImgRaw&r=0"
            alt="concert image"
          />
          <div className="info">
            <span>19 December 2026 · United Kingdom</span>
            <h3>Live in U.K.</h3>
            <p>
              Springwest Academy <br /> Feltham, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcommingConcert;
