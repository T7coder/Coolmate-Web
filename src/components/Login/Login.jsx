import React, { useState } from 'react'

import { FaFacebookF } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';

import '../../styles/Login/Login.css'

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import axios from 'axios';

function Login() {
    //url page useNavigate
    const UrlPageNavigate = useNavigate()
    //useForm to store data of user
    const { register, handleSubmit } = useForm()
    //handle input of user
    const handleInput = (data) => {
        const regexEmail = /.+@gmail.com/
        if (regexEmail.test(data.EmailUser)) {
            if (data.PasswordUser.length < 8)
                alert("Mật khẩu ít nhất 8 ký tự")
            else
                loginUser(data)
        }
        else
            alert("Email không đúng")
    }

    //Login account user
    const loginUser = (data) => {
        //get data from mockapi
        axios({ method: 'GET', url: 'https://65f51306f54db27bc0229836.mockapi.io/user' })
            .then((response) => {
                const dataResponse = response.data
                let flag = false
                dataResponse.map((value, index) => {
                    if (value.Email == data.EmailUser && value.Password == data.PasswordUser && flag==false)
                    {
                        flag=true
                        Swal.fire({
                            title: "Thành công",
                            text: "Bạn đã đăng ký tài khoản thành công",
                            icon: "success"
                        });
                        setTimeout(() => {
                            UrlPageNavigate('/')
                        }, 2000)
                    }    
                })
                if(flag==false)
                {
                    Swal.fire({
                        title: "Thất bại",
                        text: "Tài khoản hoặc mật khẩu không chính xác",
                        icon: "error"
                    });
                }
            })
            .catch((error)=>
            {
                console.log(error.message)
            })
    }

    //set state input password
    const [stateInputPassword, setStateInputPassword] = useState("password")

    return (
        <div className='Login_container'>
            <div className='body'>
                <div>
                    <div className='Login_Form'>
                        <h2>Đăng nhập</h2>
                        <p>Đăng nhập để không bỏ lỡ quyền lợi tích lũy và hoàn tiền cho bất kỳ đơn hàng nào</p>
                        <p>Đăng nhập hoặc đăng ký (miễn phí)</p>

                        <li>
                            <ul>
                                <img src="googleIcon.svg" alt="ErrorGoogle" />
                            </ul>
                            <ul>
                                <FaFacebookF />
                            </ul>
                        </li>

                        <div>
                            <hr></hr>
                            <p> Hoặc </p>
                            <hr></hr>
                        </div>

                        <form onSubmit={handleSubmit(handleInput)}>
                            <input type="text" placeholder='Email/SĐT của bạn' {...register("EmailUser")} required />
                            <div>
                                <input type={stateInputPassword} placeholder='Mật khẩu' {...register("PasswordUser")} required />
                                {stateInputPassword == "password" ? <FaRegEyeSlash onClick={() => setStateInputPassword("text")} /> : <FaRegEye onClick={() => setStateInputPassword("password")} />}
                            </div>
                            <button>Đăng nhập</button>
                        </form>

                        <div className='Login_ChangePages'>
                            <Link to={'/SignUp'}>Đăng ký tài khoản mới</Link>
                            <a href="">Quên mật khẩu</a>
                        </div>

                    </div>

                    <div className='Login_Advertise'>
                        <img src="advertise.jpg" alt="" />
                    </div>

                    <Link to={'/'}><IoMdClose /></Link>
                </div>
            </div>
        </div>

    )
}

export default Login
