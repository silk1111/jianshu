import styled from 'styled-components'
import logopic from '../../statics/logo.png'
export const HeaderWrapper = styled.nav`
    position: relative;
    width: 100%;
    height: 56px;
    background-color: white;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position:absolute;
    display:block;
    top: 0;
    left:230px;
    width: 100px;
    height: 56px;
    background: url(${logopic});
    background-size: contain;
`;

export const Nav = styled.div`
    margin: 0 auto;
    width:960px;
    height:56px;
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
        margin-left: 5px;
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
    box-shadow: 0 0 8px rgba(0,0,0,.2)

`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height:20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;

`
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
`

export const Addition = styled.div`
    position: absolute;
    right: 240px;
    top: 0;
    width:400px;
    height:56px;
`;

export const Button = styled.button`
    &.reg {
        color:  #ec6149;
        background: white;
    }
    &.write {
        background: #ec6149;
        color: #fff;
    }
    .iconfont {
        margin-right: 5px;
    }
    float: right;
    height: 38px;
    line-height:38px;
    text-align: center;
    padding: 0 20px;
    margin: 9px 12px 0px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    font-size: 15px;

`;