import './App.css'
import ButtonComponent from './components/ButtonComponent'
import  Toggle  from './components/Toggle'

function App() {
  return (
    <>
      <h2>Sessão 2 - ESTADOS E CICLOS DE VIDA</h2>
      <h2>Toggle</h2>
      <Toggle  name="Joao" /> 
      <h2>Número de clicks no botão</h2>
      <ButtonComponent  />
    </>
  )
}

export default App;
