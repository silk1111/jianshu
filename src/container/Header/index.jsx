import React from 'react'
import  {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch ,SearchInfoItem} from './style.js'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
//import {handleInputFocusAction , handleInputBlurAction} from './store/action'
import {actionCreators} from './store'
//import { List } from 'immutable'

//无状态组件，使用props参数传参
const Header = (props) => {
  return (
    <div>
      <HeaderWrapper >
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>
          <span className="iconfont bigSize">&#xe684;</span>首页
          </NavItem>
          <NavItem className='left'>
            <span className="iconfont">&#xe608;</span>下载App</NavItem>
          <NavItem className='left '>
          <span className="iconfont bigSize">&#xe604;</span>会员</NavItem>
          <NavItem className='left'>
          <span className="iconfont">&#xebce;</span>IT技术</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
           <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={props.searchFocused} classNames='slide'>
              <NavSearch 
                className={props.searchFocused ? 'searchFocused' : '' }
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
             
            </CSSTransition>
            <span className={props.searchFocused ? 'searchFocused iconfont' : 'iconfont' }>&#xe687;</span>
            <SearchInfo  
            className={props.searchFocused ? 'searchFocused' : '' }
            >
              <SearchInfoTitle>热门搜索
               <SearchInfoSwitch >换一批</SearchInfoSwitch>
              </SearchInfoTitle>
              <div>
              {
                props.List.map((Item) => <SearchInfoItem>{Item}</SearchInfoItem>)
              }
                
              </div>
            </SearchInfo>
          </SearchWrapper>
           
          <Addition >
          <Button className='write'>
          <span className="iconfont">&#xe6eb;</span>写文章</Button>
          <Button className='reg'>注册</Button>

          </Addition>
        </Nav>
      </HeaderWrapper>    
    </div>
  )
}
//  class Header extends Component {
 
//   // handleInputFocus = () =>{
//   //   //this.setState({searchFocused : true})
//   //   this.props.changeSearchFocused(true);
//   // }
//   // handleInputBlur = () =>{
//   //   //this.setState({searchFocused : false})
//   //   this.props.changeSearchFocused(false);

//   // }
//   render(){
//     return (
//       <div>
//         <HeaderWrapper >
//           <Logo href='/' />
//           <Nav>
//             <NavItem className='left active'>
//             <span class="iconfont">&#xe684;</span>首页
//             </NavItem>
//             <NavItem className='left'>
//               <span class="iconfont">&#xe608;</span>下载App</NavItem>
//             <NavItem className='left '>
//             <span class="iconfont">&#xe604;</span>会员</NavItem>
//             <NavItem className='left'>
//             <span class="iconfont">&#xebce;</span>IT技术</NavItem>
//             <NavItem className='right'>登录</NavItem>
//             <NavItem className='right'>
//              <span class="iconfont">&#xe636;</span>
//             </NavItem>
//             <SearchWrapper>
//               <CSSTransition timeout={200} in={this.props.searchFocused} classNames='slide'>
//                 <NavSearch 
//                   className={this.props.searchFocused ? 'searchFocused' : '' }
//                   onFocus={this.props.changeSearchFocused(true)}
//                   onBlur={this.props.changeSearchFocused(false)}
//                 ></NavSearch>
               
//               </CSSTransition>
//               <span class={this.props.searchFocused ? 'searchFocused iconfont' : 'iconfont' }>&#xe687;</span>
//             </SearchWrapper>
             
//             <Addition >
//             <Button className='write'>
//             <span class="iconfont">&#xe6eb;</span>写文章</Button>
//             <Button className='reg'>注册</Button>

//             </Addition>
//           </Nav>
//         </HeaderWrapper>
        
//       </div>
//     )
//   }
// }
const mapStateToProps = (state) =>{
    //immutable对象的获取要使用get
  //return {searchFocused : state.get('header').get('searchFocused')};
  return {
    searchFocused : state.getIn(['header','searchFocused']),
    List : state.get('header').get('List'),
};

}
const mapDispatchToProps = (dispatch) =>{
  return {
    handleInputFocus : () => {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.handleInputFocusAction())}  ,
    handleInputBlur : () => { dispatch(actionCreators.handleInputBlurAction()) }
  }
}

//暴露容器组件
export default connect(mapStateToProps,mapDispatchToProps)(Header);
