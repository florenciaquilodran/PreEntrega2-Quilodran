import Button from "./Button";

function Main(){
    return (        
        <main className="p-4 bg-[rgba(255,255,255,0.2)] grow">
            <img src="https://cdn.pixabay.com/photo/2022/07/16/20/05/universe-7325913_1280.jpg" alt="UniversoImg" width={100}/>
            <p>Here you can find something awesome for your space</p>
            <Button texto="ver mas"/>
            <hr/>
               <br></br>    
        </main>
    )
}

export default Main;