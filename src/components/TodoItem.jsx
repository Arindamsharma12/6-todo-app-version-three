import { useContext } from 'react';
import style from './TodoItem.module.css'
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from '../store/todo-items-store';

function TodoItem({todoName,todoData}) {
  const {deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className={`${style['kg-row']} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoData}</div>
        <div className="col-2">
          <button type="button" className={`${style['kg-button']} btn btn-danger`}
          onClick={()=>deleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
