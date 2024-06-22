import Button from "./Button"

function ItemList({ productos }) { 
    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {productos.map((producto,indice) => {
        console.log(producto)
        return(
            <>
            <article key={indice} className="p-4 text-black bg-white rounded-md shadow-xl">
                <h2>{producto.title}</h2>
                <p>${producto.price}</p>
                <img src={producto.images[0]} alt={producto.title}/>
                <Button>Ver Detalle</Button>
            </article>
            </>
        )
    })}
        </section>
    )
}

export default ItemList