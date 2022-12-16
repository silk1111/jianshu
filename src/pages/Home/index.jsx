import React, { PureComponent } from 'react'
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style.js'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import DownloadApp from './components/DownloadApp.js'
import RightAdv from './components/RightAdv.js'
import RecommendAuthor from './components/RecommendAuthor.js'
import {GET_HOME_DATA} from './store/constants'
import { connect } from 'react-redux'
import {getHomeDataAction, changeScrollShow} from './store/action'
import axios from 'axios'
import Header from '../../container/Header/index.jsx'
 class Home extends PureComponent {
  handleScrollTop = () => {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
        <Header ></Header>
        <div style={{marginLeft: 'auto', marginRight:'auto', width: '960px'}}>
        <HomeWrapper>
          <HomeLeft >
            <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/5074/66ebf55340d2bde62e28927bb47be29da6d10ce8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="图片加载失败" />
            <List ></List>
          </HomeLeft>
          <HomeRight >
            <Recommend ></Recommend>
            <DownloadApp />
            <RightAdv />
            <RecommendAuthor />
          </HomeRight>
          {this.props.showScroll ? 
          <BackTop onClick={this.handleScrollTop}>
            <span className='iconfont'>&#xe70b;</span>
          </BackTop> :
          null }
          
        </HomeWrapper>
      </div>
        
      </div>
      
    )
  }
  componentDidMount(){
    this.props.getHomeData();
    this.bindEvent();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow)

  }
  bindEvent (){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

}

const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home','showScroll'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    //获取首次加载页面时的HOME数据
    getHomeData : () => {
      dispatch(getHomeDataAction())
    },
    changeScrollTopShow: () => {
      if(document.documentElement.scrollTop > 200) dispatch(changeScrollShow(true))
      else dispatch(changeScrollShow(false))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
