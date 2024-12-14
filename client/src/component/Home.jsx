import React from 'react'
import bannar from '../assets/icons/banner.png'
import Product from './Product'
import'../component/Home.css'
const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
       <img src={bannar} alt="bannar image" />
      <div className='product'>
      <Product/> 
      </div>
      </div>
    </div>
  )
}

export default Home
