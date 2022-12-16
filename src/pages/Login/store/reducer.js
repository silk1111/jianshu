import { fromJS } from "immutable";
import {SIGN_IN, SIGN_OUT} from "./constants"
const defaultState = fromJS({
    isLogIn: "false",
    account: "111",
    password: "111",
    img: "https://cdn2.jianshu.io/assets/default_avatar/14-0651acff782e7a18653d7530d6b27661.jpg"
})

const reducer =  (preState = defaultState,action) => {
    const {type, data} = action;
    switch (type) {
        case SIGN_IN:
            console.log("reducer-----" ,data);
            
            return fromJS(data);
            break;
        case SIGN_OUT:
            console.log("reducer---sign out---",data);
            return defaultState;
        default:
            break;
    }
        return preState;
}
export default reducer;

