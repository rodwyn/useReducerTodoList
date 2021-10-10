import React from 'react';
import { useForm } from "../hooks/useForm";

export const TodoForm = ({handleAddTodo}) => {
  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  });

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

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  )
}
