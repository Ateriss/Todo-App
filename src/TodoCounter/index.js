import React from "react";
import { TodoContext } from "../todoContext";
import './TodoCounter.css';

function TodoCounter(){
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <div  className="TodoCounter">
        <h2>ToDo App</h2>
        <p>Has completado {completedTodos} de {totalTodos} Tareas</p>
        </div>
    )
};
export {TodoCounter};