import Button from "./Button";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutUs from "./AboutUs";

function Main(){
    return (   
        <main className="p-4 bg-[rgba(255,255,255,0.2)] grow">
            <img src="https://cdn.pixabay.com/photo/2022/07/16/20/05/universe-7325913_1280.jpg" alt="UniversoImg" width={100}/>
            <p>Here you can find something awesome for your space</p>
            <Button texto="ver mas"/>
            <hr/>
            <br></br> 
        <Routes>        
        <Route path="/category/aboutus" element={ <AboutUs/>}/>     
        </Routes>   
        </main> 
    )
}

export default Main;