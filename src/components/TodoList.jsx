import React from "react";
import "./styles/TodoList.scss";
import Todo from "./Todo";
import Footer from "./Footer";

const TodoList = ({ list }) => {
  console.log("re-rendering todo");
  return (
    <div className="todo-list">
      {list.map((item) => (
        <Todo todo={item} />
      ))}
      <Footer />
    </div>
  );
};

export default TodoList;
