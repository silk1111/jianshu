import headerReducer from '../container/Header/store/reducer'
import homeReducer from '../pages/Home/store/reducer'
import detailReducer from '../pages/Detail/store/reducer'
import loginReducer from '../pages/Login/store/reducer'
import registerReducer from '../pages/Register/store/reducer'
import {combineReducers}  from 'redux-immutable'
//使用redux-immutable将reducer state的类型也改成immutable对象
const reducer = combineReducers({
    header : headerReducer ,
    home : homeReducer ,
    detail: detailReducer,
    login: loginReducer,
    register: registerReducer

})

export default reducer;