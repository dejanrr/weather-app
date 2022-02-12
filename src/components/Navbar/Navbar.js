import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-wrapper">
        <div>
        <SearchBox />
        </div>
        <ul className="navbar-list">
          <li className="logo">Meteorolog</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
