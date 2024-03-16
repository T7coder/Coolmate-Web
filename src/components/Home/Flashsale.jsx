import React, { useEffect, useState } from 'react'
import '../../styles/Home/Flashsale.css'

import { GrLinkNext } from "react-icons/gr";

import bannerFlashsale from '../../assets/images/Banner/bannerFlashsale.jpg'
import product1 from '../../assets/images/product/product1.jpg'
import product2 from '../../assets/images/product/product2.jpg'

function Flashsale() {
  const listProduct = [{ image: product2, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" }
    , { image: product1, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" }
    , { image: product2, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" }
    , { image: product1, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" }
    , { image: product2, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" },
  { image: product2, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" },
  { image: product2, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" },
  { image: product2, title: "Áo tay dài Oversize 84Rizing Mickey Hockey", price: "???đ", priceOrigin: "399.000đ" }]
  
  const [countProductList,setCountProductList]=useState(0)
  return (
    <div className='Flashsale_container'>
      <div className='Flashsale_banner'>

        <img src={bannerFlashsale} alt="" />

        <div>
          <div>
            <p>12:00 - 14:00</p>
            <p>SẮP DIỄN RA</p>
          </div>

          <div>
            <p>20:00 - 22:00</p>
            <p>SẮP DIỄN RA</p>
          </div>
        </div>

      </div>


      <div>
        <GrLinkNext className='Flashsale_ButtonNext' onClick={()=>countProductList!=listProduct.length-4?setCountProductList(countProductList+4):setCountProductList(0)} />

        <li>
          {listProduct.map((value, index)=>{
            if(index>=countProductList && index<=countProductList+3)
              return (
              <ul key={index}>
                <img src={value.image} alt="" />
                <div>
                  <p>{value.title}</p>
                  <div>
                    <h2>{value.price}</h2>
                    <div>
                      <p>{value.price}</p>
                      <hr />
                    </div>
                  </div>
                </div>
              </ul>)
          })
         
          }
        </li>
      </div>
    </div>
  )
}

export default Flashsale
