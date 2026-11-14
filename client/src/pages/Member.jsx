import { Link, useParams } from "react-router-dom";
import { teamData } from "../assets/team/TeamData.jsx";
import Streams from "../components/Streams.jsx";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import "./Member.css";
import { ArrowLeft } from "lucide-react";

const Member = () => {
  const { id } = useParams();
  const memberIndex = Number(id);
  const member = Number.isInteger(memberIndex) ? teamData[memberIndex] : null;

  if (!member) {
    return <NotFound />;
  }

  return (
    <>
      <main className="member-page">
        <div className="member-frame">
          <Link
            to="/about"
            className="member-back-link inline-flex items-center gap-2 text-sm transition-colors"
          >
            <ArrowLeft />
          </Link>

          <div className="member-banner">
            <img src={member.banner} alt={`${member.name}, ${member.role}`} />
          </div>
        </div>

        <div className="member-content">
          <section className="member-intro">
            <h1 className="member-name sr-only">{member.name}</h1>
            <h2 className="member-section-title">About</h2>
            <p className="member-bio">{member.discription}</p>
            {member.socials?.length > 0 && (
              <div className="member-socials-wrap">
                <p className="member-socials-label">Follow {member.name}</p>
                <nav
                  aria-label={`${member.name} social links`}
                  className="member-socials"
                >
                  {member.socials.map((social, index) => (
                    <a
                      key={social.link}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name}'s social profile ${index + 1}`}
                      className="member-social-link"
                    >
                      {social.icon}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </section>

          <div className="member-details">
            <section
              className="member-section"
              aria-labelledby="member-experience"
            >
              <h2 className="member-section-title" id="member-experience">
                Experience
              </h2>
              <div className="member-list">
                {member.experience.map((item) => (
                  <article
                    className="member-entry"
                    key={`${item.title}-${item.timePeriod}`}
                  >
                    <div className="member-entry-heading">
                      <h3>{item.title}</h3>
                      <p>{item.timePeriod}</p>
                    </div>
                    <p className="member-entry-description">
                      {item.discription}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="member-section"
              aria-labelledby="member-achievements"
            >
              <h2 className="member-section-title" id="member-achievements">
                Achievements
              </h2>
              <div className="member-list">
                {member.achievements.map((item) => (
                  <article
                    className="member-entry"
                    key={`${item.title}-${item.timePeriod}`}
                  >
                    <div className="member-entry-heading">
                      <h3>{item.title}</h3>
                      <p>{item.timePeriod}</p>
                    </div>
                    <p className="member-entry-description">
                      {item.discription}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Streams />
      <Footer />
    </>
  );
};

export default Member;
