import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {Form}  from './Components/Form'
import  DynamicForm  from './Components/DynamicForm'


function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>3 - Eventos e Formulários</h1>
      <h2>Formulário simples</h2>
      <Form />
      <h2>Formulário Dinámico</h2>
      <DynamicForm />
    </>
  )
}

export default App
