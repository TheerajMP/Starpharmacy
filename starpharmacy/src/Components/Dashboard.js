import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import '../cssFiles/dashboard.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Dashboardchart from './Dashboardchart'
import { BASE_URL } from './helper';

function Dashboard() {
    const user = localStorage.getItem("username")
    const [stockCount, setStockCount] = useState(0);
    const [sup, setSup] = useState(0);
    const [exp, setExp] = useState(0);
    useEffect(() => {
        toast(`Welcome back ${user}`)
        axios.get(`${BASE_URL}/user/count`)
            .then((res) => setStockCount(res.data.count))
            .catch((err) => toast(err));
    }, []);
    useEffect(() => {
        axios.get(`${BASE_URL}/user/sup`)
            .then((res) => setSup(res.data.count))
            .catch((err) => toast(err));
    }, []);
    // useEffect(() => {
    //     axios.get(`${BASE_URL}/user/expired-products-count`)
    //         .then((res) => setExp(res.data.count))
    //         .catch((err) => toast(err));
    // }, []);
    return (
        <div>
            <div className='pos'>
                <div className='div row-3' >
                    <div id="content" className='px-3 col-12'>
                        <div className='container-fluid'>
                            <div className='abcd row g-3 my-2 '>
                                <div className='  col-md-3 p-1'>
                                    <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                                        <div>
                                            <h3 className='fs-2 ww'>{stockCount}</h3>
                                            <p className='fs-2 thee' style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}> STOCKS</p>
                                        </div>
                                        <i className='bi bi-activity p-5 fs-1'></i>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                                        <div className='clr'>
                                            <h3 className='fs-2 ww'>{exp}</h3>
                                            <p className='fs-2 thee' style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}> EXPIRED DRUGS</p>
                                        </div>
                                        <i className='bi bi-prescription p-3 fs-1'></i>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                                        <div>
                                            <h3 className='fs-2 ww'>{sup}</h3>
                                            <p className='fs-2 thee' style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}> NO OF SUPPLIERS</p>
                                        </div>
                                        <i className='bi bi-people p-3 fs-1'></i>
                                    </div>
                                </div>
                                <div className='col-md-3 p-1'>
                                    <div className='p-3 pp bg-white shadow-sm d-flex justify content-around align-items-center rounded'>
                                        <div>
                                            <h3 className='fs-2 ww'>{stockCount}</h3>
                                            <p className='fs-2 thee' style={{ fontFamily: '"Lucida Console", "Courier New", monospace' }}>OUT OF STOCKS</p>
                                        </div>
                                        <i className='bi bi-cart-plus p-3 fs-1'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ppp' >
                <Dashboardchart />
            </div>
            <ToastContainer />
        </div>
    )
}
export default Dashboard



