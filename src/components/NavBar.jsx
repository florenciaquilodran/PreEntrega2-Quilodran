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
              <Link to='/terminosycondiciones'>Términos y condiciones</Link>
              <Link to='faq'>F.A.Q</Link>
              <Link to='contacto'>contacto</Link>            
      </nav>
    )
  }
} 

export default NavBar 