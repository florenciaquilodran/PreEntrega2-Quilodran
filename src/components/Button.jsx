import { useState } from "react"

function Button(){
  const [estado, setEstado] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  const hacerClick = () => {
    console.log(!estado)
  }

  window.addEventListener("resize",()=>{
    const ancho = window.innerWidth
    if (ancho > 1000){
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }})

    return(
        <button className="p-4 mx-2 transition-all duration-150 rounded-md bg-red hover:bg-violet-600" onClick={hacerClick}>Ver mas</button>
    )
}
export default Button

