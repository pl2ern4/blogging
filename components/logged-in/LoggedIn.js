import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'

import {
  LoginWrapper,
  MenuWrapper,
  ProfilePage,
  ProfilePictureWrapper,
  ProfilePicture,
  NameWrapper,
  Logout,
} from "./styles";

const LoggedIn = ({ image, name, signout }) => {
  const [hide, setHide] = useState(true);
  const ref = useRef();
  const router = useRouter()

  const redirectData = {
      text: 'Profile',
      url: 'profile'
  }
  console.log(router);
  if(router.route === '/profile'){
    redirectData.text = 'Home';
    redirectData.url = '/';
  }
  const onClick = () => setHide(!hide);
  const handleOnMouseOut = (e) => {
    setHide(true);
  };
  useEffect(() => {
    if (!hide) {
      ref?.current?.focus();
    }
  }, [hide]);

  return (
    <>
      <LoginWrapper tabIndex={1} onClick={onClick}>
        <ProfilePictureWrapper>
          <ProfilePicture src={image} alt={name} width="100" height="100" />
        </ProfilePictureWrapper>
        <NameWrapper>{name}</NameWrapper>
      </LoginWrapper>
      <MenuWrapper ref={ref} tabIndex={2} hide={hide}>
        <ProfilePage href={redirectData.url}>
          <a>{redirectData.text}</a>
        </ProfilePage>
        <Logout onClick={signout}>Logout</Logout>
      </MenuWrapper>
    </>
  );
};

LoggedIn.defaultProps = {};

LoggedIn.displayName = "LoggedIn";

export default LoggedIn;
