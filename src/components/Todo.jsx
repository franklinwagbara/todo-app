import React, { useContext, useState } from "react";
import "./styles/Todo.scss";
import Checker from "./Checker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { DeleteContext, UpdateTodoContext } from "../App";

const Todo = (props) => {
  const deleteTodo = useContext(DeleteContext);
  const [toggleEdit, setToggleEdit] = useState(false);
  const updateTodo = useContext(UpdateTodoContext);
  const [val, setVal] = useState(props.todo);
  const [completed, setCompleted] = useState(props.completed);
  const prevTodo = { name: props.todo, completed: props.completed };

  const onEnterKey = ({ code }) => {
    if (code === "Enter") {
      updateTodo(prevTodo, { name: val, completed: completed });
      setToggleEdit((prev) => !prev);
    }
  };

  return (
    <div
      style={
        props.completed ? { backgroundColor: "rgba(240, 56, 255, 0.23)" } : {}
      }
      className="todo"
    >
      <Checker
        tick={props.completed}
        onTick={() => {
          setCompleted((prev) => !prev);
          updateTodo(prevTodo, { name: val, completed: !completed });
        }}
      />

      {toggleEdit ? (
        <input
          className="edit"
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
          onKeyDown={(e) => onEnterKey(e)}
        />
      ) : (
        <span
          style={
            props.completed
              ? { textDecoration: "line-through", fontStyle: "italic" }
              : {}
          }
        >
          {props.todo}
        </span>
      )}

      <div className="controls">
        <FontAwesomeIcon
          onClick={() => {
            updateTodo(prevTodo, { name: val, completed: completed });
            setToggleEdit((prev) => !prev);
          }}
          icon={faEdit}
          color="rgba(240, 56, 255, 0.56)"
        />
        <FontAwesomeIcon
          onClick={() => deleteTodo(props.todo)}
          icon={faTrashAlt}
          color="rgba(240, 56, 255, 0.56)"
        />
      </div>
    </div>
  );
};

export default Todo;
