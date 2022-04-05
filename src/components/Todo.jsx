import React from "react";
import "./styles/Todo.scss";
import Checker from "./Checker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo: value }) => {
  return (
    <div className="todo">
      <Checker tick={true} />
      <span>{value}</span>
      <div className="controls">
        <FontAwesomeIcon icon={faEdit} color="rgba(240, 56, 255, 0.56)" />
        <FontAwesomeIcon icon={faTrashAlt} color="rgba(240, 56, 255, 0.56)" />
      </div>
    </div>
  );
};

export default Todo;
