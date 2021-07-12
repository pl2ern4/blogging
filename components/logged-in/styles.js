import styled from 'styled-components';
import Image from 'next/image'

const LoginWrapper = styled.div`
    float:right;
    display: inline-flex;
    height:100%;
    cursor: pointer;
`;

const NameWrapper = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: white;
    margin: auto auto auto 1rem;
    @media only screen and (max-width: 786px) {
        display:none;
    }
`;

const ProfilePictureWrapper = styled.span`
    width: 3rem;
    height: 3rem;
    margin: auto;
`;

const ProfilePicture = styled(Image)`
    border-radius: 50%;
    width: 2rem!important;
    height:2rem!important;
}
`;

const Logout = styled.div`
    background-color: white;
    height: 3rem;
    width: 11rem;
    right: 0;
    top: 4rem;
    position: absolute;
    border: 0.5px solid;
    border-radius: 0.2rem;
    line-height: 2.5rem;
    text-align: center;
    cursor: pointer;
    opacity: 1;
    visibility: visible;
    transition: opacity .5s ease-in-out
    ${({hide})=> hide && 
    `
    opacity: 0;
    visibility: hidden;
    `}
`;

export {
    NameWrapper,
    ProfilePicture,
    ProfilePictureWrapper,
    LoginWrapper,
    Logout
}