import './App.css'
import ButtonComponent from './components/ButtonComponent'
import { HelloWorld } from './components/HelloWorld'
import PropsComponent from './components/PropsComponent'

function App() {
  return (
    <>
      <HelloWorld />
      <ButtonComponent />
      <PropsComponent  name="Joao" /> 
    </>
  )
}

export default App;
