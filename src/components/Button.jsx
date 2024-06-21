import { useState } from "react"
import { useDesktop } from "../util"

function Button(){
  
  const [estado, setEstado] = useState(false)
  const isDesktop = useDesktop()
  

  const hacerClick = () => {
    console.log(!estado)
  }


    if (estado === false) {
      return (
        <div>
          <button onClick={hacerClick} className="btn">Click me</button>
        </div>
      )
    }

    if (isDesktop) {
      return (
        <div>
          <button onClick={hacerClick} className="btn">Click</button>
          <div className="p-4 text-red-900 rounded-sm bg-slate-300">
            soy un popup
          </div>
        </div>
      )
    }



    return(
      <div>
        <button className="p-4 mx-2 transition-all duration-150 rounded-md bg-red hover:bg-violet-600" onClick={hacerClick}>Ver mas</button>
        </div>
    )
}
export default Button

