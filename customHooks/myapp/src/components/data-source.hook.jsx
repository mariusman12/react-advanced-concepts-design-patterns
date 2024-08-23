
import { useState,useEffect } from "react"
import axios from 'axios'

export const useDataSource = (getData) =>{

    const [data,setData] = useState(null)

    useEffect( () =>{
        (async () =>{
            const data = await getData()
            setData(data)
        }) ()
    },[getData])


    return data
}