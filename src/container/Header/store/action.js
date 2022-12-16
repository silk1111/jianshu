import {HANDLE_INPUT_FOCUS, HANDLE_INPUT_BLUR ,CHANGE_LIST, CHANGE_HEADER_ARTICLE} from './constants';
// import constants from './index.js'
import {SIGN_OUT} from '../../../pages/Login/store/constants';
import axios from 'axios';
export const handleInputFocusAction = data => ({type:HANDLE_INPUT_FOCUS,data});
export const handleInputBlurAction = data => ({type:HANDLE_INPUT_BLUR,data});
export const changeList = data => ({type:CHANGE_LIST,data})
export const getList = () => {
    return (dispatch) => {
        
        axios.get('/api/headerList.json').then( (res) => {
            const {data} = res.data;
            dispatch(changeList(data))
        }).catch( () => {
            console.log('error');
        })
    }
}
export const changeHeaderArticle = (data) => ({type:CHANGE_HEADER_ARTICLE,data})
export const signOutAction = () =>({type:SIGN_OUT,data:{isLogIn: "false"}})


