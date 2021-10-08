import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./App.css";

const initialState = [
  {
    id: new Date().getTime,
    desc: "Aprender React",
    done: false
  }
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <hr />
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
  );
};
