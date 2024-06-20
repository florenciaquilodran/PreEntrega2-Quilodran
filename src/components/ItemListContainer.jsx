import ItemList from "./ItemList";
import { useState } from "react";

function ItemListContainer(){
    
    
    const [estado, setEstado] = useState()

    fetch('https://dummyjson.com/products')
    .then((res) => {return res.json()})
    .then((data) => {console.log(data.products)});
    
    return (
            <ItemList/>        
    )
}

export default ItemListContainer 