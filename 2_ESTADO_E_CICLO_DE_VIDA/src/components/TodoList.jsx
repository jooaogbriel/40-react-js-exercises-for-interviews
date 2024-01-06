import { useState } from "react"

const TodoList = () => {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    const addTodo = () => {
        setTodos([...todos, {id: Math.random(), task: task}])
    }

  return (
    <div>
        <label>
            Nome:
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            </label>
        <button onClick={addTodo}>Adicionar</button>
        <ul>
            {todos.map((todo)=> (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList