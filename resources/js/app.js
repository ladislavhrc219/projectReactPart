import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App/Components/App.jsx';

import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

// import {MdCancel, MdChat, MdCheck} from 'react-icons/md';
import FaBeer from 'react-icons/lib/fa/beer';


ReactDOM.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
document.getElementById('app')
);
