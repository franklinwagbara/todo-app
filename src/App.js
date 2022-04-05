import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TodoList from "./components/TodoList";
import useTodo from "./components/Hooks/useTodo";

function App() {
  const [val, setVal] = useState("");
  const [todos, addTodo] = useTodo();
  const [selector, setSelector] = useState("ALL");
  console.log("re-render...", todos);
  const onEnterKey = ({ code }) => {
    if (code === "Enter") addTodo(val);
  };

  return (
    <>
      <div className="container">
        <Navbar selector={selector} setSelector={setSelector} />

        <input
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
          onKeyDown={onEnterKey}
        />

        <TodoList key={todos} list={Array.from(todos)} />
      </div>
    </>
  );
}

export default App;
