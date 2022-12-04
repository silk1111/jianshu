import {Style} from './style.js';
import './statics/iconfont/iconfont.css'
import Header from './container/Header';
import {Provider} from 'react-redux'
import {Route, NavLink, Routes, Navigate} from 'react-router-dom'
import store from './store'
import Detail from './pages/Detail/index.jsx'
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
    <Style ></Style>
    <Provider store={store}>
      <Header />
        
          
       <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/detail' element={<Detail />}></Route>
     </Routes>

    </Provider>
   
    
    </div>
  );
}

export default App;
