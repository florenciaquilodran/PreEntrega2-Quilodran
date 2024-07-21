import { ShoppingCart } from "lucide-react"
import { useContext } from "react";
import { miContexto } from "./CartProvider"

function CartWidget(){

    const valorDelContexto = useContext(miContexto)

    return (
    <>
        <nav> 
        {valorDelContexto.cant}               
            <ShoppingCart/>
        </nav>
       
    </>
    )
}
export default CartWidget;