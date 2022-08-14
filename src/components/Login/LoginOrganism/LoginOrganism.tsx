import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert} from 'react-native';
import {Config} from 'react-native-config';

import LoginHeader from '../LoginHeader/LoginHeader';
import {
  GoogleLoginContainer,
  KakaoLoginContainer,
  LoginContainer,
  LoginImage,
  LoginTitle,
  LogoImage,
} from './LoginOrganism.styles';
const LoginOrganism = () => {
  const navigation = useNavigation();

  const googleLoginPressable = async () => {
    await GoogleSignin.configure({
      iosClientId: Config.IOS_GOOGLE_API_KEY,
    });
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      navigation.navigate('AppInner' as never);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('구글 로그인 취소');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('로그인 중');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
        Alert.alert('로그인 도중 오류가 발생했습니다.');
      }
    }
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
        <KakaoLoginContainer>
          <LogoImage source={require('src/assets/images/kakaoImage.png')} resizeMode="contain" />
          <LoginTitle>카카오로 계속하기</LoginTitle>
        </KakaoLoginContainer>
        <GoogleLoginContainer onPress={googleLoginPressable}>
          <LogoImage source={require('src/assets/images/googleImage.png')} resizeMode="contain" />
          <LoginTitle>구글로 계속하기</LoginTitle>
        </GoogleLoginContainer>
      </LoginContainer>
    </>
  );
};

export default LoginOrganism;
