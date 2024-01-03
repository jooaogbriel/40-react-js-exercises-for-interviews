import { useState } from "react";

const Toggle = () => {

    const [toggle, setToggle] = useState(true)
    const [count, setCount] = useState(0)

    function attStates(){
        setToggle(!toggle) 
        return setCount(count +1)
    }

    return (
        <div>
            <button onClick={() => attStates()}>{toggle ? "ON" : "OFF"}</button>
            <p>números de clicks no botão com dois states: {count}</p>
        </div>
        
    )
};

export default Toggle;
