import { useEffect, useState } from "react";

const CheckLarg = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect (() => {
        function alterWitdth(){
            setWidth(window.innerWidth)
            window.addEventListener("resize", alterWitdth)
        }
        return alterWitdth()
    },[])

    return (
        <div>
            <p>{width}</p>
        </div>
    )
}

export default CheckLarg