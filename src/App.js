import Header from "./components/Header";
import Form from "./components/Form";
import {useState} from "react";
import TodoList from "./components/TodoList"
import style from "./styles.module.css"

function App() {
  const [todo,setTodo] = useState('');
  const [todoList,setTodoList] = useState([]);
  const doneCount = todoList.filter(item => item.isDone).length;

  return (
    <div className="App">
      <Header></Header>
      <Form 
        todo={todo} 
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      ></Form>
      <div className={style.todoCounters}>
        <div className={style.counter}>Things to do: {todoList.length - doneCount}</div>
        <div className={style.counter}>Done: {doneCount}</div>
      </div>
      <TodoList 
      setTodoList={setTodoList}
      todoList={todoList} />
    </div>
  );
}

export default App;
