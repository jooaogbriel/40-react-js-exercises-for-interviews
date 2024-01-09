import { useState } from "react"

export const Form = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        senha: ''
    })

    const getForm = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value
        })
    }
    const consol = (event) => {
        event.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={consol}>
                <input type="text" value={data.name} name="name" id="" onChange={getForm} />
                {data.name}
                <input type="text" value={data.email} name="email" id="" onChange={getForm} />
                <input type="text" value={data.senha} name="senha" id="" onChange={getForm} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
