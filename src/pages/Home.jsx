import React, { useState } from 'react'
import Header from '../components/Home/Header.jsx'
import Banner from '../components/Home/Banner.jsx'
import Flashsale from '../components/Home/Flashsale.jsx'
import NewProduct from '../components/Home/NewProduct.jsx'
import BestSale from '../components/Home/BestSale.jsx'
import Product from '../components/Home/Product.jsx'
import GiveProduct from '../components/Home/GiveProduct.jsx'
import Footer from '../components/Home/Footer.jsx'
import '../styles/Home/Home.css'


function Home() {
  
  return (
      <div className='Home'>
       <Header/>
        <Banner/>
        <Flashsale/>
        <NewProduct/>
        <BestSale/>
        <Product/>
        <GiveProduct/>
        <Footer/>
      </div>
  )                                                          
}

export default Home
