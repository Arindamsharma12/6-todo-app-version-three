import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [todoItems,setTodoItems] = useState([])
  const handleNewItem = (itemName,itemDueDate)=>{
    const newTodoItems = [...todoItems,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newTodoItems)
  }

  const handleDeleteClick = (itemName)=>{
    const newTodoItems = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItems)
    // console.log(itemName)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMsg/>}
      <TodoItems onDeleteItem= {handleDeleteClick} todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
