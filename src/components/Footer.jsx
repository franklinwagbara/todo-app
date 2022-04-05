import React from "react";
import "./styles/Footer.scss";

const Footer = ({ items = 0 }) => {
  return (
    <span className="footer-text">
      {items > 1 ? `${items} items left` : `${items} item left`}{" "}
    </span>
  );
};

export default Footer;
