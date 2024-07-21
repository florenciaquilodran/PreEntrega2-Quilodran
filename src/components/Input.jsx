function Input({ onStateUplifting }) {

    console.log(onStateUplifting)

    const handleChange = (e) => {
        console.log(e.target.value.length)
        onStateUplifting()
    }

    return (
        <input type="text" onChange={handleChange} />
    )
}
export default Input