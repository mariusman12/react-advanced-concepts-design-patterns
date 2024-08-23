import { useState } from "react"
import { styled } from "styled-components"


const ModalBakcGround = styled.div`
    position:absolute;
    left:0;
    right:0;
    overflow:auto;
    background-color:red;
    width:100%
    height:100%
`;
const ModalContent = styled.div`
    margin:10% auto;
    padding:24px;
    background-color:'white',
    width:50%;
`;


export const Modal = ({children})=>{
    const [show,setShow ] = useState(false)

    return(
        <>
    <button onClick={() =>setShow(true)}>Show Modal</button>
      {show && ( 
      <ModalBakcGround onClick={()=>setShow(false)}>
        <ModalContent onClick={(event) => event.stopPropagation()}>
            <button onClick={()=>setShow(false)}>Close</button>
            {children}
        </ModalContent>
     </ModalBakcGround>)  
   }
   </>
    )


}