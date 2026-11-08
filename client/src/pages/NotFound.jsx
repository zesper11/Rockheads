import { badge } from "../assets/assets";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-content">
        <img className="not-found-badge" src={badge} alt="Rockheads badge" />
        <p className="not-found-eyebrow">404 · PAGE NOT FOUND</p>
        <h1>We can’t find that page.</h1>
        <p className="not-found-description">
          It may have moved or the link might be incorrect. Let’s head back
          home.
        </p>
        <Link className="not-found-link" to="/">
          Go to homepage <span aria-hidden="true">→</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
