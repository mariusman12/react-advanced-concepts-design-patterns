
import React from 'react'
export const UncontrollerdForm = () =>{


    const nameInputRef = React.createRef() // ca sa putem utiliza 
    const ageInputRef = React.createRef() // ca sa putem utiliza 
    const submitHandler =(e) =>{
        console.log(nameInputRef.current.value)
        console.log(ageInputRef.current.value)
        e.preventDefault()
    }
    return (
        <form onSubmit={submitHandler}>
            <input name="name" type="text" placeholder="Name" ref={nameInputRef}/>
            <input name="age" type="number" placeholder="Age" ref={ageInputRef}/>
            <input  type="submit" value="Submit"/>
        </form>
    )
}