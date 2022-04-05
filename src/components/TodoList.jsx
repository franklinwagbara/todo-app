import React, { useEffect } from "react";
import "./styles/TodoList.scss";
import Todo from "./Todo";
import Footer from "./Footer";

const TodoList = ({ list }) => {
  return (
    <div className="todo-list">
      {list.map((item) => (
        <Todo key={item.name} todo={item.name} completed={item.completed} />
      ))}
      <Footer itemsCount={list.length} />
    </div>
  );
};

export default TodoList;
