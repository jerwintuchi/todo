import styles from "../styles.module.css"
import shortid from 'shortid'

const Form = ({todo, setTodo, todoList, setTodoList}) => {
const handleChange = (event) => {
        setTodo(event.target.value);
        //console.log(todo);    
    }
const handleSubmit = (event) => {
    event.preventDefault();//stops refresh
    setTodoList([...todoList, {id: shortid.generate(), name: todo }]);
    console.log(todoList);
    setTodo(""); //reset the input field after adding item to the list
}

    // Determine whether the submit button should be enabled or disabled
    const submittable = todo.length > 0; // Enable if the 'todo' has content
  return (
    <div className={styles.todoform}>
        <form onSubmit={handleSubmit}>
            <input 
            value={todo}
            onChange={handleChange} 
            className={styles.todoinput} 
            placeholder="Add a Todo Task"
            >   
            </input>
            <button 
            type="submit" 
            className={styles.todobutton}
            disabled={!submittable} // Disable button if 'submittable' is false
            >Add to List
            </button>
        </form>
    </div>
  )
}

export default Form