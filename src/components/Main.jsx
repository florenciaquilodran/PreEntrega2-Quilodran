import Button from "./Button";
import ItemListContainer from "./ItemListContainer";


function Main(){
    return (
        
        <main className="p-4 bg-[rgba(255,255,255,0.2)] grow">
            <h2>Home</h2>
            <img src="http://www.bolundberg.com/wp-content/uploads/2024/01/Epstein_eget-3-1.jpg" alt="imagen" width={100}/>
            <p>Here you can find something awesome for your space</p>
            <Button texto="ver mas"/>
            <Button texto="detalles"/>

            <ItemListContainer/>
        </main>
    )
}

export default Main;