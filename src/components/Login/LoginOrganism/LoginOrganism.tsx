import {useNavigation} from '@react-navigation/native';
import React from 'react';
import EncryptedStorage from 'react-native-encrypted-storage/';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';

import LoginHeader from '../LoginHeader/LoginHeader';
import {
  AppleLoginContainer,
  AppleLoginTitle,
  Container,
  GoogleLoginContainer,
  KakaoLoginContainer,
  LoginContainer,
  LoginTitle,
  LogoImage,
} from './LoginOrganism.styles';

import appleLoginBridge from 'src/apis/appleLoginBridge';
import getUser from 'src/apis/getUser';
import googleLoginBridge from 'src/apis/googleLoginBridge';
import kakaoLoginBridge from 'src/apis/kakaoLoginBridge';
import login from 'src/apis/login';
import useLogout from 'src/hooks/useLogout';
import {changeUserInfo, loginAction, setAccessToken} from 'src/redux/actions/UserAction';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {User} from 'src/types';
import valueOfPlatform from 'src/utils/valueOfPlatform';

const LoginOrganism = () => {
  const navigation = useNavigation();
  const logout = useLogout();
  const dispatch = useDispatch();

  const handleLogined = async (token: any) => {
    let user: User;
    EncryptedStorage.setItem('refreshToken', token.refreshToken);
    dispatch(setAccessToken(token.token));
    user = await getUser(token.token);
    if (!['KAKAO', 'APPLE', 'GOOGLE'].includes(user.provider)) {
      logout();
    }
    dispatch(changeUserInfo(user));
    dispatch(loginAction(true));
    navigation.goBack();
  };
  const handleLogin = (bridge: any) => async () => {
    let token: any;
    try {
      token = await login(bridge);
      handleLogined(token);
    } catch (err: any) {
      //@ts-ignore
      if (err.response.data.code === -100015) {
        navigation.navigate('InitTermsScreen' as never, {email: err.email} as never);
      }
    }
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
        {valueOfPlatform({
          ios: (
            <AppleLoginContainer onPress={handleLogin(appleLoginBridge)}>
              <LogoImage
                source={require('src/assets/images/appleImage.png')}
                resizeMode="contain"
              />
              <AppleLoginTitle>Apple로 계속하기</AppleLoginTitle>
            </AppleLoginContainer>
          ),
          android: <></>,
        })}
        <GoogleLoginContainer onPress={handleLogin(googleLoginBridge)}>
          <LogoImage source={require('src/assets/images/googleImage.png')} resizeMode="contain" />
          <LoginTitle>구글로 계속하기</LoginTitle>
        </GoogleLoginContainer>
      </LoginContainer>
    </Container>
  );
};

export default LoginOrganism;
