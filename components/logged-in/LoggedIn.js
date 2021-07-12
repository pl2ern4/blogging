import { useEffect, useRef, useState } from 'react';
import { LoginWrapper,ProfilePictureWrapper, ProfilePicture, NameWrapper, Logout } from './styles';

const LoggedIn = ({image, name, signout}) => {
    const [hide, setHide] = useState(true);
    const ref = useRef();
    const onClick = () => setHide(!hide);
    const handleOnMouseOut = (e) => {
        setHide(true);
    }
    useEffect(()=>{
        if(!hide){
            ref?.current?.focus();
        }
    },[hide])

    return (
        <>
            <LoginWrapper tabIndex={1} onClick={onClick}>
                <ProfilePictureWrapper>
                    <ProfilePicture src={image} alt={name} width="100" height="100"/>
                </ProfilePictureWrapper>
                <NameWrapper>{name}</NameWrapper>
            </LoginWrapper>
            <Logout onBlur={handleOnMouseOut} ref={ref} tabIndex={2} hide={hide} onClick={signout}>
                Logout
            </Logout>
        </>
    )
}

LoggedIn.defaultProps = {}

LoggedIn.displayName = 'LoggedIn';

export default LoggedIn;