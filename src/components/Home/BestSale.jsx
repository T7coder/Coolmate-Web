import React, { useState } from 'react'
import '../../styles/Home/BestSale.css'
import { FaStar } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
function BestSale() {
    const listNewProduct = [{ img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product2.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product2.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product2.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product2.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product2.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" }]


    const [indexProduct,setIndexProduct]=useState(0)
    const NextProduct = () => {
        return setIndexProduct(indexProduct == listNewProduct.length - 5 ? 0 : indexProduct + 5)
    }
    return (
        <div className='BestSale_container'>
            <GrLinkNext onClick={NextProduct}/>
            <h2>BÁN CHẠY NHẤT</h2>
            <li>
                {
                    listNewProduct.map((value,index) => {
                        if(index <indexProduct+5 && index>=indexProduct)
                        return (
                            <ul key={index}>
                                <div>
                                    <h2>Đáng mua</h2>
                                    <img src={value.img} alt="" />
                                    <div>
                                        <p>4,5</p>
                                        <FaStar />
                                        <p>(321)</p>
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
    )
}

export default BestSale
