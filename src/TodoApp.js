import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./App.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false
  }
];

export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);
  return (
    <div className="App">
      <h1>Todo App <small>({todos.length})</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
          {
            todos.map((todo, i) => (
              <li
              className="list-group-item"
              key={todo.id}>
                <p className="text-center">{i + 1}.{todo.desc}</p>
                <button className="btn btn-danger">Delete</button>
              </li>
              
            ))
          }
        </ul>
        </div>
        <div className="col-5">
          <h4>Add ToDo</h4>
          <hr />
          <form>
            <input type="text" name="Desciption" placeholder="Add Todo" autoComplete="off" className="form-control" />
            <div class="d-grid gap-2 mt-2">
              <button className="btn btn-outline-primary">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
