import Input from "./Input"
import { useState } from "react"

const Carrito = () => {

    const [data, setData] = useState(0)
    const [error, setError] = useState(false)
const handleSubmit = (e) => {
    e.preventDefault()
}

const handleStateUplifting = (long) => {
    console.log("state uplifting")
    console.log("Cant de caract : " , long)

    setData(long)

    if(long > 10) {
        setError(true)
    } else {
        setError(false)
    }
 }

    return (
        <div>
            <h2>Carrito</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    onStateUplifting={handleStateUplifting}
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Carrito