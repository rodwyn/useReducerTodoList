import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import "./App.css";

import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = todoId => {
    dispatch({
      type: 'delete',
      payload: todoId
    });
  };

  const handleToggle = todoId => {
    dispatch({
      type: 'toggle',
      payload: todoId
    });
  };

  const handleAddTodo = newTodo => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  };

  return (
    <div className="App">
      <h1>Todo App <small>({todos.length})</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoForm handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
