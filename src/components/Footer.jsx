import React from "react";
import "./styles/Footer.scss";

const Footer = ({ itemsCount = 0 }) => {
  return (
    <span className="footer-text">
      {itemsCount > 1 ? `${itemsCount} items left` : `${itemsCount} item left`}{" "}
    </span>
  );
};

export default Footer;
