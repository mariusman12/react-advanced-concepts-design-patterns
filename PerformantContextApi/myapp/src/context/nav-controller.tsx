import React, {useCallback, useContext, useMemo, useReducer, useState} from "react";


type State = {
    collapse:boolean,
}

type Action = {type:"open" | "close" | "toggle"}

const defaultState: State = {
    collapse:false,
}

const reducer = (state:State, action:Action): State=>{
    switch(action.type){
        case "open":
            return {...state, collapse: false}
        case "close":
            return {...state, collapse: true}
        case "toggle":
            return {...state, collapse:!state.collapse}
        default:
            throw new Error("Invalid action")
    }
}

const Context = React.createContext({
    collapse:false,

})

const ContextApi = React.createContext({
    open:() =>{},
    close:() =>{},
    toggle:() =>{},
})


export const useNavData = () => useContext(Context)

export const useNavApi = () => useContext(ContextApi)

const NavController = ({children} :{children : React.ReactNode}) =>{
    const [ state,dispatch] = useReducer(reducer,defaultState)


    const data=useMemo (()=>{
        return {collapse : state.collapse}
    },[state])


    const api=useMemo (()=>{
        return {open : () => dispatch({type:"open"}),close :() => dispatch({type:"close"}),toggle:() => dispatch({type:"toggle"}) }
    },[dispatch])

    return <Context.Provider value={data}>
                <ContextApi.Provider value={api}>
                    {children}
                </ContextApi.Provider>
          </Context.Provider>
}

export default NavController