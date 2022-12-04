import React, { Component } from 'react'
import {HomeWrapper, HomeLeft, HomeRight} from './style.js'
import List from './components/List.js'
import Recommend from './components/Recommend.js'
import DownloadApp from './components/DownloadApp.js'
import RightAdv from './components/RightAdv.js'
import RecommendAuthor from './components/RecommendAuthor.js'
import { connect } from 'react-redux'
import axios from 'axios'
 class Home extends Component {
  render() {
    return (
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
        </HomeWrapper>
      </div>
    )
  }
  componentDidMount(){
    axios.get('/api/home.json').then((res) => {
      console.log(res.data.data);
    }).catch(() => {
      console.log('get home.json error');
    })
  }

}
const mapDispatchToProps = (dispatch) => {
  return{
    changeHomeData : 
  }
}
export default connect(null,mapDispatchToProps)(Home);
