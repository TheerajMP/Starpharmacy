import React from 'react'
import '../cssFiles/requestmedicine.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios'
const Requestmedicine = () => {
  const [post, setpost] = useState({
    supplier_name: '', shopname: '', email: '', contact: '', drugname: '', quantity: '', order_date: '', status: 'Pending'
  })
  const navigate = useNavigate();
  const clearInput = () => {
    setpost({
      supplier_name: '', shopname: '', email: '', contact: '', drugname: '', quantity: '', order_date: '', status: 'Pending'
    })
  }
  const savepost = async (e) => {
    try {
      e.preventDefault()
      await axios.post('http://localhost:4000/user/postmedicine', post)
    }
    catch (error) {
      alert(error)
      console.log("error")
    }
    navigate("/Requestedlist");
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
          <h3>REQUESTING MEDICNE</h3>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address :</label>
            <input type="email" class="form-control" onChange={(e) => datafield(e)} required name="email" value={post.email} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Supplier Name :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="supplier_name" value={post.supplier_name} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Shop Name :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="shopname" value={post.shopname} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contact :</label>
            <input type="number" class="form-control" onChange={(e) => datafield(e)} required name="contact" value={post.contact} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Drug name :</label>
            <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="drugname" value={post.drugname} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Quantity :</label>
            <input type="number" class="form-control" onChange={(e) => datafield(e)} required name="quantity" value={post.quantity} />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Deliver date</label>
            <input type="date" class="form-control" onChange={(e) => datafield(e)} required name="order_date" value={post.order_date} />
          </div>
          <br />
          <button class=" sub btn " onClick={savepost}>Apply for medicine</button>
        </form>
      </div>
    </div>
  );
}
export default Requestmedicine;