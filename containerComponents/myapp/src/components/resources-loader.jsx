import { useEffect,useState } from "react"
import React from "react";
import axios from 'axios'


export const ResourceLoader = ({resourceUrl, resourceName ,children}) =>{ 
    const [resource,setResource] = useState(null);

    useEffect(() =>{
        (async () =>{
          const response = await axios.get(resourceUrl)
          setResource(response.data)
        }) ()
    },[resourceUrl])
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