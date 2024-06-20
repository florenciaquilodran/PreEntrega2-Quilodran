import CartWidget from "./CartWidget"


function NavBar(props){


  
  if(props.isHeader == true) {
    return (
        <nav className="flex gap-4">
            
              <a href='#'>Graphic Design</a>
              <a href='#'>About Us</a>
              <a href='#'>Shop</a>
              <a href='#'>Sales</a>
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