import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';
import FastImage from 'react-native-fast-image';

import PressableSubmit from '../Pressables/PressableSubmit';
import {Container, ImageWrapper, SubmitWrapper, Title} from './NotLoginContainer.styles';

import {heightPercentage, widthPercentage} from 'src/styles/ScreenResponse';

interface Props {
  image: any;
}

const NotLoginContainer = ({children, image}: PropsWithChildren<Props>) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageWrapper>
        <FastImage
          source={image}
          style={{width: widthPercentage(240), height: heightPercentage(160)}}
        />
      </ImageWrapper>
      <Title>{children}</Title>
      <SubmitWrapper>
        <PressableSubmit onPress={() => navigation.navigate('RouteLoginScreen' as never)}>
          로그인/회원가입
        </PressableSubmit>
      </SubmitWrapper>
    </Container>
  );
};

export default NotLoginContainer;
