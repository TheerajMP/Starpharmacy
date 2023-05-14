import React, { useState, useEffect } from 'react'
import '../cssFiles/supplierlist.css'
import Dashboard from './Dashboard'
import axios from 'axios'
const Supplierlist = () => {
    const [disp, setdisp] = useState([])
    const [button, setButton] = useState(0)
    let datas = []
    const display = () => {
        axios.get('http://localhost:4000/user/disp')
            .then(res => {
                datas = res.data
                setdisp(datas)
            })
    }
    useEffect(() => {
        display()
    }, [button])
    const get = () => {
        setButton(button)
    }
    return (
        <div>
            <div className='content'>
                <Dashboard />
            </div>
            <div class="container">
                <table class="rwd-table">
                    <thead >
                        <tr>
                            <th scope="col">Sno</th>
                            <th>Supplier name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            disp.map(user => (
                                <tr>
                                    <td data-th="Sno">
                                        {user.sno}
                                    </td>
                                    <td data-th="Supplier name">
                                        {user.supplier_name}
                                    </td>
                                    <td data-th="Email">
                                        {user.email}
                                    </td>
                                    <td data-th="Contact">
                                        {user.contact}
                                    </td>
                                    <td data-th="Location">
                                        {user.location}
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
export default Supplierlist