import React, { useEffect } from 'react'
import { GrLinkNext } from "react-icons/gr";
import { FaStar } from "react-icons/fa";
import '../../styles/Home/GiveProduct.css'

import product1 from '../../assets/images/NewProduct/product1.jpg'
import GiveProduct1 from '../../assets/images/GiveProduct/product1.jpg'
import GiveProduct2 from '../../assets/images/GiveProduct/product2.png'
import GiveProduct3 from '../../assets/images/GiveProduct/product3.png'
import GiveProduct4 from '../../assets/images/GiveProduct/product4.png'

function GiveProduct() {

    const listSubProd = [
    { info: "Đáng mua", img: product1, evaluate: "4,5", pushchase: "(321)", color: ["red", "gray"], title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", priceOrigin: "299.000đ", discount: "10%" },
    { info: "Đáng mua", img: product1, evaluate: "4,5", pushchase: "(321)", color: ["red", "gray"], title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", priceOrigin: "299.000đ", discount: "10%" }, 
    { info: "Đáng mua", img: product1, evaluate: "4,5", pushchase: "(321)", color: ["red", "gray"], title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", priceOrigin: "299.000đ", discount: "10%" }]
    const listProduct = [{ img: GiveProduct1, subList: listSubProd }, 
                         { img: GiveProduct2, subList: listSubProd }, 
                         { img: GiveProduct3, subList: listSubProd }]
    return (
        <div className='GiveProduct_container'>
            <li>
                {
                    listProduct.map((value, index) => {
                        return (
                            <ul key={index}>
                                
                                <div>
                                    <img src={value.img} alt="error" />

                                </div>
                                <li>
                                    {
                                        value.subList.map((valueSub, indexSub) => {
                                            return (
                                                <ul key={indexSub}>
                                                    <div>
                                                        <h2>{valueSub.info}</h2>
                                                        <img src={valueSub.img} alt="" />
                                                        <div>
                                                            <p>{valueSub.evaluate}</p>
                                                            <FaStar />
                                                            <p>{valueSub.pushchase}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <li className='Product_Color'>
                                                            <ul>
                                                                <p></p>
                                                            </ul>
                                                            <ul>
                                                                <p></p>
                                                            </ul>
                                                        </li>
                                                        <p className='Product_Title'>{valueSub.title}</p>
                                                        <p className='Product_Category'>{valueSub.material}</p>
                                                        <div>
                                                            <h2 className='Product_Price'>{valueSub.price}</h2>
                                                            <div>
                                                                <h2>{valueSub.priceOrigin}</h2>
                                                                <hr />
                                                            </div>
                                                            <h2>{valueSub.discount}</h2>
                                                        </div>
                                                    </div>
                                                </ul>
                                            )
                                        })
                                    }
                                </li>
                                <GrLinkNext/>
                            </ul>
                        )
                    })
                }
            </li>

        </div>
    )
}

export default GiveProduct
