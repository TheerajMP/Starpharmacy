import React from 'react'
import '../cssFiles/login.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './helper';

const Supplierlogin = () => {
  const [users, setuser] = useState({
    username: '', email: '', password: ''
  })
  const clearInput = () => {
    setuser({
      username: '', email: '', password: ''
    })
  }

  //   const location=useLocation()
  const navigate = useNavigate()
  const loginfield = (e) => {
    try {
      e.preventDefault()
      axios.post(`${BASE_URL}/user/login`, users)
        .then(res => {
          if (res.data.message === "login successfully")
            localStorage.setItem("username", res.data.username)
          localStorage.setItem("uid", res.data.id)

          toast("LoggedIn successfully")
          navigate('/Supdashboard')
        }
        )
        .catch((err) => {
          console.log(err.message)
          toast(err.message)
        })

      //   navigate((location.state?location.state.path:"/",{replace:true}))
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
  //   return (
  //     <div>

  // <body>
  //   <section class="login">
  //     <div class="login_box">
  //       <div class="left">

  //         <div class="contact">
  //           <form onSubmit={loginfield}>
  //             <h3>SUPPLIER LOGIN </h3>
  //             <input type="text" placeholder="USERNAME" onChange={(e) => datafield(e)} required name="username" value={users.username} />
  //             <input type="email" placeholder="EMAIL" onChange={(e) => datafield(e)} required name="email" value={users.email} />
  //             <input type="password" placeholder="PASSWORD" onChange={(e) => datafield(e)} required name="password" value={users.password}/>
  //             <button class="submit" >LET'S GO</button>
  //             <h3 className='ss'> Are you a new user?</h3>
  //             <Link to="/Suppliersignup" id='ww'>

  //             <button class='submit'> Sign up</button>

  //             </Link>
  //           </form>
  //         </div>
  //       </div>
  //       <div class="right">
  //         <div class="right-text">
  //           <h2>STAR PHARMACY</h2>
  //           <h5>WELCOME BACK!</h5>
  //         </div>

  //       </div>
  //     </div>
  //   </section>
  // </body>
  //     </div>
  //   )

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  // console.log(watch('username'));

  return (
    <section className='App'>
      <div className="register">
        <div className="col-1">
          <h2 style={{ fontWeight: 'bolder' }}>Log In</h2>
          <span>register and enjoy the service</span>

          <form id='form' className='flex flex-col' onSubmit={loginfield}>
            <input type="text" placeholder='username' onChange={(e) => datafield(e)} required name="username" value={users.username} />
            <input type="email" placeholder='email' onChange={(e) => datafield(e)} required name="email" value={users.email} />
            <input type="password" placeholder=' password' onChange={(e) => datafield(e)} required name="password" value={users.password} />

            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}

            <button class='submit'>LET'S GO</button>
            <Link to="/Suppliersignup" >

            <button class='submit'> Sign up</button>

         </Link>
          </form>

        </div>
        <div className="col-2">
          <img src="https://images.unsplash.com/photo-1555475660-3df469f5d6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTcwODI3Nnx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
        </div>
      </div>
      <ToastContainer />
    </section>
  )

}

export default Supplierlogin