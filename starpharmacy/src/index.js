import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
///Using for Modal (react-tostify)
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/////
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import './js-files/script'
import './cssFiles/style.css'






ReactDOM.render(
  // <React.StrictMode>
    <App />

  // </React.StrictMode>
  ,
  document.getElementById('root')
);


