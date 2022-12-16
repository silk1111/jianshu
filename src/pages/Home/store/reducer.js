import {fromJS} from 'immutable';
import {GET_AUTHOR_LIST, GET_HOME_DATA, GET_MORE_ARTICLE_LIST, CHANGE_SCROLL_SHOW} from './constants'
//immutable对象不可修改，它被用于保证原状态不被修改
const defaultState = fromJS({
    articleList: [
       
    ],
    authorList: [
       
        
    ],
    articlePage: 1,
    showScroll: false,
    showQrcode: false,
    showScrolltip: false

}) 
const reducer =  (preState = defaultState,action) => {
    const {type, data} = action;
    switch (type) {
        case GET_AUTHOR_LIST:
            let authorData = fromJS(data);
            return preState.set('authorList', authorData);

        case GET_HOME_DATA:
            //首次加载时显示的数据
            
            return preState.merge({
                "articleList":fromJS(data.articleList),
                "authorList":fromJS(data.authorList)
            })
        case GET_MORE_ARTICLE_LIST:
            const {nextPage} = action;            
            const articleList = fromJS(data);
            return  preState.merge({
                "articleList":  preState.get('articleList').concat(articleList),
                "articlePage": nextPage
            })
        case CHANGE_SCROLL_SHOW:
            return preState.set('showScroll',data)    
        default:
            break;
    }
    return preState;
}
export default reducer;