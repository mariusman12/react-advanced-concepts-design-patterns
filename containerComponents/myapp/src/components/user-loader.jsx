import { useEffect,useState } from "react"
import React from "react";
import axios from 'axios'


export const UserLoader = ({userId,children}) =>{
    const [user,setUSer] = useState(null);

    useEffect(() =>{
        (async () =>{
          const response = await axios.get(`/users/${userId}`)
          setUSer(response.data)
        }) ()
    },[userId])
    return(
        <>
            {React.Children.map(children,child =>{ // facem map pe toti copii 
                if(React.isValidElement(child)){ // verificam daca copii sunt elemente valide
                    return React.cloneElement(child,{ user }) // adaugam propsu la componenta copil 
                }
                return child // returnam orice element ce nu e valid 
            })}
        </>
    )
}