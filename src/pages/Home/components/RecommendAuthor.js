import React, { Component } from 'react'
import {RecommendAuthorWrapper, RecommendAuthorHeader, RecommendAuthorList, RecommendAuthorItem, RecommendAuthorImg, RecommendAuthorFollow, RecommendAuthorFooter} from '../style'
import {connect} from 'react-redux'
import {getAuthorListAction} from '../store/action'
 class RecommendAuthor extends Component {
  render() {
    const { authorList, getAuthorList } = this.props;
    return (
      <div>
        <RecommendAuthorWrapper>
            <RecommendAuthorHeader>
            <span>推荐作者</span>
            
            <div className='page-change' onClick={getAuthorList}>
              <span className="iconfont">&#xe65e;</span>换一批
            </div>
            </RecommendAuthorHeader>
            
            <RecommendAuthorList>
            {
              authorList.map((authorObj) => {
                return (
                  <RecommendAuthorItem key={authorObj.get('id')}>
                  <RecommendAuthorImg >
                    <img src={authorObj.get('pic')} alt='用户头像加载失败'/>
                  </RecommendAuthorImg>
                  <RecommendAuthorFollow>
                    <span className="iconfont">&#xe600;</span>关注
  
                  </RecommendAuthorFollow>
                  <span className='authorName' >{authorObj.get('name')}</span>
                  <p className='detail'>写了{authorObj.get('write')}字 · {authorObj.get('like')}喜欢</p>
                  
                  </RecommendAuthorItem>
                )
              }
              )
            }
              <RecommendAuthorItem >
                <RecommendAuthorImg >
                  <img src="https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='用户头像加载失败'/>
                </RecommendAuthorImg>
                <RecommendAuthorFollow>
                  <span className="iconfont">&#xe600;</span>关注

                </RecommendAuthorFollow>
                <span className='authorName' >胡七筒</span>
                <p className='detail'>写了115.3k字 · 10.6k喜欢</p>
                
                </RecommendAuthorItem>
              <RecommendAuthorItem >
                <RecommendAuthorImg >
                  <img src="https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='用户头像加载失败'/>
                </RecommendAuthorImg>
                <RecommendAuthorFollow>
                  <span className="iconfont">&#xe600;</span>关注

                </RecommendAuthorFollow>
                <span className='authorName' >胡七筒</span>
                <p className='detail'>写了115.3k字 · 10.6k喜欢</p>
                
                </RecommendAuthorItem>
              <RecommendAuthorItem >
                <RecommendAuthorImg >
                  <img src="https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='用户头像加载失败'/>
                </RecommendAuthorImg>
                <RecommendAuthorFollow>
                  <span className="iconfont">&#xe600;</span>关注

                </RecommendAuthorFollow>
                <span className='authorName' >胡七筒</span>
                <p className='detail'>写了115.3k字 · 10.6k喜欢</p>
                
                </RecommendAuthorItem>
              <RecommendAuthorItem >
                <RecommendAuthorImg >
                  <img src="https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='用户头像加载失败'/>
                </RecommendAuthorImg>
                <RecommendAuthorFollow>
                  <span className="iconfont">&#xe600;</span>关注

                </RecommendAuthorFollow>
                <span className='authorName' >胡七筒</span>
                <p className='detail'>写了115.3k字 · 10.6k喜欢</p>
                
                </RecommendAuthorItem>
              <RecommendAuthorItem >
                <RecommendAuthorImg >
                  <img src="https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='用户头像加载失败'/>
                </RecommendAuthorImg>
                <RecommendAuthorFollow>
                  <span className="iconfont">&#xe600;</span>关注

                </RecommendAuthorFollow>
                <span className='authorName' >胡七筒</span>
                <p className='detail'>写了115.3k字 · 10.6k喜欢</p>
                
                </RecommendAuthorItem>
            </RecommendAuthorList>
            <RecommendAuthorFooter>
              <span>查看全部</span>
              <span className="iconfont">&#xe662;</span>
            </RecommendAuthorFooter>
        </RecommendAuthorWrapper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    authorList: state.get('home').get('authorList')
  }
}
 const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAuthorList: () => {
      console.log('getAuthorList');

      dispatch(getAuthorListAction())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(RecommendAuthor)