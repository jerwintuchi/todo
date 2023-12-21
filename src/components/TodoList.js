import Todo from "./Todo"
import {useState, useEffect} from "react"

const TodoList = ({todoList, setTodoList}) => {
    const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    // Count the number of completed items in the todoList
    const completedItems = todoList.filter((item) => item.isDone);
    setCompletedCount(completedItems.length);
  }, [todoList]);

  const updateTodoList = (updatedTodoList) => {
    setTodoList(updatedTodoList);
  };
    
  return (
        <div>
            {todoList.map((todoItem)=> (
            <Todo
                key={todoItem.id}
                todoItem={todoItem}
                todoList={todoList}
                updateTodoList={updateTodoList}
                setCompletedCount={setCompletedCount}
              />
            ))}
        </div>
  )
}

export default TodoList