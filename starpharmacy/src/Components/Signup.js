import React from 'react'
import '../cssFiles/login.css'
import { useState, useContext } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Usercontext from '../usercontext';
const Signup = () => {
  const [users, setuser] = useState({
    username: '', email: '', password: '', confirmpassword: ''
  })
  let { user, setreguser } = useContext(Usercontext)
  let { reguser, setregguser } = useContext(Usercontext)
  const clearInput = () => {
    setuser({
      username: '', email: '', password: '', confirmpassword: ''
    })
  }
  const navigate = useNavigate()
  const saveuser = async (e) => {
    try {
      e.preventDefault()
      await axios.post('http://localhost:4000/user/createUser', users)
        .then(async (res) => {
          console.log(res)
          const user_id = res.data[0].id
          let users1 = []
          const Token = res.data[0].token
          localStorage.setItem("auth-token", Token)
          await axios.get(`http://localhost:4000/user/fetchuser/${user_id}`, { headers: { "x-auth-token": Token } })
            .then(res => {
              users1 = res.data[0]
              user = ({
                token: users1.token,
                username: users1.username
              })
              setregguser(user)
              navigate('/Login')
            })
            .catch(err => {
              alert(err)
            })
        })
        .catch(err => {
          alert(err)
        })
        } catch (error) {
          alert(error)
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
          <h2 style={{ fontWeight: 'bolder' }}>Sign Up</h2>
          <span>register and enjoy the service</span>
          <form id='form' className='flex flex-col' onSubmit={saveuser}>
            <input type="text" placeholder='username' onChange={(e) => datafield(e)} required name="username" value={users.username} />
            <input type="email" placeholder='email' onChange={(e) => datafield(e)} required name="email" value={users.email} />
            <input type="password" placeholder='password' onChange={(e) => datafield(e)} required name="password" value={users.password} />
            <input type="password" placeholder='confirm password' onChange={(e) => datafield(e)} required name="confirmpassword" value={users.confirmpassword} />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button type='submit' className='btn'>Create</button>
          </form>
        </div>
        <div className="col-2">
          <img src="https://images.unsplash.com/photo-1555475660-3df469f5d6d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8MTcwODI3Nnx8ZW58MHx8fHw%3D&w=1000&q=80" alt="" />
        </div>
      </div>
    </section>
  )
}
export default Signup