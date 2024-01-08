import { useState } from "react"

export const TodoList2 = () => {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    const addTodo = () => {
        setTodos([...todos, { id: Math.random(), task: task}])
    } 

    return (
        <div>
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
            <button onClick={addTodo}>Adicionar</button>
            <ul>{todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
            </ul>
        </div>
    )
}
