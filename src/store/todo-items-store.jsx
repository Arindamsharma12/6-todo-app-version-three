import { createContext } from "react";
import { useReducer } from "react";


export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {
  let [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    /*setTodoItems((currVal) => [
      ...currVal,
      { name: itemName, dueDate: itemDueDate },
    ]);*/
  };

  const deleteItem = (itemName) => {
    const DeleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dispatchTodoItems(DeleteAction);
    /*const newTodoItems = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(newTodoItems);*/
  };
  return <TodoItemsContext.Provider
  value={{
    todoItems,
    addNewItem,
    deleteItem,
  }}
>
  {children}
</TodoItemsContext.Provider>
};

export default TodoItemsContextProvider;
