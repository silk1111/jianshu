import {fromJS} from 'immutable';
import {GET_AUTHOR_LIST} from './constants'
//immutable对象不可修改，它被用于保证原状态不被修改
const defaultState = fromJS({
    articleList: [{
        id: 1,
        haveImg:'have-img',
        imgURL: "https://img2.baidu.com/it/u=319818087,3660873740&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=420",
        title:"40岁的醒悟",
        desc:"一位女性朋友，人到中年，婚姻不和，每天为丈夫曾经出轨的事烦心透顶。 丈夫说她：“你就没别的事忙了吗？整天盯着我！” 她对我说：“我其实很忙，但我..."
        },{
        id: 2,
        haveImg:'none',
        title:"40岁的醒悟",
        desc:"一位女性朋友，人到中年，婚姻不和，每天为丈夫曾经出轨的事烦心透顶。 丈夫说她：“你就没别的事忙了吗？整天盯着我！” 她对我说：“我其实很忙，但我..."
        }
    ],
    authorList: [{
            id:1,
            pic: 'https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name:'胡七筒',
            write: 115327,
            like:10649

        },{
            id:2,
            pic: 'https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '卢璐说',
            write: 115350,
            like:34709

        },{
            id:3,
            pic: 'https://upload.jianshu.io/users/upload_avatars/7416466/fc1a1a0d-e3c7-4bca-9720-028c5c9914f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '老沈1',
            write: 43527,
            like:803

        },{
            id:4,
            pic: 'https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '吴晓布',
            write: 757386,
            like:25400

        },{
            id:5,
            pic: 'https://upload.jianshu.io/users/upload_avatars/301…o-orient/strip|imageView2/1/w/96/h/96/format/webp',
            name: '王小麦',
            write: 61854,
            like:10311

        }
        
    ]

}) 
const reducer =  (preState = defaultState,action) => {
    const {type, data} = action;
    switch (type) {
        case GET_AUTHOR_LIST:
            let authorData = fromJS(data);

            return preState.set('authorList', authorData);
    
        default:
            break;
    }
    return preState;
}
export default reducer;