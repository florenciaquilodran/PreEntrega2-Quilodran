
import NavBar from "./NavBar"

function Header () {

    
    return (
        <header className="flex justify-between p-4">
        <NavBar isHeader={true}/>
        <h1 className="text-2xl font-bold">THE UNIVERSE STORE</h1>
        </header>   
    )
}

export default Header 