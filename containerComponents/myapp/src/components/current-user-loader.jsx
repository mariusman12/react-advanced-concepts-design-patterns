import { useEffect,useState } from "react"
import React from "react";
import axios from 'axios'


export const CurrentUserLoader = ({children}) =>{
    const [user,setUSer] = useState(null);

    useEffect(() =>{
        (async () =>{
          const response = await axios.get("/current-user")
          setUSer(response.data)
        }) ()
    },[])
    return(
        <>
            {React.Children.map(children,child =>{
                if(React.isValidElement(child)){
                    return React.cloneElement(child,{ user })
                }
                return child
            })}
        </>
    )
}