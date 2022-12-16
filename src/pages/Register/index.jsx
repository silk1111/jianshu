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
    RegisterMsg,
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
              <Link to='/sign-in' className='  mainbtn'>
                 登录
              </Link>
              <b>·</b>
              <Link to='/register' className='active mainbtn'>
                  注册
              </Link>
              
            </SignTitle>
            <SignMainContainer>
              <form className='sin-in-form'>
              <SignInput>
                  <input type="text" className='input-up' name="" id="" placeholder='你的昵称'/>
                  <i className='iconfont'>&#xe6a2;</i>
                </SignInput>
                <SignInput>
                  <input type="text" name="" id="" placeholder='手机号'/>
                  <i className='iconfont'>&#xe6a2;</i>
                </SignInput>
                <SignInput >
                  <input type="password " className='input-down' name="" id="" placeholder='密码'/>
                  <i className='iconfont'>&#xe777;</i>
                </SignInput>
                
                  <SignButton>
                    <button className='register-button'>注册</button>
                  </SignButton>
                  <RegisterMsg>点击“注册”即表示您同意并愿意遵守简书<br></br> 
                  <a>用户协议</a> 和 <a>隐私政策</a> 。
                  </RegisterMsg>
              </form>
              <MoreSign>
              <h6>---- 社交账号直接注册 ----</h6>
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
