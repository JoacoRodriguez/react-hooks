import React from 'react'
import {  } from "module";

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return(
        <li className='list-group-item d-flex justify-content-between'>
            <span className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}
            onDoubleClick={ () => onToggleTodo(todo.id)}>
                {todo.description}
            </span>
            <button
            className="btn btn-danger align-self-center"
            onClick={() =>onDeleteTodo(todo.id)}
            >Borrar</button>
        </li>
    )
}
