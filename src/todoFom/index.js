import React from 'react';
import { TodoContext } from '../todoContext';
import './todoForm.css';

function TodoForm() {
 
  const [newTodoValue, setNewTodoValue] = React.useState('');
 
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  

  const onCancel = () => {
    setOpenModal(false);
  };
  

  const onSubmit = (event) => {

    event.preventDefault();

    addTodo(newTodoValue);

    setOpenModal(false);

    setNewTodoValue('')
  };

    return (
        <form className="form" onSubmit={onSubmit} >
            <textarea 
            placeholder='Crea un nuevo ToDo'
            rows={10}
            value={newTodoValue}
            onChange={onChange}
           ></textarea>
            <div>
            <button type="button" className="button btn__form" onClick={onCancel} >Cancelar</button>
            <button type="submit" className="button btn__form" onClick={onSubmit} >Crear</button>
            </div>
        </form>
    )
};

export { TodoForm };