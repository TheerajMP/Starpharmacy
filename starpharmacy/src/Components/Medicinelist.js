import React from 'react'
import { useState, useEffect } from 'react'
import Dashboard from './Dashboard'
import '../cssFiles/requestedlist.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from './helper';

const Medicinelist = () => {
    const navigate = useNavigate()
    const [disp, setdisp] = useState([])
    const [status, setStatus] = useState('not expired')
    let datas = []
    const display = () => {
        axios.get(`${BASE_URL}/user/displayy`)
            .then(res => {
                datas = res.data
                setdisp(datas)
            })
    }
    const check = () => {
        disp.map(async (item) => {
            const ex = new Date(item.expiry_date)
            const now = new Date()
            // alert(ex<now)
            if (ex < now) {
                await axios.put(`${BASE_URL}/user/updateExpiry/${item._id}`)
                    .then((data) => {
                        console.log(data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
            navigate('/Medicinelist')
        })
    }
    useEffect(() => {
        display()
        check()
    }, [])
    const checkExpiryDate = (_id) => {
        console.log("exp")
        const currentDate = new Date();
        var da = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
        console.log(da)
        var ss = 0;
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
                            <th>Medicine name</th>
                            <th>Quantity</th>
                            <th>Expiry Date</th>
                            <th>Check Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            disp.map(user => (
                                <tr>
                                    <td data-th="Sno">
                                        {user.sno}
                                    </td>
                                    <td data-th="Medicine name">
                                        {user.medicine_name}
                                    </td>

                                    <td data-th="Quantity">
                                        {user.quantity}
                                    </td>
                                    <td data-th="Expiry Date">
                                        {user.expiry_date}
                                    </td>
                                    <td data-th="Check Status">
                                        <button onClick={() => checkExpiryDate(user._id)}>Check</button>
                                    </td>
                                    <td data-th="Status">
                                        {user.status}
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
export default Medicinelist
