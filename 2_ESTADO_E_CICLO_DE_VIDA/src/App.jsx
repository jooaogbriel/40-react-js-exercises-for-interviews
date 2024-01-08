import './App.css'
import ButtonComponent from './components/ButtonComponent'
import { Clock } from './components/Clock';
import  Toggle  from './components/Toggle'
import {TodoList2} from './components/TodoListFilter';
import TodoList from './components/TodoList';
import CheckLarg from './components/CheckLarg';
import Api from './components/API';

function App() {
  return (
    <>
      <h2>Sessão 2 - ESTADOS E CICLOS DE VIDA</h2>
      <h2>Toggle</h2>
      <Toggle  name="Joao" /> 
      <h2>Número de clicks no botão</h2>
      <ButtonComponent  />
      <h2>Hora em tempo real usando useEffect</h2>
      <Clock />
      <h2>TODO LIST</h2>
      <TodoList/>
      <h2>TODO LIST Filter</h2>
      <TodoList2/>
      <h2>Check Width</h2>
      <CheckLarg />
      <h2>Chamada de uma api fake</h2>
      <Api />
    </>
  )
}

export default App;
