import React,{Component} from 'react'
import  {HeaderWrapper,
        Logo,
        Nav,
        NavItem,
        NavSearch,
       
        Button,
        SearchWrapper, 
        SearchInfo, 
        SearchInfoTitle, 
        SearchInfoSwitch ,
        SearchInfoItem,
        ArticleHeadWrapper,
        ArticleHead,
        ArticleHeadTitle,
        ArticleAuthor,
        UserImgOther,
        UserImg,
        OtherItem
      } from './style.js'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
//import {handleInputFocusAction , handleInputBlurAction} from './store/action'
import {actionCreators} from './store'
//import { List } from 'immutable'
import { Link } from 'react-router-dom'
import { PureComponent } from 'react'
//无状态组件，使用props参数传参
class Header extends PureComponent {
  render(){
    
    const {searchFocused, List, isArticle, articleTitle, articleAuthorImg, articleAuthorName, isLogIn, userImg, handleInputFocus, handleInputBlur, signOut} = this.props;
  return (
    <div>
      { isArticle ? 
      <HeaderWrapper>
        <ArticleHeadWrapper>

          <ArticleHead>
            <ArticleHeadTitle>
              {articleTitle}
              </ArticleHeadTitle>
              <ArticleAuthor>
                <img className='authorImg' src={articleAuthorImg} alt='' />
                <h1 className='authorName'>{articleAuthorName}</h1>
                <button className='follow headerButton'>关注</button>
                <button className='support headerButton'>赞赏支持</button>
              </ArticleAuthor>
              
              
          </ArticleHead>
        </ArticleHeadWrapper>

      </HeaderWrapper>
     

      
      
    : 
        <HeaderWrapper >

          <Link to='/'>
            <Logo />
          </Link>
            <Button className='write'>
              <span className="iconfont">&#xe6eb;</span>写文章
            </Button>
            { isLogIn == true ? 
            <div className='head-user'>
              <UserImg >
                 <img  src={userImg} alt='' />
                </UserImg>
                  <UserImgOther className='user-img-other'>
                    <OtherItem onClick={signOut}>
                     <i className='iconfont'>&#xe603;</i> 登出
                    </OtherItem>
                  </UserImgOther>
                
                 
            </div>
                 
                  
                  :
                  <Link to='/register'>
                  <Button className='reg'>注册</Button>
                </Link>
                  
            }
            

          <Nav>
            <Link to='/'>
              <NavItem className='left active'>
                <span className="iconfont bigSize">&#xe684;</span>首页
              </NavItem>
            </Link>
            <NavItem className='left'>
              <span className="iconfont">&#xe608;</span>下载App</NavItem>
            <NavItem className='left '>
              <span className="iconfont bigSize">&#xe604;</span>会员</NavItem>
            <NavItem className='left'>
              <span className="iconfont">&#xebce;</span>IT技术</NavItem>
              {isLogIn == true ? 
              ""
              
              :
              <Link to='/sign-in'>
              <NavItem className='right'>登录</NavItem>
            </Link>
            }
            
            <NavItem className='right'>
              <span className="iconfont">&#xe636;</span>
            </NavItem>

            <SearchWrapper>
              <CSSTransition timeout={200} in={searchFocused} classNames='slide'>
                <NavSearch
                  className={searchFocused ? 'searchFocused' : ''}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                ></NavSearch>

              </CSSTransition>
              <span className={searchFocused ? 'searchFocused iconfont' : 'iconfont'}>&#xe687;</span>
              <SearchInfo
                className={searchFocused ? 'searchFocused' : ''}
              >
                <SearchInfoTitle>热门搜索
                  <SearchInfoSwitch >换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                  {
                    List.map((Item) => <SearchInfoItem>{Item}</SearchInfoItem>)
                  }

                </div>
              </SearchInfo>
            </SearchWrapper>


          </Nav>
        </HeaderWrapper>   
    } 
       
    </div>
  )
  }
}

const mapStateToProps = (state) =>{
    //immutable对象的获取要使用get
  //return {searchFocused : state.get('header').get('searchFocused')};
  return {
    searchFocused : state.getIn(['header','searchFocused']),
    List : state.get('header').get('List'),
    isArticle: state.getIn(['header','isArticle']),
    articleTitle: state.getIn(['header','articleTitle']),
    articleAuthorImg: state.getIn(['header','articleAuthorImg']),
    articleAuthorName: state.getIn(['header','articleAuthorName']),
    isLogIn: state.getIn(['login','isLogIn']),
    userImg: state.getIn(['login','img'])
};

}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputFocus : () => {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.handleInputFocusAction())}  ,
    handleInputBlur : () => { dispatch(actionCreators.handleInputBlurAction()) },
    signOut : () => {dispatch(actionCreators.signOutAction())}
  }
}

//暴露容器组件
export default connect(mapStateToProps,mapDispatchToProps)(Header);
