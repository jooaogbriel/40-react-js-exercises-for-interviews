import { useState } from "react"

export const TodoList2 = () => {

    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')
    const [filter, setFilter] = useState('')

    const addTodo = () => {
        setTodos([...todos, { id: Math.random(), task: task}])
        setTask('')
    } 

    return (
        <div>
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)} />
            <button onClick={addTodo}>Adicionar</button>
            <ul>{todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
            </ul>
            <label>Filtro:</label>
            <input type="text" name="" id="" value={filter} onChange={(e)=> setFilter(e.target.value)} />
            <ul>{todos.filter((todo) => todo.task.includes(filter)).map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
            </ul>
        </div>
    )
}
