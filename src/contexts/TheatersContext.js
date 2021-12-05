import { createContext, useReducer, useState } from "react";
import { EventsReducer } from "../reducers/EventsReducer";
import { TheatersReducer } from "../reducers/TheatersReducer";


export const TheatersContext=createContext();
export const TheatersContextProvider=(props)=>{
    var initialEvents={
      'events':[]  
    }
    var initialTheaters={
        'theaters':[]
    }
    var [loggedUser,setLoggedUser]=useState({
        'id':'',
        'name':'',
        'email':''
    })
    const[events,dispatchEvents]=useReducer(EventsReducer,initialEvents)
    const[theaters,dispatchTheaters]=useReducer(TheatersReducer,initialTheaters)
    return(
        <TheatersContext.Provider value={{events:events,dispatchEvents:dispatchEvents,theaters:theaters,dispatchTheaters:dispatchTheaters,loggedUser:loggedUser,setLoggedUser:setLoggedUser}}>
            {props.children}
        </TheatersContext.Provider>
    )
}