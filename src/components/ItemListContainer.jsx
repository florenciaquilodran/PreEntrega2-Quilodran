import ItemList from "./ItemList";
import { useState } from "react";
import { useEffect } from "react";
import { app } from "../FirebaseConfig";
import { getFirestore , collection , addDoc } from "firebase/firestore";

const db = getFirestore(app);
const collectionDeProductos = collection(db,"productos")
const consulta = addDoc(collectionDeProductos, {
    "title":"Essence Mascara Lash Princess",
    "description":"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category":"beauty",
    "price":9.99,
    "stock":5,
    "images":["https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"],
})

console.log(consulta)

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