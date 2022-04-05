import React, { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState(new Set());

  const addTodo = (todo = "") => {
    setTodos((prev) => prev.add(todo));
  };

  return [todos, addTodo];
};

export default useTodo;
