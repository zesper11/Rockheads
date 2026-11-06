import { TextAlignJustify } from "lucide-react";
import "./Components.css";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <TextAlignJustify
        className={
          location.pathname === "/home"
            ? "nav-icon hidden"
            : "nav-icon expended"
        }
      />
      <ul
        className={
          location.pathname === "/home"
            ? "nav-items hidden"
            : "nav-items expended flex"
        }
      >
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Concerts</Link>
        </li>
        <li>
          <Link>Discography</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
