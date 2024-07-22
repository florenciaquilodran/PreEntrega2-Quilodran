import Button from "./Button";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutUs from "./AboutUs";


function Main(){
    return (   
        <main className="p-4 bg-[rgba(255,255,255,0.2)] grow">
            <hr/>
            <br></br> 
        <Routes>        
        <Route path="/category/aboutus" element={ <AboutUs/>}/>     
        </Routes>   
        </main> 
    )
}

export default Main;