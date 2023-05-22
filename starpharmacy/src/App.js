import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './Components/SideBar1';
import Dashboard from './Components/Dashboard';
import Requestmedicine from './Components/Requestmedicine';
import Addsupplier from './Components/Addsupplier';
import Supplierlist from './Components/Supplierlist';
import Addmedicine from './Components/Addmedicine';
import Requestedlist from './Components/Requestedlist';
import Medicinelist from './Components/Medicinelist';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Button from './Components/Button';
import Supplierlogin from './Components/Supplierlogin';
import Suppliersignup from './Components/Suppliersignup';
import Editrequestmed from './Components/Editrequestmed';
import Cart from './Components/Cart';
import Usercontext from './usercontext';
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import Supdashboard from './Components/Supdashboard';
import Meddeliver from './Components/Meddeliver';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [user, setreguser] = useState({
    token: undefined,
    username: undefined
  })
  const [reguser, setregguser] = useState('')
  return (
    <>
      <BrowserRouter >
        <Usercontext.Provider
          value={{ user, setreguser, reguser, setregguser }}>
          <Routes>
            <Route path="/" element={
              <div >
                <Button />
              </div>
            } />
            <Route path="/Dash" element={
              <div >
                <Sidebar />
                <Dashboard />
              </div>
            } />
            <Route path="/Requestedlist" element={
              <div >
                <Sidebar />
                <Requestedlist />
              </div>
            } />
            <Route path="/Requestmedicine" element={
              <div >
                <Sidebar />
                <Requestmedicine />
              </div>
            } />
            <Route path="/Addsupplier" element={
              <div >
                <Sidebar />
                <Addsupplier />
              </div>
            } />
            <Route path="/Supplierlist" element={
              <div >
                <Sidebar />
                <Supplierlist />
              </div>
            } />
            <Route path="/Addmedicine" element={
              <div >
                <Sidebar />
                <Addmedicine />
              </div>
            } />
            <Route path="/Medicinelist" element={
              <div >
                <Sidebar />
                <Medicinelist />
              </div>
            } />
            <Route path="/Login" element={
              <div >
                <Login />
              </div>
            } />
            <Route path="/Supplierlogin" element={
              <div >
                <Supplierlogin />
              </div>
            } />
            <Route path="/Signup" element={
              <div >
                <Signup />

              </div>
            } />
            <Route path="/Suppliersignup" element={
              <div >
                <Suppliersignup />
              </div>
            } />
            <Route path="/edit/:id" element={
              <div>
                <Sidebar />
                <Editrequestmed />
              </div>
            } />
            <Route path="/Calender" element={
              <div>
                <Sidebar />
                <Calendar />
              </div>
            } />
            <Route path="/Supdashboard" element={
              <div>
                <Supdashboard />
              </div>
            } />
            <Route path="/Cart" element={
              <div>
                <Supdashboard />
                <Cart />
              </div>
            } />
            <Route path="/Meddeliver" element={
              <div>
                <Supdashboard />
                <Meddeliver />
              </div>
            } />
          </Routes>
        </Usercontext.Provider>
      </BrowserRouter>
    </>
  );
}
export default App;

