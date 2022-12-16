import styled from 'styled-components'

export const DetailWrapper = styled.div`
    display: flex;
    width: 1000px;
    margin: 0 auto;
    padding-top: 10px;
    padding-left: 16px;
    padding-right: 16px;
    z-index: 1;
`;
export const ArticleWrapper = styled.div`
    padding: 32px;
    background-color: #fff;
    margin-right: 10px;
    width: 730px;
    z-index: 1;

`;

export const ArticleTitle = styled.h1`
    margin-top: 32px;
    margin-bottom: .5em;
    color: #404040;
    display: block;
    font-size: 30px;
    font-weight: 700;
`
export const ArticleAuthor = styled.div`
    display: flex;
    margin-bottom: 32px;
`;
export const ArticleAuthorIMG = styled.a`
    width: 50px;
    height: 50px;
    img {
        border-radius: 50%;
        border: 1px solid #eee;
        min-width: 50px;
        min-height: 50px;
        width: 50px;
        height: 50px;
    }
    
`;

export const ArticleAuthorInfo = styled.div`
    height: 50px;
    margin-left: 8px;
`;

export const ArticleAuthorAbove = styled.div`
    margin-bottom: 6px;
    span {
        font-size: 16px;
        color: #404040;
        margin-right: 8px;
    }
    img {
        min-height: 16px;
        min-height: 16px;
        height: 16px;
        width: 16px;
        margin-right: 8px;
        vertical-align: middle;
    }
    button {
        color: #ec7259;
        background-color: #fff;
        border-color: #ec7259;
        border-radius: 12px;
        border: 1px solid #ec7259;
        padding: 2px 9px;
    }
`;

export const ArticleAuthorInfor = styled.div`
    line-height:18px;
    font-size: 13px;
    color: #969696;
    .rightMargin {
        margin-right: 13px;

    }
    .hot {
        color: #ec7259;
        .iconfont {
            font-size: 13px;
            margin-right: 6px;
        }       
    }
    
`

export const ArticleContent = styled.div`
    height: 2000px;
`;