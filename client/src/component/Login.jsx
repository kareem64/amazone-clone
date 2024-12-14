import React, { useContext } from 'react'
import '../component/Login.css'
import {Link}from 'react-router-dom'
import login_logo from '../assets/icons/login_logo.png'
import{createUserWithEmailAndPassword,signInWithEmailAndPassword}from 'firebase/auth'
import { auth } from '../firebase'
import { GlobalContext } from '../context/GlobaleState'
import {AuthUser}from '../context/GlobaleState'
import {useNavigate}from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [email,setEmail]=React.useState('');
  const [password,setPassword]=React.useState('');
const login =(e)=>{
   e.preventDefault();
   signInWithEmailAndPassword(auth,email,password).then((auth)=>{
    if(auth){
      navigate('/')
}
   })}
  const register=(e)=>{
   e.preventDefault();
   createUserWithEmailAndPassword(auth,email,password).then((auth)=>{
    if(auth){
      navigate('/')
 
    }
   }).catch((err)=>{
     console.log(err.message)
     alert(err.message)
   });
  }
  const {user} = AuthUser()
  console.log(user)
  return (
    <div className='login'>
     <Link>
     <img className='logo' src={login_logo} alt="" />
     </Link>
     <div className='login-container'>
<h5>Sign in</h5>
<form>
<input type="email"  name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="password"  name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button className='signin-btn' type="submit" onClick={login}>Sign in</button>
<p>الأستمرار يعنى الموافقة على الشروط والأحكام الخاصة بموقع امازون المضروب</p>
<button className='account-btn' onClick={register}>Create new Account</button>
</form>

     </div>
    </div>
  )
}

export default Login
