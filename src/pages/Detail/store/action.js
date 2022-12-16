import axios from "axios"
import {GET_ARRTICLE_DETAIL} from './constants'
export const getArticleDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/articleDetail.json').then((res) => {
        const {data} = res.data;
        
        dispatch(changeArticle(data));
    }).catch()
    }
    
}
const changeArticle = (data) => ({type: GET_ARRTICLE_DETAIL,data})