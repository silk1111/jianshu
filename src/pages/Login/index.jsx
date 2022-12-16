import React, { Component } from 'react'
import {
    Sign,
    SignLogo,
    SignContainer,
    SignDownloadAPP,
    SignDownloadQrcode,
    SignDownloadQrcodeBig,
    SignMain,
    SignTitle,
    SignMainContainer,
    MoreSign,
    SignInput,
    RememberMe,
    SignButton
} from './style'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getUserAction} from "./store/action"
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
 class Login extends Component {
  render() {
    const {loginVerify, isLogIn} = this.props;
    if(isLogIn == true){
      return <Redirect to='/' />
    }else{
      return (
      <Sign>
        <Link to='/' >
          <SignLogo />
        </Link>
        <SignContainer>
          <SignDownloadAPP>
            <a className='download-btn'>下载简书APP</a>
            <SignDownloadQrcode >
              <SignDownloadQrcodeBig className='download-qrcode-big'>
              </SignDownloadQrcodeBig>
            </SignDownloadQrcode>
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
                <SignInput>
                  <input type="text" className='input-up' name="" id="" placeholder='手机号或邮箱' ref={(input)=>{this.account = input} }/>
                  <i className='iconfont'>&#xe6a2;</i>
                </SignInput>
                <SignInput >
                  <input type="password " className='input-own' name="" id="" placeholder='密码' ref={(input)=>{this.password = input}}/>
                  <i className='iconfont'>&#xe777;</i>
                </SignInput>
                <RememberMe>
                    <input  type="checkbox" name="" id="" defaultChecked="true" /><span>记住我</span> 
                  </RememberMe>
                  <SignButton>
                    <button className='sign-in-button' onClick={() => {loginVerify(this.account.value,this.password.value)}}>登录</button>
                  </SignButton>
              <MoreSign>
              <h6>社交账号登录</h6>
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
}
const mapStateToProps = (state) => {
  console.log("登录状态为", state.getIn(['login','isLogIn']));
  
  return {
    isLogIn: state.getIn(['login','isLogIn'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginVerify :(account,password) => {
     
      dispatch(getUserAction(account,password))} 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
