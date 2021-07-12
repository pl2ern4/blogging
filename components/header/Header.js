import { useContext } from 'react';
import { HeaderWrapper, TitleWrapper, LoginWrapper } from './styles';
import LoggedIn from '../logged-in';
import {Application} from '../../context/application-context/ApplicationContext';
import { useRouter } from 'next/router'

const Header = ({ user, signout }) => {
    const userProfile = useContext(Application);
    const router = useRouter()
    const handleSignoutClick = () =>{
        signout();
        router.reload(window.location.pathname)
    }
    return (
        <HeaderWrapper>
            <TitleWrapper>
                Article IT
            </TitleWrapper>
            <LoginWrapper>
                    <LoggedIn name={user.name} image={user.image} signout={handleSignoutClick} layout='fill'/>
            </LoginWrapper>
        </HeaderWrapper>
    )
}

Header.defaultProps = {
    user: {}
}

Header.displayName = 'Header';

export default Header;
