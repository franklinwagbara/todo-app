import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles/Checker.scss";

const Checker = ({ tick = false, onTick }) => {
  return (
    <div className="checker" onClick={onTick}>
      {tick && (
        <FontAwesomeIcon icon={faCheck} color="rgba(240, 56, 255, 0.56)" />
      )}
    </div>
  );
};

export default Checker;
