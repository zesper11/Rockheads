import React from "react";
import { teamData } from "../assets/team/TeamData.jsx";
import "./Components.css";

const Team = () => {
  return (
    <section className="team-members">
      <div className="section-heading">
        <h2>Meet The Team</h2>
      </div>

      <div className="members-container">
        {teamData.map((team, index) => (
          <div
            className="member"
            key={index}
            style={{ backgroundImage: `url(${team.image})` }}
          >
            <div className="member-overlay">
              <div className="member-info">
                <h3>{team.name}</h3>
                <p>{team.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
