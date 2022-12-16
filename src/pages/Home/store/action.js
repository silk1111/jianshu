import axios from 'axios'
import  {GET_AUTHOR_LIST, GET_HOME_DATA, GET_MORE_ARTICLE_LIST, CHANGE_SCROLL_SHOW} from './constants'

const changeAuthorListAction = data => ({type:GET_AUTHOR_LIST,data})
export const getAuthorListAction = () => {
    return (dispatch) => {
        
        axios.get('/api/authorList.json').then( (res) => {
            const {data} = res.data;
            dispatch(changeAuthorListAction(data))
        }).catch( () => {
            console.log('error');
        })
    }
}

const changeHomeDataAction = data => ({ type: GET_HOME_DATA, data })
export const getHomeDataAction = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const homeData =res.data.data;
            dispatch(changeHomeDataAction(homeData));
          }).catch(() => {
            console.log('get home.json  error');
          })
    }
}
const changeArticalListAction = (data, nextPage) => ({type: GET_MORE_ARTICLE_LIST , data, nextPage})
export const getMoreArtListAction = (page) => {
    return (dispatch) => {
        axios.get('/api/articleList.json?page='+ page).then((res) => {
            const {data} = res.data;            
            dispatch(changeArticalListAction(data, page+1));
        }
    ).catch()
    }
   
}
export const changeScrollShow = (ifShow) => ({type: CHANGE_SCROLL_SHOW,data:ifShow })
