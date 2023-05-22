import React from 'react'
import { useState, useEffect } from 'react'
import '../cssFiles/requestedlist.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import { BASE_URL } from './helper';

const Requestedlist = () => {
    const [disp, setdisp] = useState([])
    const [status, setStatus] = useState('pending')
    let datas = []
    const display = () => {
        axios.get(`${BASE_URL}/user/display`)
            .then(res => {
                datas = res.data
                setdisp(datas)
            })
    }
    useEffect(() => {
        display();
    }, []);
    const deleteUser = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/user/postmedicine/${id}`);
            display();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div className='content'>
                <Dashboard />
            </div>
            <div class="container">
                <table class="rwd-table">
                    <thead>
                        <tr>
                            <th scope="col">Sno</th>
                            <th>Supplier name</th>
                            <th>Shop name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Drug name</th>
                            <th>Quantity</th>
                            <th>Deliver Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            disp.map((user, i) => (
                                <tr>
                                    <td data-th="Sno">
                                        {i + 1}
                                    </td>
                                    <td data-th="Supplier name">
                                        {user.supplier_name}
                                    </td>
                                    <td data-th="Shop name">
                                        {user.shopname}
                                    </td>
                                    <td data-th="Email">
                                        {user.email}
                                    </td>

                                    <td data-th="Contact">
                                        {user.contact}
                                    </td>
                                    <td data-th="Drug name">
                                        {user.drugname}
                                    </td>
                                    <td data-th="Quantity">
                                        {user.quantity}
                                    </td>
                                    <td data-th="Deliver Date">
                                        {user.order_date}
                                    </td>
                                    <td data-th="Status">
                                        {user.status}
                                    </td>
                                    <td data-th="Action">

                                        {/* <button class="btn btn primary" onClick={get}>Edit</button> */}
                                        <button className="btn btn primary" ><Link to={`/edit/${user._id}`}  >Edit</Link></button>
                                        <button className="btn " onClick={() => deleteUser(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Requestedlist