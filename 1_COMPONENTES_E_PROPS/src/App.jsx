import './App.css'
import { ComponentWith3Props } from './components/ComponentWith3Props'
import { HelloWorld } from './components/HelloWorld'
import PropsComponent from './components/PropsComponent'
import { CompositionTheComponents } from './components/CompositionTheComponents'
import  ButtonComponent  from './components/ButtonComponent'

function App() {
  const members = [
    {
        name: 'João',
        age: 20,
        job: 'engennier'
    },
    {
        name: 'Isis',
        age: 22,
        job: 'Doctor'
    },
    {
        name: 'João',
        age: 60,
        job: 'mechanic'
    }
]
  return (
    <>
      <h2>Crie um componente:</h2>
      <HelloWorld />
      <h2>Utilizando Props</h2>
      <PropsComponent  name="Joao" /> 
      <h2>Múltiplas props</h2>
      <ComponentWith3Props name='João' age={20} job='Engennier'  />
      <h2>Composição de componentes</h2>
      <CompositionTheComponents members={members} />
      <h2>Botão usando estado</h2>
      <ButtonComponent />
    </>
  )
}

export default App;
