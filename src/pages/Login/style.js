import styled from 'styled-components'
import signBackground from '../../statics/assets/signBackground.png'
import signDownloadQrcode from '../../statics/assets/login_page_download.png'
import logopic from '../../statics/assets/sign_logo.png'

export const Sign = styled.div`
    display: flex;
    align-items: center;//纵向居中
    text-align: center;
    font-size: 14px;
    min-width: 900px;
    height: 100vh;
    background-color: #f1f1f1;
    position: relative;
`;

export const SignLogo = styled.div`
    position:absolute;
    display:block;
    top: 56px;
    margin-left: 50px;
    width: 100px;
    height: 46px;
    background: url(${logopic});
    background-size: contain;
    
`;

export const SignContainer = styled.div`
    width: 820px;
    height: 600px;
    margin: 0 auto;
    background-image: url(${signBackground});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 45px 0;
    position: relative;
    text-align: center;
    
`;

export const SignDownloadAPP = styled.div`
    position: absolute;
    left:60px;
    top: 452px;
    display: flex;
    .download-btn {
        width: 252px;
        height: 46px;
        border-radius: 23px;
        background-color: #ec7259;
        color: white;
        border: none;
        font-size: 18px;
        font-weight: 500;
        line-height: 46px;
        margin-right: 15px;
    }
    
`;

export const SignDownloadQrcode = styled.div`
    cursor: pointer;

    width: 46px;
    height: 46px;
    background-color: #fff;
    background-image: url(${signDownloadQrcode});
    background-size: 38px;//背景图片尺寸
    background-repeat: no-repeat;//不重复
    background-position: 4px 4px;//设置背景图片的位置，它通过设置水平x方向和垂直y方向的取值来到达效果
    :hover {
        .download-qrcode-big {
            display: block;
        }
    }
`;

export const SignDownloadQrcodeBig = styled.div`
    width: 160px;
    height: 160px;
    display: none;
    background-color: #fff;
    position: absolute;
    top: -185px;
    right: -25px;
    border-radius: 10px;
    background-image: url(${signDownloadQrcode});
    background-size: 132px;
    background-position: 50%;
    background-repeat: no-repeat;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 15%);
    z-index: 10;

    &::before {
        content: "";
        display: block;
        width: 33px;
        height: 16px;
        background-color: #fff;
        position: absolute;
        bottom: -16px;
        right: 16px;
        clip-path: polygon(0 0,50% 100%,100% 0);
}
`;

export const SignMain = styled.div`
    float: right ;
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);//渐变边框

`;

export const SignTitle = styled.div`
    padding: 10px;
    margin-bottom: 50px;
    .mainbtn {
        padding: 10px;
        font-size: 18px;
        color: #969696;
        :hover {
            border-bottom: 2px solid #ec7259;

        }
    }
    b {
        padding: 15px;
        font-weight: 700;
        font-size: 18px;
        color: #969696;
        font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;


    }
    .sign-in {

    }
    .register {

    }
    .active {
        color: #ec7259;
        border-bottom: 2px solid #ec7259;
        font-weight: 700;
    }
    
`;

export const SignMainContainer = styled.div`
    
`;

export const MoreSign = styled.div`
    margin-top: 50px;
    .iconfont {
        width: 50px;
        height: 50px;
        font-size: 28px;
        margin: 0 5px;
        display: inline-block;
        line-height: 50px;
        &.weibo {
            color: #e05244;
        }
        &.weixin {
            color: #00bb29;
            font-size: 34px;
        }
        &.qq {
            color: #498ad5;
            font-size: 32px;

        }
    }
    h6 {
        &::before {
            content:"";
            display: block;
            width: 60px;
            height:20px;;
            border-top: 1px solid #b5b5b5;
            position: absolute;
            top: 5px;
            left: 25px;
        }
        &::after {
            content:"";
            display: block;
            width: 60px;
            height:20px;;
            border-top: 1px solid #b5b5b5;
            position: absolute;
            top: 5px;
            right: 25px;
        }
        position: relative;
        color: #969696;
        margin-bottom: 10px;
        font-size: 12px;
    }
   
`;

export const SignInput = styled.div`
    position: relative;
    .iconfont {
        position: absolute;
        left: 10px;
        top: 16px;
        font-size: 18px;
        color: #969696;
    }
    input {
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
        border-top: none;
        color: #969696;
        :focus {
            
            outline:none;

        }
    }
    .input-up {
        border-radius:  4px 4px 0 0;
        border: 1px solid #c8c8c8;
        background-color: hsla(0,0%,71%,.1);
    }
    
   
`;

export const RememberMe = styled.div`
    font-size: 15px;
    color: #969696;
    float: left;
    margin-top: 15px;
    input {
        margin-right: 5px;
    }
`;

export const SignButton = styled.a`
    display: block;
    .sign-in-button {
        background: #3194d0;

    }
    button {
        background: #42c02e;
        margin-top: 20px;
        width: 100%;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        outline: none;
    }
    
    
    
`;


