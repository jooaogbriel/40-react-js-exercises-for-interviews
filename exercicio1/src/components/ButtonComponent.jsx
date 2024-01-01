import { useState } from "react"

const ButtonComponent = () => {

  const [count, setCount] = useState(0)

  function addCount(){
    setCount(count+1)
    console.log(count)
  }

  return (
    <>
         <button onClick={addCount}>ButtonComponent</button>
         <div>{count}</div>
    </>
  )
}

export default ButtonComponent