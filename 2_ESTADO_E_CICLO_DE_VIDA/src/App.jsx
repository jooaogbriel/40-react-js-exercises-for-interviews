import './App.css'
import { ComponentWith3Props } from './components/ComponentWith3Props'
import { HelloWorld } from './components/HelloWorld'
import  Toggle  from './components/Toggle'

function App() {
  return (
    <>
      <h2>Crie um componente:</h2>
      <HelloWorld />
      <h2>Toggle</h2>
      <Toggle  name="Joao" /> 
      <h2>Múltiplas props</h2>
      <ComponentWith3Props age={20} cpf='123-456-789-10' rua='Flores'  />
    </>
  )
}

export default App;
