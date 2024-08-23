import {useState} from "react";

const useToggleDialog = () =>{
    const [visible,setVisible]= useState(false)


    return {
        isVisible:visible,
        show: () => setVisible(true),
        hide: () => setVisible(false)
    }
}

export default useToggleDialog;