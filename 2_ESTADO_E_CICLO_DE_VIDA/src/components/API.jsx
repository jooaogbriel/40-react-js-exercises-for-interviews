import { useEffect, useState } from "react"

const Api = () => {

    const [data, setData] = useState(null)

    useEffect(()=> {
        setTimeout(()=> {
            setData({ message: "Dados chegaram"})
        },2000)
    },[])

    if (!data) {
            return <p> Carregando... </p>
    }
    
    return (
        <div>{data.message}</div>
    )
}

export default Api