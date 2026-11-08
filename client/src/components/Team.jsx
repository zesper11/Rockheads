import React from "react";
import { teamData } from "../assets/team/TeamData.jsx";

const Team = () => {
  return (
    <section className="team-members">
      <div className="section-heading">
        <h2>Meet The Team</h2>
      </div>
      <div className="members-container member bg-cover bg-center bg-no-repeat">
        {teamData.map((team, index) => (
          <div className="member" key={index}>
            <h3>
              {team.name} | {team.role}
            </h3>
            <img
              src={team.banner}
              alt={`${team.name} banner`}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
