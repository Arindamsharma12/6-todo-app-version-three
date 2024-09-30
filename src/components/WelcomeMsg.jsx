import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function WelcomeMsg({}){
    const contextObj = useContext(TodoItemsContext)
    const todoItems = contextObj.todoItems;
    return(todoItems.length === 0 && <h1>Enjoy Your Day</h1>
    );
}

export default WelcomeMsg;