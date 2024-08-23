import { useEffect,useState } from "react"
import React from "react";
import axios from 'axios'


export const DataSource = ({getData = () =>{}, resourceName ,children}) =>{ 
    const [resource,setResource] = useState(null);

    useEffect(() =>{
        (async () =>{
          const data = await getData()
          setResource(data)
        }) ()
    },[getData])
    return(
        <>
            {React.Children.map(children,child =>{ // facem map pe toti copii 
                if(React.isValidElement(child)){ // verificam daca copii sunt elemente valide
                    return React.cloneElement(child,{ [resourceName]: resource }) //trimitem proprietatea cu numele 
                }
                return child // returnam orice element ce nu e valid 
            })}
        </>
    )
}