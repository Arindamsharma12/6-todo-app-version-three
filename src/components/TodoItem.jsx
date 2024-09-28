import style from './TodoItem.module.css'

function TodoItem({todoName,todoData,onDeleteItem}) {
  return (
    <div className="container">
      <div className={`${style['kg-row']} row`}>
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoData}</div>
        <div className="col-2">
          <button type="button" className={`${style['kg-button']} btn btn-danger`}
          onClick={()=>onDeleteItem(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
