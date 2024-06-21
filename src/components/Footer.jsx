import NavBar from "./NavBar"
import { useDesktop } from "../util"


function Footer(){
    
    const isDesktop = useDesktop()

    console.log(isDesktop)
    
    return(
        
<footer className="p-4 text-center">
      <p>Copyright - FLORENCIA QUILODRAN</p>
      <NavBar isHeader={false}/>
      </footer>


        
    )
}

export default Footer