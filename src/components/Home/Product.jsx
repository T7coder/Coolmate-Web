import React from 'react'
import { FaStar } from "react-icons/fa";
import '../../styles/Home/Product.css'
function Product() {
    const listProduct = [{ img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" },
    { img: "NewProduct/product1.jpg", title: "Mũ Lưỡi Trai Sport Snapback", material: "Vải Cotton / Xanh navy", price: "199.000đ", price_Origin: "299.000đ", discount: "10%" }]

    return (
        <div className='Product_container'>
            <div className='Product_body'>
                <img src="BannerProduct.jpg" alt="" />
                <div className='Product_tabBar'>
                    <li>
                        <ul>Tất cả</ul>
                        <ul>Nổi bật</ul>
                        <ul>Áo</ul>
                        <ul>Quần</ul>
                        <ul>Quần lót</ul>
                        <ul>Phụ kiện</ul>
                        <ul>CM24</ul>
                    </li>
                </div>
                <li>
                    {
                        listProduct.map((value, index) => {
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
                <div>
                    <h2>XEM THÊM</h2>
                    <p>Hiển thị 10 trên tổng số 42 sản phẩm</p>
                </div>
            </div>
        </div>
    )
}

export default Product
