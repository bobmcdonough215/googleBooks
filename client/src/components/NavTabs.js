import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Saved"
          className={window.location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
        >
          Saved
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Search"
          className={window.location.pathname === "/Search" ? "nav-link active" : "nav-link"}
        >
          Search
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
