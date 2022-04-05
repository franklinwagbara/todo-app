import React from "react";
import "./styles/Navbar.scss";

const Navbar = ({ selector, setSelector }) => {
  return (
    <nav>
      <ul>
        <li
          onClick={() => setSelector("ALL")}
          className={selector === "ALL" ? "active" : ""}
        >
          ALL
        </li>
        <li
          onClick={() => setSelector("COMPLETED")}
          className={selector === "COMPLETED" ? "active" : ""}
        >
          COMPLETED
        </li>
        <li
          onClick={() => setSelector("UNCOMPLETED")}
          className={selector === "UNCOMPLETED" ? "active" : ""}
        >
          UNCOMPLETED
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
