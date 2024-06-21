import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


function NavBar(props){  
  if(props.isHeader == true) {
    return (
        <nav className="flex gap-4">            
              <Link to="/">Home</Link>
              <Link to="/category/aboutus">About Us</Link>
              <Link to="/category/shop">Shop</Link>
              <CartWidget/>                      
        </nav>
    ) 
  } else {
    return (
      <nav className="flex justify-center gap-4 text-xs">
        
              <a href='#'>Términos y condiciones</a>
              <a href='#'>F.A.Q</a>
              <a href='#'>contacto</a>
            
      </nav>
    )
  }


}


    


export default NavBar 