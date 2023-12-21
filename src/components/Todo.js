import React, { useState } from 'react';
import styles from '../styles.module.css';

const Todo = ({ todoItem, todoList, updateTodoList, setCompletedCount }) => {
  const [isDone, setIsDone] = useState(false);

  const deleteTodo = () => {
    const updatedList = todoList.filter((item) => item.id !== todoItem.id);
    updateTodoList(updatedList);
    if (isDone) {
      setCompletedCount((prevCount) => prevCount - 1);
    }
  };

  const toggleDone = () => {
    setIsDone(!isDone);
    const updatedList = todoList.map((item) =>
      item.id === todoItem.id ? { ...item, isDone: !isDone } : item
    );
    updateTodoList(updatedList);
    if (!isDone) {
      setCompletedCount((prevCount) => prevCount + 1);
    } else {
      setCompletedCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <div
        className={`${styles.todoitem} ${isDone ? styles.doneBackground : ''} ${isDone ? styles.doneBackground : ''}`}
      >
        <h3 className={isDone ? styles.todonameDone : styles.todoname}>{todoItem.name}</h3>
        <div className={styles.buttonContainer}>
          <button
            onClick={toggleDone}
            className={isDone ? styles.undoButton : styles.doneButton}
          >
            {isDone ? 'Undo' : 'Done'}
          </button>
          <button onClick={deleteTodo} className={styles.deletebutton}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
