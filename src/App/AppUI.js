import React from 'react';
import { TodoContext } from '../todoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../todoFom';
import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../modal/index';
import { LoandingPage } from '../LoandingPage/LoandingPage';


function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal} = React.useContext(TodoContext);

        

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

            <TodoList>
            {error && <p>Desespérate, hubo un error...</p>}
            {loading && <LoandingPage/>}
            {(!loading && !searchedTodos.length)}
            
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (<Modal>
              <TodoForm/>  
            </Modal>)}
            
      <CreateTodoButton
      setOpenModal={setOpenModal}
      />
      </React.Fragment>
  );
}

export {AppUI};