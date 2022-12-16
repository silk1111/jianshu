import React, { Component } from 'react'
import {DetailWrapper, 
        ArticleWrapper,
        ArticleTitle, 
        ArticleAuthor,  
        ArticleAuthorIMG, 
        ArticleAuthorInfo, 
        ArticleAuthorAbove, 
        ArticleAuthorInfor,
        ArticleContent
      } from './style'
import { connect } from 'react-redux'
import {changeHeaderArticle} from '../../container/Header/store/action'
import Header from '../../container/Header'
class Detail extends Component {
  render() {
    return (
      <div>
        <Header ></Header>
        <div style={{backgroundColor: "#f9f9f9"}}>
        <DetailWrapper>
          <ArticleWrapper>
          <ArticleTitle>
          标题内容
          </ArticleTitle>
          <ArticleAuthor>
            <ArticleAuthorIMG>
              <img src='https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
            </ArticleAuthorIMG>
            <ArticleAuthorInfo>
              <ArticleAuthorAbove >
                <span className='deatilAuthorName'>只如初见_2020</span>
                <img src='https://upload.jianshu.io/user_badge/19c2bea4-c7f7-467f-a032-4fed9acbc55d' alt='' />
                <button>关注</button>
              </ArticleAuthorAbove>
              <ArticleAuthorInfor>
                <span className='hot rightMargin' >
                  <i className='iconfont ' >&#xe60d;</i>
                  <span>16</span>
                </span>
                <span className='articleDate rightMargin'>2022-10-30 10:56:02</span>
                <span className='fontNum rightMargin' >字数 761</span>
                <span className='readNum rightMargin'>阅读 3,765</span>
              </ArticleAuthorInfor>
            </ArticleAuthorInfo>
          </ArticleAuthor>
          <ArticleContent>
            <article >
              <p>
                还算成功把卡号是分开<br></br>
                绝大数存放空间互踩<br></br>
                拆分成空间互踩肯定撒咖啡很苦手等级划分说的话粉丝u都会非常思念看到速回覅粗俗的根本v，啊ui擦是个不错。
                承担成本会计的知识吧

              </p>
            </article>
          </ArticleContent>
          </ArticleWrapper>
          
        </DetailWrapper>
      </div>

      </div>
      
    )
  }
  componentDidMount(){
  this.bindEvent();
  }
  componentWillUnmount(){
    window.removeEventListener("scroll",this.props.changeHeader);
  }
  bindEvent(){
  window.addEventListener("scroll",this.props.changeHeader);
}
}

const mapDiapatchToprops = (dispatch) => {
  return {
    changeHeader: () => {
     
        if(document.documentElement.scrollTop > 50) dispatch(changeHeaderArticle({
          isArticle: true,
          articleTitle: '文章标题',
          articleImg: 'https://upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
          articleAuthorName: '只如初见_2020'}))
        else dispatch(changeHeaderArticle({
          isArticle: false,
          articleTitle: '',
          articleAuthorName: ''}))
    
  }
}
}
export default connect(null,mapDiapatchToprops)(Detail)
