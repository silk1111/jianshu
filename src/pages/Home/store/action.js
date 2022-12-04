import axios from 'axios'
import  {GET_AUTHOR_LIST} from './constants'

export const changeAuthorListAction = data => ({type:GET_AUTHOR_LIST,data})
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
