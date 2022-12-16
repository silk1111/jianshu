import * as constants from './constants'
import {fromJS} from 'immutable'
//immutable对象不可修改，它被用于保证原状态不被修改
const defaultState = fromJS({
    searchFocused : false ,
    List : [],
    isArticle: false,
    articleTitle: '',
    articleAuthorImg:'',
    articleAuthorName: ''
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
        case constants.CHANGE_HEADER_ARTICLE:
            
            const {isArticle, articleTitle, articleAuthorName, articleAuthorImg} = data;
            return preState.merge({
                "isArticle":fromJS(isArticle),
                "articleTitle":fromJS(articleTitle),
                "articleAuthorImg": fromJS(articleAuthorImg),
                "articleAuthorName":fromJS(articleAuthorName),
            
            })
        default:
            break;
     }
    return preState;
}
export default reducer;