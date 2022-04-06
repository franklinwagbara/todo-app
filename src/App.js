import "./App.scss";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import TodoList from "./components/TodoList";
import useTodo from "./components/Hooks/useTodo";

export const DeleteContext = createContext();
export const UpdateTodoContext = createContext();

function App() {
  const [val, setVal] = useState("");
  const [addTodo, deleteTodo, updateTodo, filterTodo] = useTodo();
  const [selector, setSelector] = useState("ALL");

  console.log("re-render...");

  const onEnterKey = ({ code }) => {
    if (code === "Enter") {
      addTodo(val);
      setVal("");
    }
  };

  const list = filterTodo(selector);
  return (
    <>
      <div className="container">
        <Navbar selector={selector} setSelector={setSelector} />

        <input
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
          onKeyDown={(e) => onEnterKey(e)}
        />
        <DeleteContext.Provider value={deleteTodo}>
          <UpdateTodoContext.Provider value={updateTodo}>
            <TodoList list={Array.from(list)} />
          </UpdateTodoContext.Provider>
        </DeleteContext.Provider>
      </div>
    </>
  );
}

export default App;
