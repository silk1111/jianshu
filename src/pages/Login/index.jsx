import React, { Component } from 'react'
import {
    Sign,
    SignLogo,
    SignContainer,
    SignDownloadAPP,
    DownloadQrcode,
    SignMain,
    SignTitle,
    SignMainContainer,
    MoreSign,
    SignInput,
    RememberMe,
    SignButton
} from './style'
import { Link } from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <Sign>
       
        <Link to='/' >
          <SignLogo />
        </Link>
        <SignContainer>
          <SignDownloadAPP>
            <a className='download-btn'>下载简书APP</a>
            <DownloadQrcode />
          </SignDownloadAPP>

          <SignMain>
            <SignTitle>
              <Link to='/sign-in' className=' active mainbtn'>
                 登录
              </Link>
              <b>·</b>
              <Link to='/register' className=' mainbtn'>
                  注册
              </Link>
              
            </SignTitle>
            <SignMainContainer>
              <form className='sin-in-form'>
                <SignInput>
                  <input type="text" className='input-up' name="" id="" placeholder='手机号或邮箱'/>
                  <i className='iconfont'>&#xe6a2;</i>
                </SignInput>
                <SignInput >
                  <input type="password " className='input-own' name="" id="" placeholder='密码'/>
                  <i className='iconfont'>&#xe777;</i>
                </SignInput>
                <RememberMe>
                    <input type="checkbox" name="" id="" defaultChecked="true"/><span>记住我</span> 
                  </RememberMe>
                  <SignButton>
                    <button className='sign-in-button'>登录</button>
                  </SignButton>
              </form>
              <MoreSign>
              <h6>---- 社交账号登录 ----</h6>
              <i className='iconfont weibo' >&#xe601;</i>
              <i className='iconfont weixin' >&#xe602;</i>
              <i className='iconfont qq' >&#xe882;</i>

              </MoreSign>
              
            </SignMainContainer>
          </SignMain>
          
        </SignContainer>
      </Sign>
    )
  }
}
