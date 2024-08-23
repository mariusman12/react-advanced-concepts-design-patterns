import React, {ForwardedRef, forwardRef} from 'react'


type Props ={
  ChangeHandler:(val:string)=>void,
  ref: React.RefObject<HTMLInputElement>,
}

// const Input = ({ChangeHandler,inputRef}: {ChangeHandler:(val:string)=>void; inputRef: React.RefObject<HTMLInputElement>}) => {
const Input = ({ChangeHandler}:Props, ref:ForwardedRef<HTMLInputElement> )=> {

  return (
      <input type={"text"} ref={ref} name="username"  onChange={(e) => ChangeHandler(e.target.value)}/>
  )
}

export default forwardRef(Input)
