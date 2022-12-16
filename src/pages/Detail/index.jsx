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
import { getArticleDetail } from './store/action'
import { PureComponent } from 'react'
import { Link } from 'react-router-dom'
class Detail extends PureComponent {
  render() {
    
    const {articleMsg} = this.props;

    
    
    return (
      <div>
       
        <Header ></Header>
        <div style={{backgroundColor: "#f9f9f9"}}>
        <DetailWrapper>
          <ArticleWrapper>
          <ArticleTitle>
          {articleMsg.getIn(['article','title'])}
          </ArticleTitle>
          <ArticleAuthor>
            <ArticleAuthorIMG>
              <img src={articleMsg.getIn(['author','img'])} alt='' />
            </ArticleAuthorIMG>
            <ArticleAuthorInfo>
              <ArticleAuthorAbove >
                <span className='deatilAuthorName'>{articleMsg.getIn(['author','name'])}</span>
                <img src='https://upload.jianshu.io/user_badge/19c2bea4-c7f7-467f-a032-4fed9acbc55d' alt='' />
                <button>关注</button>
              </ArticleAuthorAbove>
              <ArticleAuthorInfor>
                <span className='hot rightMargin' >
                  <i className='iconfont ' >&#xe60d;</i>
                  <span>{articleMsg.getIn(['article','hot'])}</span>
                </span>
                <span className='articleDate rightMargin'>{articleMsg.getIn(['article','time'])}</span>
                <span className='fontNum rightMargin' >字数 {articleMsg.getIn(['article','font-num'])}</span>
                <span className='readNum rightMargin'>阅读 {articleMsg.getIn(['article','read-num'])}</span>
              </ArticleAuthorInfor>
            </ArticleAuthorInfo>
          </ArticleAuthor>
          <ArticleContent>
            <article >
            <div dangerouslySetInnerHTML={{__html: articleMsg.getIn(['article','content'])}} />
             
                 

             
            </article>
          </ArticleContent>
          </ArticleWrapper>
          {/* <Link to='/'>
          <h1>aa</h1>
          </Link> */}
        </DetailWrapper>
      </div>

      </div>
      
    )
  }
  componentDidMount(){
    this.props.changeArticle(this.props.match.params.id)
    this.bindEvent();
  }
  componentWillUnmount(){
    console.log('卸载');
   window.removeEventListener("scroll",this.scrollEvent);
   //确保在卸载组件后，isArticle的值为false，否则假如是单页面跳转，就会出现Header仍然为文章标题的情况
   this.props.changeHeader({
    isArticle: false,
    articleTitle: '',
    articleAuthorName: ''})
    
  }
  //开启监视
  bindEvent() {
  window.addEventListener("scroll",this.scrollEvent);
}
//在监视中的方法需要传参时，不可直接写，否则会立即执行，失去控制条件，可以再嵌套一个具名函数（这里是由于还需要使用函数名卸载监听)
 scrollEvent =() => {
  const data = {
    isArticle: true,
    articleTitle:this.props.articleMsg.getIn(['article','title']), 
    articleAuthorImg: this.props.articleMsg.getIn(['author','img']),
    articleAuthorName: this.props.articleMsg.getIn(['author','name'])
  }
  //当距离顶部的距离大于50时，修改Header内容
  if(document.documentElement.scrollTop > 50){    
    this.props.changeHeader(data)}
  else{
    this.props.changeHeader({
      isArticle: false,
      articleTitle: '',
      articleAuthorName: ''})
    }

 }
}
const mapStateToProps = (state) => {
  
  return {
    articleMsg: state.get('detail')
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    changeHeader: (data) => {               
      dispatch(changeHeaderArticle(data)) 
    },
   changeArticle: (id) => {
    //console.log("获取id为",{id},"的文章");
    dispatch(getArticleDetail(id))
    }
}
}
export default connect(mapStateToProps,mapDispatchToprops)(Detail);
