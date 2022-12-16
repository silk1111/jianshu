import './statics/iconfont/iconfont.css'
import Header from './container/Header';
import {Provider} from 'react-redux'
import {Route, NavLink, Routes, Navigate,Switch} from 'react-router-dom'
import store from './store'
import Detail from './pages/Detail/index.jsx'
import Home from './pages/Home'
import Login from'./pages/Login'

function App() {
  return (
    <div className="App">
        {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>

          

        </Routes> */}
        <Switch>
        <Route  exact path='/' component={Home}></Route>
        <Route path='/detail/:id' component={Detail} ></Route>

          

        </Switch>
       
     

   
    
    </div>
  );
}

export default App;
