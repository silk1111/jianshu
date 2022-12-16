import { fromJS } from "immutable";
import { IS_VERIFICATION_CODE_SHOW } from "./constants";
const defaultState = fromJS({
    isVerCodeShow: false
})
const reducer = (preState = defaultState,action) => {
    const {type, data} = action;
    switch (type) {
        case IS_VERIFICATION_CODE_SHOW :
            console.log("register--reducer--", data);
            
            return preState.set("isVerCodeShow",data)
    
        default:
            break;
    }
    return preState;
}
export default reducer;