import React, { useState } from 'react'

import '../../styles/Home/NewProduct.css'
import { GrLinkNext } from "react-icons/gr";
import { set } from 'react-hook-form';

import product1 from '../../assets/images/NewProduct/product1.jpg'

function NewProduct() {
    const listNewProduct = [{ img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: product1, title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" }]

    const [indexProduct, setIndexProduct] = useState(0)
    const NextProduct = () => {
        return setIndexProduct(indexProduct == listNewProduct.length - 5 ? 0 : indexProduct + 5)
    }
    return (
        <div className='NewProduct_container'>
            <div className='NewProduct_body'>
                <GrLinkNext className='NewProduct_IconNext' onClick={NextProduct} />

                <h2>HÀNG MỚI VỀ</h2>
                <li>
                    {
                        listNewProduct.map((value, index) => {
                            if (index < indexProduct + 5 && index>=indexProduct)
                                return (
                                    <ul key={index}>
                                        <div>
                                            <h2>New</h2>
                                            <img src={value.img} alt="error" />
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
                                            <p className='Product_Title'>{value.title}</p>
                                            <p className='Product_Category'>{value.material}</p>
                                            <div>
                                                <h2 className='Product_Price'>{value.price}</h2>
                                                <div>
                                                    <h2>{value.price_Origin}</h2>
                                                    <hr />
                                                </div>
                                                <h2>{value.discount}</h2>
                                            </div>
                                        </div>
                                    </ul>
                                )
                        })
                    }
                </li>
            </div>
        </div>
    )
}

export default NewProduct
