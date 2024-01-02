import './App.css'
import { ComponentWith3Props } from './components/ComponentWith3Props'
import { HelloWorld } from './components/HelloWorld'
import PropsComponent from './components/PropsComponent'

function App() {
  return (
    <>
      <h2>Crie um componente:</h2>
      <HelloWorld />
      <h2>Utilizando Props</h2>
      <PropsComponent  name="Joao" /> 
      <h2>Múltiplas props</h2>
      <ComponentWith3Props age={20} cpf='123-456-789-10' rua='Flores'  />
    </>
  )
}

export default App;
