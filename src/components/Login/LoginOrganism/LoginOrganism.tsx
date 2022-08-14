import {useNavigation} from '@react-navigation/native';
import React from 'react';

import LoginHeader from '../LoginHeader/LoginHeader';
import {
  GoogleLoginContainer,
  KakaoLoginContainer,
  LoginContainer,
  LoginImage,
  LoginTitle,
  LogoImage,
} from './LoginOrganism.styles';

import googleLoginBridge from 'src/apis/googleLoginBridge';
import kakaoLoginBridge from 'src/apis/kakaoLoginBridge';
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
        <KakaoLoginContainer onPress={kakaoLoginBridge}>
          <LogoImage source={require('src/assets/images/kakaoImage.png')} resizeMode="contain" />
          <LoginTitle>카카오로 계속하기</LoginTitle>
        </KakaoLoginContainer>
        <GoogleLoginContainer onPress={googleLoginBridge}>
          <LogoImage source={require('src/assets/images/googleImage.png')} resizeMode="contain" />
          <LoginTitle>구글로 계속하기</LoginTitle>
        </GoogleLoginContainer>
      </LoginContainer>
    </>
  );
};

export default LoginOrganism;
