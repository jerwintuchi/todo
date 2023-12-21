import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';
import style from './styles.module.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const doneCount = todoList.filter(item => item.isDone).length;
  const totalTasks = todoList.length;

  let taskMessage,doneStatus;
  if (totalTasks === 0) {
    taskMessage = 'Add some tasks to do!';
  } else if (doneCount === totalTasks) {
    taskMessage = 'All tasks are done! :)';
  } else {
    taskMessage = `Things to do: ${totalTasks - doneCount}`;
    doneStatus = `Done: ${doneCount}`;
  }

  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <div className={style.todoCounters}>
        <div className={style.counter}>{taskMessage}</div>
        <div className={style.counter}>{doneStatus}</div>
      </div>
      <TodoList setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export default App;
