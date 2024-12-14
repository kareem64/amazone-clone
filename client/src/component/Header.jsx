import React, { useContext } from "react";
import logo_icon from "../assets/icons/logo_icon.png";
import search from "../assets/icons/search.png";
import cart from "../assets/icons/shopping-cart.png";
import { Link } from "react-router-dom";
import '../component/Header.css'
import { AuthUser, GlobalContext } from "../context/GlobaleState";
import {auth}from '../firebase'
const Header = () => {
  const logOut =()=>{
    auth.signOut();
  }
  const {user} = AuthUser()
  return (
    <div className="header">
      <Link to={'/'}>
        <img className="logo" src={logo_icon} alt="logo" />
      </Link>
      <div className="search">
        <input type="text" placeholder="search" />
        <img src={search} alt="seardh" />
      </div>
     <div className="header-nav">
     <div className="log-in-out">

        <div className="user">{user?user.email:""}</div>
     
     {user?<div onClick={()=>logOut()} className="logout-in-btn">Log out</div>:<Link to={!user&&'/login'}><div className="login">LogIn</div></Link>} 
     </div>
      <Link to={"/orders"}>
        <div>Orders</div>
      </Link>
      <Link to={"/cart"}>
        <div className="cart">
          <img src={cart} alt="cart" />
          <span>5</span>
        </div>
      </Link>
     </div>
    </div>
  );
};

export default Header;
