import {useNavigation} from '@react-navigation/native';
import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage/';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

import LoginHeader from '../LoginHeader/LoginHeader';
import {
  Container,
  GoogleLoginContainer,
  KakaoLoginContainer,
  LoginContainer,
  LoginTitle,
  LogoImage,
} from './LoginOrganism.styles';

import getUser from 'src/apis/getUser';
import googleLoginBridge from 'src/apis/googleLoginBridge';
import kakaoLoginBridge from 'src/apis/kakaoLoginBridge';
import login from 'src/apis/login';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {heightPercentage} from 'src/styles/ScreenResponse';
const LoginOrganism = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = (bridge: any) => async () => {
    const token = await login(bridge);
    EncryptedStorage.setItem('refreshToken', token.refreshToken);
    dispatch(setAccessToken(token.accessToken));
    const user = await getUser(token.token);
    dispatch(changeUserInfo(user));
    dispatch(loginAction(true));
    navigation.goBack();
  };

  return (
    <Container>
      <LoginHeader
        onPressBack={() => {
          navigation.goBack();
        }}
      />
      <LoginContainer>
        <FastImage
          source={require('src/assets/images/logo/word_logo.png')}
          style={{
            height: heightPercentage(230),
            width: heightPercentage(230),
            marginBottom: heightPercentage(80),
          }}
        />
        <KakaoLoginContainer onPress={handleLogin(kakaoLoginBridge)}>
          <LogoImage source={require('src/assets/images/kakaoImage.png')} resizeMode="contain" />
          <LoginTitle>카카오로 계속하기</LoginTitle>
        </KakaoLoginContainer>
        <GoogleLoginContainer onPress={handleLogin(googleLoginBridge)}>
          <LogoImage source={require('src/assets/images/googleImage.png')} resizeMode="contain" />
          <LoginTitle>구글로 계속하기</LoginTitle>
        </GoogleLoginContainer>
      </LoginContainer>
    </Container>
  );
};

export default LoginOrganism;
