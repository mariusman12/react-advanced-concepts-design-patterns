import React,{useState} from 'react'
import {ModalDialog} from "./modal-dialog";
import useToggleDialog from "../hooks/useDialog";
type Props = {}

const ToggleButtonWithDialog = (props: Props) => {
    import {isVisible,show,hide} = useToggleDialog()

  return (
   <div>
       <Button onClick={show}>Open Dialog</Button>
       {isVisible ? <ModalDialog onClose={hide}/> : null}
   </div>
  )
}

export default ToggleButtonWithDialog