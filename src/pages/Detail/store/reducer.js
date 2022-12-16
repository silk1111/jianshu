import { fromJS } from "immutable";
import { GET_ARRTICLE_DETAIL } from "./constants";
const defaultState = fromJS(
{
    id: "999",
    article:{
        time: "1",
        hot: -1,
        fontNum: -1,
        title: "",
        contant: ""
    },
    author:{
        name: "1",
        img: "1",
        ip: "1"
    }
})

const reducer = (preState = defaultState , action) => {
    
    const {type, data} = action;
    switch (type) {
        case GET_ARRTICLE_DETAIL:

            return preState.merge({
                id: fromJS(data.id),
                article: fromJS(data.article),
                author: fromJS(data.author)
            });
    
        default:
            break;
    }
    return preState;

}
export default reducer;