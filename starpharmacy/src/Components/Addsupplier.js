import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import '../cssFiles/addsupplier.css'
import { useNavigate } from 'react-router-dom'
const Addsup = () => {
  const [post, setpost] = useState({
    supplier_name: '', email: '', contact: '', location: ''
  })
  const navigate = useNavigate();
  const clearInput = () => {
    setpost({
      supplier_name: '', email: '', contact: '', location: ''
    })
  }
  const savepost = async (e) => {
    try {
      e.preventDefault()
      await axios.post('http://localhost:4000/user/postsup', post)
    }
    catch (error) {
      alert(error)
      console.log("error")
    }
    alert("added successfully");
    navigate("/Supplierlist");
  }
  const datafield = (e) => {
    setpost({
      ...post, [e.target.name]: e.target.value
    })
  }
  return (
    <div className='outerdiv'>
      <div className='box'>
        <form className='ppp'>
          <h3>ADD SUPPLIER</h3>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="email" value={post.email} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Supplier Name :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="supplier_name" value={post.supplier_name} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contact :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="contact" value={post.contact} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Location :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="location" value={post.location} />
          </div>
          <br />
          <button class=" sub btn " onClick={savepost}>Add supplier</button>
        </form>
      </div>
      
    </div>
  );
}
export default Addsup;