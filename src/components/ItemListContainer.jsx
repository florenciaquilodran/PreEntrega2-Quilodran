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

    const cambiarPaginaUno = () => {
        setPagina(1)
    }
    const cambiarPaginaDos = () => {
        setPagina(2)
    }
    const cambiarPaginaTres = () => {
        setPagina(3)
    }
    
    return (
        <>
        <div>
            <button onClick={cambiarPaginaUno} className="p-3 m-3 bg-lime-400">Pagina 1</button>
            <button onClick={cambiarPaginaDos} className="p-3 m-3 bg-lime-400">Pagina 2</button>
            <button onClick={cambiarPaginaTres} className="p-3 m-3 bg-lime-400">Pagina 3</button>
        </div>
            <ItemList productos={productos}/>    
            </>    
    )
}

export default ItemListContainer 