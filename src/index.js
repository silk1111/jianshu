import React from 'react';
import ReactDOM from 'react-dom/client';
import './style';
import App from './App';
//import Login from'./pages/Login'
import Register from './pages/Register'
import { Route,Routes, Switch } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import {Style} from './style.js';
import {Provider} from 'react-redux'
import store from './store'
import jsLoadable from './jsLoadable';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Login = jsLoadable(() => import('./pages/Login'))
root.render(
  <React.StrictMode>
     <Style ></Style>
  <BrowserRouter>
    <Provider store={store}>
      {/* <Routes>
                <Route path='/sign-in' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>

                
          </Routes> */}
<div style={{minWidth:"1300px",minHeight:"1000px"}}>

   <Switch>
                <Route path='/sign-in' component={Login} ></Route>
                <Route path='/register' component={Register} ></Route>
                <Route path='/' component={App} ></Route>

                
          </Switch>
         
</div> 
            

    </Provider>
    
    

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
