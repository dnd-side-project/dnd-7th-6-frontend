import {useNavigation} from '@react-navigation/native';
import React from 'react';

import LoginHeader from '../LoginHeader/LoginHeader';
import {
  GoogleLoginContainer,
  KakaoLoginContainer,
  LoginContainer,
  LoginImage,
} from './LoginOrganism.styles';
const LoginOrganism = () => {
  const navigation = useNavigation();
  return (
    <>
      <LoginHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <LoginContainer>
        <LoginImage />
        <KakaoLoginContainer />
        <GoogleLoginContainer />
      </LoginContainer>
    </>
  );
};

export default LoginOrganism;
