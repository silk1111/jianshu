import {SIGN_IN} from './constants'
import axios from 'axios'

export const getUserAction = (account,password) => {
    return (dispatch) => {
        axios.get('/api/loginSuccess.json').then((res) => {
            const {data:{img}} = res.data;
           
            
           dispatch(postUser({isLogIn:true,account,password,img}))
        }).catch()
    }
}
const postUser = (data) => ({type:SIGN_IN ,data})