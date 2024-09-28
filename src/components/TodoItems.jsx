import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css"

const TodoItems = ({todoItems,onDeleteItem}) =>{
    return <>
        <div className={styles.itemsContainer}>
            {todoItems.map(item=><TodoItem key={item.name} todoName={item.name} todoData={item.dueDate} 
            onDeleteItem = {onDeleteItem}
            />)}            
        </div>
    </>
}

export default TodoItems