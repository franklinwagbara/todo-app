import React, { useContext, useState } from "react";
import "./styles/Todo.scss";
import Checker from "./Checker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { DeleteContext, ToggleEditContext, UpdateTodoContext } from "../App";
import { IsEditContext } from "./../App";

const Todo = (props) => {
  const deleteTodo = useContext(DeleteContext);
  const toggleEdit = useContext(IsEditContext);
  const setToggleEdit = useContext(ToggleEditContext);
  const updateTodo = useContext(UpdateTodoContext);
  const [val, setVal] = useState(props.todo);
  const [completed, setCompleted] = useState(props.completed);
  const prevTodo = { name: props.todo, completed: props.completed };

  const onEnterKey = ({ code }) => {
    if (code === "Enter") {
      //addTodo(val);
      updateTodo(prevTodo, { name: val, completed: completed });
      setToggleEdit((prev) => !prev);
    }
  };

  return (
    <div className="todo">
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
        <span>{props.todo}</span>
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
