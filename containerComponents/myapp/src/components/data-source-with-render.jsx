import { useEffect,useState } from "react"
import React from "react";
import axios from 'axios'


export const DataSourceWithRender = ({getData = () =>{}, render}) =>{ 
    const [resource,setResource] = useState(null);

    useEffect(() =>{
        (async () =>{
          const data = await getData()
          setResource(data)
        }) ()
    },[getData])
    return render(resource)
} 