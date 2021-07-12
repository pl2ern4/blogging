import styled from "styled-components";

const AddArticleIcon = styled.span`
    position: fixed;
    display: inline-display;
    right: 1rem;
    bottom: 1rem;
    color: white;
    background-color: black;
    font-size: 2rem;
    height: 2rem;
    width: 2rem;
    text-align: center;;
    line-height: 2rem;
    font-weight: 800;
    border-radius: 1rem;
    cursor: pointer;
    &:hover span{
        visibility: visible;
    }
`;

const ToolTip = styled.span`
    width: 5rem;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    visibility: hidden;
    position: absolute;
    z-index: 1;
    right: 2.5rem;
    font-size: 10px;
    bottom: 0;
    font-weight: 100;
    height: 2rem;
    line-height: 1.5rem;
    &::after{
        content: " ";
        position: absolute;
        top: 35%;
        left: 60%;
        margin-left: 32px;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent black;
    }
`;

export {
    AddArticleIcon,
    ToolTip
};