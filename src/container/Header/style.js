import styled from 'styled-components'
import logopic from '../../statics/assets/logo.png'
export const HeaderWrapper = styled.nav`
    position: fixed;
    right: 0;
    left: 0;
    top:0;
    width: 100%;

    height: 56px;
    background-color: white;
    border-bottom: 1px solid #f0f0f0;
    z-index: 9;
    overflow:hidden;
`;

export const Logo = styled.a`
    position:absolute;
    display:block;
    top: 0;
    left: 5%;
    width: 100px;
    height: 56px;
    background: url(${logopic});
    background-size: contain;
`;

export const Nav = styled.nav`
    margin: 0 auto;
    width:960px;
    height:56px;
    padding: 0 15px;
    box-sizing: border-box;

`;

export const NavItem = styled.div`
    &.left {
        float:left;
        font-size: 17px;
    }
    &.right {
        
        float:right;
        color:#969696;
        font-size: 15px;
        margin: 0px 6px 0px 10px;
        .iconfont {
            position: relative;
            bottom: 0px;
        }
    }
    &.active {
        color: #ea6f5a;
    }
    .iconfont {
        position: relative;
        bottom: -2px;
        margin-right: 5px;
        font-size: 18px;
    }
    .bigSize {
        font-size: 21px;
    }
    
    position: relative;
    height:56px;
    padding: 15px;
    line-height:26px;
    box-sizing: border-box;
    text-align: center;
    background: white;
    font-weight: 520;
`;


export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfont {
        &.searchFocused {
            background:#999;
            color:white;
        }
        position: absolute;
        top: 9px;
        right: 5px;
        height: 38px;
        width:38px;
        line-height: 38px;
        text-align: center;
        border-radius: 19px;
    }
    
`;


export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    &::placeholder {
    color: #999;
    padding-left:5px;
}
    &.searchFocused {
    width: 340px;
}
    &.slide-enter {
        width: 240px;

        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 340px;
    }
     width: 240px;
     height: 38px;
     border-radius:19px;
     margin-top: 9px;
     margin-left: 20px;
     border:none;
     padding: 0 40px 0 20px;
     box-sizing: border-box;
     background: #eee;
     font-size: 14px;
     color: #777;
     border: none;
     outline: none;

`;

export const SearchInfo = styled.div`
&.searchFocused {
    display: block;
    background: white;
}
    display: none;
    width: 340px;
    position: absolute;
    left: 0;
    top: 56px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);

`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;

`;
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 15px;
    margin-bottom: 15px;

    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;





export const Button = styled.a`
    display: block;
    &.reg {
        color:  #ec6149;
        background: white;
        float: right;
        &:hover {
            background-color: rgba(236,97,73,.1);
        }
    }
    &.write {
        background: #ec6149;
        color: #fff;
        float: right;

    }
    
    .iconfont {
        margin-right: 5px;
    }
    float: right;
    height: 38px;
    line-height:36px;
    text-align: center;
    padding: 0 18px;
    margin: 9px 13px 0px 5px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    font-size: 15px;

`;
export const ArticleHeadWrapper = styled.div`
    position: fixed;
    height:56px;
    min-height: 56px;
    max-height: 56px;
    width: 100%;
    z-index: 9;

`;

export const ArticleHead = styled.div`
    display: flex;
    justify-content: space-between;//两端对齐
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    background-color: white;
`;

export const ArticleHeadTitle = styled.h1`
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 56px;
`;

export const ArticleAuthor = styled.div`
    display:flex;
    height: 56px;
    align-items: center;
    .authorImg {
        max-width: 40px;
        max-height: 40px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .authorName {
        color: #7d7d7d;
        margin: 0 10px;
    }
    .headerButton {
        border: 1px solid #ec7259;
        border-radius: 50px;
        padding: 4px 12px;

    }
    .follow {
        color: #ec7259;
        background-color: #fff;
    }
    .support {
        margin-left: 8px;
        background-color: #ec7259;
        color: white;

    }
`;

export const UserImg = styled.div`
    float:right;
    height:100%;
    color:#969696;
    font-size: 15px;
    margin: 0px 6px 0px 10px;
    img {
        

        height: 40px;
        max-height: 40px;
        width: 40px;
        max-width: 40px;
        border-radius: 20px;
        margin: 8px 24px 8px 16px;
        
    }
    &:hover {
        +.user-img-other {
        display: block;

    }
    }
    
    
       
`
export const UserImgOther = styled.div`
    display: none;
    position:absolute;
    top:56px;
    right:50px;
    /* left: auto; */
    height: 200px;
    background-color:#fff;
    box-shadow: 0 0 8px rgb(0 0 0 / 10%);//渐变边框
    &:hover {
        
        display: block;

    
    }
`
export const OtherItem = styled.div`
    padding: 10px 20px;
    line-height: 30px;
    min-width: 160px;
    color: #333;
    .iconfont {
        color: #ec7259;
        margin-right: 15px;
        font-size: 18px;

    }
    &:hover {
        
        background-color:#eee;
    
    }
`