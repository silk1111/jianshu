import './statics/iconfont/iconfont.css'
import Header from './container/Header';
import {Provider} from 'react-redux'
import {Route, NavLink, Routes, Navigate,Sw} from 'react-router-dom'
import store from './store'
import Detail from './pages/Detail/index.jsx'
import Home from './pages/Home'
import Login from'./pages/Login'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail' element={<Detail />}></Route>

          

        </Routes>
       
     

    </Provider>
   
    
    </div>
  );
}

export default App;
