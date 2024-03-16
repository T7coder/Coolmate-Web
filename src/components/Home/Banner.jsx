import React from 'react'

import '../../styles/Home/Banner.css'

import banner1 from '../../assets/images/Banner/banner1.jpg'
import banner2 from '../../assets/images/Banner/banner2.jpg'
import banner3 from '../../assets/images/Banner/banner3.jpg'
function Banner() {
  return (
    <div className='Banner_container'>
      <img src={banner1} alt="" />
      <li>
        <ul>
            <a href=""></a>
            <img src={banner2} alt="" />
              
            <div>
                <p>Quà tặng chỉ còn</p>
                <div>
                   <h2>3798</h2>
                   <p>suất</p>
                </div>
            </div>
        </ul>
        <ul>
            <a href=""></a>
            <img src={banner3} alt="" />
        </ul>
      </li>
    </div>
  )
}

export default Banner
