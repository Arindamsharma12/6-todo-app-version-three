import { useState } from 'react';
import styles from './AppTodo.module.css'

function AddTodo({onNewItem}) {
  const [todoName,setTodoName] = useState()
  const [dueDate,setDueDate] = useState()

  const handleNameChange = (event)=>{
    setTodoName(event.target.value)
  }

  const handleDateChage = (event)=>{
    setDueDate(event.target.value)
  }

  const handleAddButtonClick = ()=>{
    onNewItem(todoName,dueDate)
    setDueDate("")
    setTodoName("")
  }

  return (
    <div className="container">
      <div className={`${styles['kg-row']} row`}>
        <div className="col-6">
          <input type="text" value={todoName} placeholder="Enter todo here" onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" name="" value={dueDate} id="" onChange={handleDateChage}/>
        </div>
        <div className="col-2">
          <button type="button" className={`${styles['kg-button']} btn btn-success`}
          onClick={handleAddButtonClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
