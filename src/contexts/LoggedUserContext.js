import { createContext, useState } from "react"


export const LoggedUserContext=createContext();
export const LoggedUserContextProvider=(props)=>{
    var [loggedUser,setLoggedUser]=useState({
        'id':'',
        'name':'',
        'email':''
    })
    return(
        <LoggedUserContext.Provider value={{loggedUser:loggedUser,setLoggedUser:setLoggedUser}}>
            {props.children}
        </LoggedUserContext.Provider>
    )
}