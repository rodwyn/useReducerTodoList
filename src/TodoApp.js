import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./App.css";
import { useForm } from "./hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  
  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const handleSubmit = event => {
    event.preventDefault();
    
    if (description.trim().length < 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };

    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    reset();
  };
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
          <form onSubmit={ handleSubmit }>
            <input
              type="text"
              name="description"
              placeholder="Add Todo"
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
              value={description}
               />
            <div className="d-grid gap-2 mt-2">
              <button className="btn btn-outline-primary" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
