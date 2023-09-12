// import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.svg";
import { useRef, useEffect } from "react";

const Navbar = (props) => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <ul>
        <li>
          <a
            href="/experience"
            className={props.activeRoute === "experience" ? "active" : ""}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="/formation"
            className={props.activeRoute === "formation" ? "active" : ""}
          >
            Formation
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={props.activeRoute === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
