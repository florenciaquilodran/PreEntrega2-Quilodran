import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";

function ItemListContainer(){
    
    const [productos, setProductos] = useState([])
    const [pagina, setPagina] = useState(1)
    
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((res) => {return res.json()})
        .then((data) => {console.log(data.products)
            setProductos(data.products)
        })
    }, [pagina])


    return (
        <>
    
            <ItemList productos={productos}/>    
            </>    
    )
}

export default ItemListContainer 