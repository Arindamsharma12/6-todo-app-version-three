import { useState,useRef, useContext } from 'react';
import { TiFolderAdd } from "react-icons/ti";
import styles from './AppTodo.module.css'
import { TodoItemsContext } from '../store/todo-items-store';

function AddTodo({}) {
  const todoNameElement = useRef();
  const {addNewItem} = useContext(TodoItemsContext);
  const dueDateElement = useRef();
  
  const handleAddButtonClick = (event)=>{
    // console.log(event)
    event.preventDefault()
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    console.log(todoName,dueDate)
    addNewItem(todoName,dueDate)
  }

  return (
    <div className="container">
      <form className={`${styles['kg-row']} row`}
      onSubmit={handleAddButtonClick}
      >
        <div className="col-6">
          <input type="text"
          ref={todoNameElement}
          placeholder="Enter todo here"/>
        </div>
        <div className="col-4">
          <input type="date" 
          ref={dueDateElement}
          name="" id="" />
        </div>
        <div className="col-2">
          <button 
          className={`${styles['kg-button']} btn btn-success`}>
            <TiFolderAdd />
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddTodo;
