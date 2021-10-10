import React from 'react'

export const TodoListItem = ({todo, i, handleToggle, handleDelete}) => {
  return (
    <li
    className="list-group-item"
    key={todo.id}>
      <p
        className={`${todo.done && 'completed'}`}
        onClick={() => handleToggle(todo.id)}>{i + 1}.{todo.desc}</p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
    </li> 
  )
}
