import {createContext, useReducer,useContext}from 'react'
import AppReducer from './AppReducer'
import { initialState } from './AppReducer'

export const GlobalContext = createContext()




const GlobaleProvider = (props) => {
    const [state,dispatch]= useReducer(AppReducer,initialState)
  
 return  <GlobalContext.Provider value = {{basket:state.basket,user:state.user,dispatch:dispatch}}>
    {props.children}
  </GlobalContext.Provider>
}

export default GlobaleProvider;

export const AuthUser =()=>{
    return useContext(GlobalContext)
}


