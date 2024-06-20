

function Button(props){

  const hacerClick = () => {
    console.log("click")
  }

    return(
        <button className="p-4 mx-2 transition-all duration-150 rounded-md bg-red hover:bg-violet-600" onClick={hacerClick}>{props.texto}</button>
    )
}
export default Button

