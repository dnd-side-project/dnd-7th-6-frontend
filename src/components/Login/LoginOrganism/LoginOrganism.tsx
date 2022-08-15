import {useNavigation} from '@react-navigation/native';
import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage/';
import {useDispatch} from 'react-redux';

import LoginHeader from '../LoginHeader/LoginHeader';
import {
  GoogleLoginContainer,
  KakaoLoginContainer,
  LoginContainer,
  LoginImage,
  LoginTitle,
  LogoImage,
} from './LoginOrganism.styles';

import getUser from 'src/apis/getUser';
import googleLoginBridge from 'src/apis/googleLoginBridge';
import kakaoLoginBridge from 'src/apis/kakaoLoginBridge';
import login from 'src/apis/login';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
const LoginOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = (bridge: any) => async () => {
    const token = await login(bridge);
    await EncryptedStorage.setItem('refreshToken', token.refreshToken);
    dispatch(setAccessToken(token.accessToken));
    const user = await getUser();
    dispatch(changeUserInfo(user));
    dispatch(loginAction(true));
    navigation.goBack();
  };

  return (
    <>
      <LoginHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <LoginContainer>
        <LoginImage />
        <KakaoLoginContainer onPress={handleLogin(kakaoLoginBridge)}>
          <LogoImage source={require('src/assets/images/kakaoImage.png')} resizeMode="contain" />
          <LoginTitle>카카오로 계속하기</LoginTitle>
        </KakaoLoginContainer>
        <GoogleLoginContainer onPress={handleLogin(googleLoginBridge)}>
          <LogoImage source={require('src/assets/images/googleImage.png')} resizeMode="contain" />
          <LoginTitle>구글로 계속하기</LoginTitle>
        </GoogleLoginContainer>
      </LoginContainer>
    </>
  );
};

export default LoginOrganism;
