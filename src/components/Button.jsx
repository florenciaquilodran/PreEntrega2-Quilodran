function Button(props){

  function hacerClick(){
    console.log("click")
  }

    return(
        <button className="btn" onClick={hacerClick}>{props.texto}</button>
    )
}
export default Button