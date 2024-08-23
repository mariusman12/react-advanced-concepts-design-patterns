import React, { useState } from "react"

 


 export const UncontrolledFlow = ({children, onDone}) =>{
    const [data,setData] = useState({})
    const [currentStepIndex,setCurrentStepIndex] = useState()
    const currentChild = React.Children.toArray(children)
    console.log('Current child = ', currentChild)

    return currentChild;
 }