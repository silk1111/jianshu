import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable对象不可修改，它被用于保证原状态不被修改
const defaultState = fromJS({
    searchFocused : false ,
    List : []
}) 
const reducer =  (preState = defaultState,action) => {
     const {type, data} = action;
     switch (type) {
        case constants.HANDLE_INPUT_FOCUS:
            
            //immutable对象的set方法，会返回一个新的immutable对象
            return preState.set("searchFocused",true)
        case constants.HANDLE_INPUT_BLUR:
            return preState.set("searchFocused",false)
        case constants.CHANGE_LIST:
            return preState.set("List", data)
        default:
            break;
     }
    return preState;
}
export default reducer;