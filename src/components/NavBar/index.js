import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css"

export default function index() {
  let activeStyle = {
    textDecoration: "underline",
    color: "#fff",
    fontSize: "26px",
  };

  let inActiveStyle = {
    textDecoration: "none",
    color: "#fff",
    fontSize: "26px",
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="bookmarks"
            style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
          >
            Bookmarks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
