import {useRef, useState,forwardRef} from 'react'
import {createPortal} from 'react-dom'
import './App.css';
import {Input} from './input';

function App() {
  const [show,setShow]= useState(false)

  const inputRef= useRef()

  function submitHandler(e) {
    e.preventDefault();

    console.log(inputRef.current.value)
  }

  return (
    // <div style={{position:'absolute',marginTop:'200px'}}>
    //   <h1>Other Content</h1>

    //   <button onClick={() => setShow(true)}> Show message</button>

    //   <Alert show={show} onClose={()=>setShow(false)}>
    //     A sample message to show<br/>
    //     Click it to close
    //   </Alert>

    // </div>
    <>
      <form onSubmit={submitHandler}>
        <Input ref={inputRef}/>
        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

const Alert = ({children,show, onClose}) =>{
  if (!show) return;

  return createPortal(
    <div className="alert" onClick={onClose}>
      {children}
    </div>,
    document.body

  )
}



export default App;
