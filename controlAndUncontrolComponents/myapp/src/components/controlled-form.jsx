import React, {useState, useEffect} from 'react'

export const ControlledForm = () =>{

    const [name, setName]=useState('')
    const [age, setAge]=useState(0)
    const [error,setError] = useState('')
    useEffect(() =>{
        if (name.length<1){
            setError("name cannot be empty")
        }
        else{
            setError("")
        }
    },[name,age])


    return (
    <form >
        {error && <h1>{error}</h1>}
        <input name="name" type="text" placeholder="Name" value={name} onChange={ e =>setName(e.target.value)}/>
        <input name="age" type="number" placeholder="Age" value={age} onChange={ e =>setAge(e.target.value)}/>
        <button>Submit</button>
    </form>
    )
}