import styled from 'styled-components';

const HeaderWrapper = styled.div`
    position: absolute;
    top:0;
    height: 5rem;
    width:100%;
    background-color: black;
    display: flex;
    padding: 0 1rem;
`;

const TitleWrapper = styled.span`
        ${({theme})=>`
        color: ${theme.title.color};
        font-weight: ${theme.title.fontWidth};
        flex-grow: 1;
        font-size: 3rem;
        margin: auto;
    `}
`;

const LoginWrapper = styled.div`
    flex-grow: 2;
`;

const LogoutIn = styled.a`
    display: block;
    float: right;
    color: white;
    font-weight: 100;
    font-size: 20px;
    margin: auto 0;
    cursor: pointer;
    line-height: 3.5;
    &:hover, &:focus{
        color: yellow;
    }
    &::after {
        content: "";
        clear: both;
        display: table;
      }
`;

export {
    HeaderWrapper,
    TitleWrapper,
    LoginWrapper,
    LogoutIn
}