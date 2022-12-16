import styled from 'styled-components'

export const HomeWrapper = styled.div`
    padding-top: 56px;
    overflow: hidden;
    margin-right: -15px;
    z-index: 1;    
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left; 
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        vertical-align: middle;
        width: 625px;
        height: 270px;
    }

`;

export const HomeRight = styled.div`
    width: 300px;
    float: right; 
    padding-top: 30px;
`;
export const ListAdv = styled.div`
        max-width: 625px;

`;
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    max-width: 625px;
    position: relative;
    &.have-img {
        min-height: 100px;
        overflow: hidden;

        .content {
            padding-right: 165px;

        }
        img {
            position: absolute;
            right:0;
            top: 30px;
            width: 150px;
            height: 100px;
            border-radius: 4px;
            border: 1px solid #f0f0f0;
        }
        

    };

`;

export const ListInfo = styled.div`
    max-width: 625px;
    margin-bottom: 8px;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight:bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const ListBottom = styled.div`
    line-height: 20px;
    font-size: 12px;
    color: #b4b4b4;
    .authorName {
        margin-right: 10px;

    }
    .authorName:hover {
        color: #777;

    }
`;

export const BottomItem = styled.span`
    margin-right: 10px;
    height: 13.5px;
    &.hot {
        color: #ea6f5a;
    }
    &.notshow {
        display: none;
    }
    .iconfont {
        font-size: 14px;
        margin-right: 2px;
    }
`;
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: #a5a5a5;
    text-align: center;
    padding: 10px 15px;
    box-sizing: border-box;
    margin: 30px auto 60px;
    display: block;
    color: white;
`;

export const RecommendWrapper = styled.div`
    width: 280px;
    margin-top: -4px;
`;

export const RecommendItem = styled.div`
    img {
        height: 50px;
    }
    margin-bottom: 6px;
    
`;

export const DownLoadWrapper = styled.div`
    margin: 0 0 30px;
    padding: 10px 22px;
    width: 280px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    img {
        height: 60px;
        width: 60px;
        vertical-align: middle;
    } 
    &:hover {
        background-color: red;
    }
`;

export const DownloadInfo = styled.div`
    width: 143px;
    margin: 0 0 0 7px;
    display: inline-block;
    vertical-align: middle;
    .title {
        font-size: 15px;
        color: black;
    }
    .description {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;

export const AdvPic = styled.div`
        width: 300px;
        height: 250px;
        position: relative;
        margin-bottom: 20px;
    img {
        width: 100%;
        display: block;
    }
`;

export const PicClosed = styled.div`
    position: absolute;
    right:0;
    bottom: 0;
    .logo-link {
        display: inline-block;
        width: 33px;
        height: 10px;
        margin: 3px 4px;
    }
    
    .logo-close-img {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin: 4px;
    }
   
`;

export const RecommendAuthorWrapper = styled.div`
    max-width: 300px;
        box-sizing: border-box;

`;

export const RecommendAuthorHeader = styled.div`
    span {
        font-size: 14px;
        color: #969696;
    }
    .page-change {
    float: right;
    display: block;
    font-size: 14px;
    box-sizing: border-box;
    color: #969696;
    .iconfont {
        margin-right: 5px;
    }
    }
`;

export const RecommendAuthorList = styled.div`
    margin: 0 0 20px;
    /* text-align: left; */
    /* list-style: none; */
`;


export const RecommendAuthorItem = styled.div`
    line-height: 20px;
    margin-top: 15px;
    box-sizing: border-box;
    overflow: hidden;
    .authorName {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        display: block;
    }
    .detail {
        /* p是块级元素，所以不需要转换display */
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
    
`;

export const RecommendAuthorImg = styled.div`
    float: left;
    margin-right: 10px;
    img {
        max-width: 48px;
        max-height: 48px;
        width: 48px;
        height:48px;
        border-radius: 50%;
        border: 1px solid #ddd;
        font-size: 3px;

    }
`;

export const RecommendAuthorFollow = styled.div`
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
   


`;

export const RecommendAuthorFooter = styled.div`
    padding: 7px 7px 7px 12px;
    border: 1px solid #dcdcdc;
    background: #f7f7f7;
    border-radius: 4px;
    text-align: center;
    span {
        line-height: 17px;
        font-size: 13px;
        color: #787878;
        
    }
   
`

export const BackTop = styled.a`
    height: 50px;
    width: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    border: 1px solid #dcdcdc;
    padding: 15px;
    box-sizing: border-box;
    display: block;
    &:hover {
        background-color: #f7f7f7;
    }
    .iconfont {
        height: 20px;
        width: 20px;
        font-size: 20px;
        display: block;
        box-sizing: border-box;

    }

`;
