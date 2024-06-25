import { Route , Routes } from "react-router-dom"
import NavBar from "./NavBar"

function Header () {

    
    return (
        <header className="flex justify-between p-4">
        <NavBar isHeader={true}/>
        <Routes>
            <Route path="/category/shop" element={<input/>} className="bg-emerald-400" />
            
        </Routes>
        <h1 className="text-2xl font-bold">THE UNIVERSE STORE</h1>
        </header>   
    )
}

export default Header 