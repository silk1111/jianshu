import React from 'react';
import ReactDOM from 'react-dom/client';
import './style';
import App from './App';
import Login from'./pages/Login'
import Register from './pages/Register'
import { Route,Routes } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import {Style} from './style.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Style ></Style>
  <BrowserRouter>
  <App />
    <Routes>
          <Route path='/sign-in' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          
    </Routes>
    

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
