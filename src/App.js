import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";
import TodoList from "./components/TodoList";
import useTodo from "./components/Hooks/useTodo";

export const DeleteContext = createContext();
export const ToggleEditContext = createContext();
export const IsEditContext = createContext();
export const UpdateTodoContext = createContext();

function App() {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [val, setVal] = useState("");
  const [todos, addTodo, deleteTodo, updateTodo] = useTodo();
  const [selector, setSelector] = useState("ALL");

  console.log("re-render...");

  const onEnterKey = ({ code }) => {
    if (code === "Enter") {
      addTodo(val);
      setVal("");
    }
  };

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
          <IsEditContext.Provider value={toggleEdit}>
            <ToggleEditContext.Provider value={setToggleEdit}>
              <UpdateTodoContext.Provider value={updateTodo}>
                <TodoList list={Array.from(todos)} />
              </UpdateTodoContext.Provider>
            </ToggleEditContext.Provider>
          </IsEditContext.Provider>
        </DeleteContext.Provider>
      </div>
    </>
  );
}

export default App;
