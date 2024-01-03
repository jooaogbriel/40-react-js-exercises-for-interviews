import { useState } from "react";

const Toggle = () => {

    const [toggle, setToggle] = useState(true)

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>{toggle ? "ON" : "OFF"}</button>
        </div>
        
    )
};

export default Toggle;
