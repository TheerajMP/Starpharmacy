import React from 'react'
import '../cssFiles/requestmedicine.css'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Addmedicine = () => {
    const [post, setpost] = useState({
        medicine_name: '', quantity: '', expiry_date: ''
    })
    const navigate = useNavigate();
    const clearInput = () => {
        setpost({
            medicine_name: '', quantity: '', expiry_date: ''
        })
    }
    const savepost = async (e) => {
        try {
            e.preventDefault()
            await axios.post('http://localhost:4000/user/postmed', post)
        }
        catch (error) {
            alert(error)
            console.log("error")
        }
        alert("added successfully");
        navigate("/Medicinelist");
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
                    <h3>ADD MEDICNE</h3>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Medicine Name :</label>
                        <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="medicine_name" value={post.medicine_name} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Quantity :</label>
                        <input type="number" class="form-control" onChange={(e) => datafield(e)} required name="quantity" value={post.quantity} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Expiry date</label>
                        <input type="date" class="form-control" onChange={(e) => datafield(e)} required name="expiry_date" value={post.expiry_date} />
                    </div>
                    <br />
                    <button class=" sub btn " onClick={savepost}>Add medicine</button>
                </form>
            </div>
        </div>
    );
}
export default Addmedicine;