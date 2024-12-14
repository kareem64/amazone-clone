import Header from "./component/Header"
import{Routes,Route}from 'react-router-dom'
import Home from "./component/Home"
import Login from "./component/Login"
import Orders from "./component/Orders"
import Cart from "./component/Cart"
import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/GlobaleState"
import { auth } from "./firebase"


function App() {
  const {dispatch} = useContext(GlobalContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({type: 'SET_USER',user: authUser})
      }else{
        dispatch({type: 'SET_USER', user: null})
      }
    })

  },[])

  return (
  
      <div>
    <Header/>
    <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/orders" element={<Orders/>}/>
     <Route  path="/cart" element={<Cart/>}/>
     <Route  path="*" element={<h1>Page Not Found !</h1>}/>

    </Routes>
      </div>
    
    
  
  )
}

export default App
