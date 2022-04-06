import { useState } from "react";

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const updateTodo = (prevTodo, todo) => {
    const index = todos.findIndex((todo) => todo.name === prevTodo.name);

    const newTodos = [...todos];
    newTodos[index] = todo;

    setTodos((prev) => [...newTodos]);
  };

  const deleteTodo = (value) => {
    const newTodos = todos.filter((todo) => todo.name !== value);
    setTodos((prev) => [...newTodos]);
    return;
  };

  const addTodo = (todo = "") => {
    if (
      todos.find((_todo) => _todo.name === todo || todo === "" || todo === " ")
    )
      return;
    setTodos((prev) => [...prev, { name: todo, completed: false }]);
  };

  const filterTodo = (filter = "ALL") => {
    if (filter === "ALL") return todos;
    else if (filter === "COMPLETED")
      return todos.filter((todo) => todo.completed === true);
    else return todos.filter((todo) => todo.completed === false);
  };

  return [addTodo, deleteTodo, updateTodo, filterTodo];
};

export default useTodo;
