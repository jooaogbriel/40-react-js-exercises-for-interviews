import './App.css'
import ButtonComponent from './components/ButtonComponent'
import { Clock } from './components/Clock';
import  Toggle  from './components/Toggle'
import {TodoList2} from './components/TodoList2';

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
      <TodoList2/>
    </>
  )
}

export default App;
