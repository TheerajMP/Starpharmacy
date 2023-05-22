import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../cssFiles/login.css'
import { BASE_URL } from './helper';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Login = () => {
  const [users, setuser] = useState({
    username: '', password: ''
  })
  const clearInput = () => {
    setuser({
      username: '', password: ''
    })
  }
  const navigate = useNavigate()
  const loginfield = async (e) => {
    try {
      e.preventDefault()
      await axios.post(`${BASE_URL}/user/login`, users)
        .then(res => {
          if (res.data.message === "login successfully") {
            localStorage.setItem("username", res.data.username)
            localStorage.setItem("uid", res.data.id)
            toast("LoggedIn successfully")
            navigate('/Dash')
          }
        })
        .catch((err) => {
          console.log(err.message)
          toast(err.message)
        })
      // navigate('/Search')
    } catch (error) {
      toast(error)
      console.log("error")
    }
  }
  const datafield = (e) => {
    setuser({
      ...users, [e.target.name]: e.target.value
    })
  }
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  return (
    <section className='App'>
      <div className="register">
        <div className="col-1">
          <h2 style={{ fontWeight: 'bolder' }}>Log In</h2>
          <span>register and enjoy the service</span>
          <form id='form' className='flex flex-col' onSubmit={loginfield} >
            <input type="text" placeholder='username' onChange={(e) => datafield(e)} required name="username" value={users.username} />
            <input type="email" placeholder='email' onChange={(e) => datafield(e)} required name="email" value={users.email} />
            <input type="password" placeholder='password' onChange={(e) => datafield(e)} required name="password" value={users.password} />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button class="submit" >LET'S GO</button>
            <Link to="/Signup" >
              <button className='btn'>Sign Up</button>
            </Link>
          </form>
        </div>
        <div className="col-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGwlKo3nl9xz2y20DnXNBz1cBbgR_WZcrtIAi6SHMm-4LDpr3D-e43ZM26TLPvAMnuy0&usqp=CAU" alt="" />
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}
export default Login