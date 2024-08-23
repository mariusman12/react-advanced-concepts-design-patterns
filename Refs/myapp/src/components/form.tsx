import React, {ChangeEvent, useState, useRef} from 'react'
import Input from "./input";

type Props = {}

const Form = (props: Props) => {

  const [ username,setUserName ] = useState("")
  const [ password,setPassword ] = useState("")

// const [value,setValue] = useState ('')

  const ref   = useRef<HTMLInputElement>(null)


  const ChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
    const { name,value} = e.target
    if (name === "username"){
      setUserName(value)
    }else{
      setPassword(value)
    }

  }

  const onSubmit = () =>{
    if(username.length < 1 ){
      ref.current?.focus()
    }else{
      //submit data to server
    }
  }
  return (
      <>
        {/*<Input ChangeHandler={setUserName} inputRef={ref}/>*/}
        <Input ChangeHandler={setUserName} ref={ref}/>
        <input type={"password"} name="password" value={password} onChange={ChangeHandler}/>
        <button onClick={onSubmit}>Submit</button>
      </>
  )
}

export default Form

