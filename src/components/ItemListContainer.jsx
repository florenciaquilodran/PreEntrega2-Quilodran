import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";

function ItemListContainer(){
    
    
    const [estado, setEstado] = useState([])


    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => {return res.json()})
        .then((data) => {console.log(data.products)
            setEstado(data.products)
        })

    }, [])
    
    return (
            <ItemList/>        
    )
}

export default ItemListContainer 