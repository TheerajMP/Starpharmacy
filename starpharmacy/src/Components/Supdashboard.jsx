import React from 'react';
import { Link } from 'react-router-dom'
import '../cssFiles/sidebar.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import Meddeliver from './Meddeliver';
import { BASE_URL } from './helper';


const Supdashboard = () => {
  const user = localStorage.getItem("username")
    
  const [stockCount, setStockCount] = useState(0);
  const [sup, setSup] = useState(0);

  // const [reqmed,setreqMed] = useState(0);
  useEffect(() => {
      toast(`🤓Welcome back ${user}`)
      axios.get(`${BASE_URL}/user/count`)
          .then((res) => setStockCount(res.data.count))
          .catch((err) => toast(err));
  }, []);
  useEffect(() => {
      axios.get(`${BASE_URL}/user/sup`)
          .then((res) => setSup(res.data.count))
          .catch((err) => toast(err));
  }, []);

  return (
    <div className='split' >
    <div className="page-wrapper chiller-theme toggled ">
      <Link id="show-sidebar" className="btn btn-sm btn-dark" to="#">
        <i className="fas fa-bars" />
      </Link>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <Link to="/"> <i className='fa fa-star'>..</i>STAR PHARMACY..<i className='fa fa-star'></i></Link>
            <div id="close-sidebar">
              <i className="fas fa-times" />
            </div>
          </div>
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              
              <li className="sidebar-dropdown">
                <Link to="#">
                  <i className="fa fa-shopping-cart" />
                  <span>Medicine </span>

                </Link>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <Link to="/Meddeliver">Medicine Delivery
                      </Link>
                    </li>
                  

                  </ul>
                </div>
              </li>
            
            </ul>
          </div>

        </div>

        <div className="sidebar-footer">

          <Link to="#">
            <i className="fa fa-power-off" />
          </Link>
        </div>
      </nav>


    </div>
    < ToastContainer />
   
    </div>
  );
}

export default Supdashboard;
