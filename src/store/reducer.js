import headerReducer from '../container/Header/store/reducer'
import homeReducer from '../pages/Home/store/reducer'
import {combineReducers}  from 'redux-immutable'
//使用redux-immutable将reducer state的类型也改成immutable对象
const reducer = combineReducers({
    header : headerReducer ,
    home : homeReducer
})

export default reducer;