import { useEffect, useState } from "react";

export const Clock = () => {

    const [ time, setTime ] = useState(new Date()); // momento atual 
    
    useEffect(() => {
        const timer = setInterval(()=> {
            setTime( new Date())
        },1000)
        return () => {
            clearInterval(timer)
        }
      },[]);

    return (
        <p>{time.toLocaleTimeString()}</p>
    )
}
