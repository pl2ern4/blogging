import styled from 'styled-components';

const FormWrapper = styled.div`
    margin: 1rem
`;

const Input = styled.input`
    height: 2rem;
    border-radius: 0.3rem;
    border: 1px solid;
    width:100%;
    margin: 1rem 0;
    &:focus{
        outline:unset;
    }
    ${({error})=>error && `
        border-color:red;
    `}
    ${({type})=>
    type==="file" && 
    `
        position: relative;
        text-align: right;
        z-index: 2;
        &::file-selector-button{
            border: none;
            height: 100%;
            width: 20%;
            padding: .2em .4em;
            border-radius: .2em;
            background-color: lightgray;
            transition: 1s;
        }
    `}
`;

const TextArea = styled.textarea`
    height: 10rem;
    border-radius: 0.3rem;
    border: 1px solid;
    width:100%;
    margin: 1rem 0;
    resize: none;
    &:focus{
        outline:unset;
    }
    ${({error})=>error && `
        border-color:red;
    `}
`;

const SubmitButton = styled.button`
    height: 2rem;
    border-radius: 0.3rem;
    border: 1px solid;
    width:100%;
    margin: 1rem 0;
    &:focus{
        outline:unset;
    }
    cursor: pointer;
`;

const InputWrapper = styled.div`
    ${({displayType})=> 
    displayType && 
    `
    position: relative;
    display: flex;
    `}
`;

const Separator = styled.h3`
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
    margin: 10px 0 20px; 
    span{
        padding: 0 1rem; 
        background-color: white;
        z-index: 1;
    }
`;
const Button = styled.button`
    width:100%;
    flex-grow: 0;
    height: 2rem;
    width: 7rem;
    margin: auto 1rem;
    &:focus{
        outline:none;
    }
`;

const Error = styled.ul`
    color: red;
    list-style-type: square;
    margin: 1rem;
    &,li{
        padding:unset
    }
`;
export {
    Input,
    InputWrapper,
    Button,
    FormWrapper,
    Error,
    TextArea,
    Separator,
    SubmitButton
}