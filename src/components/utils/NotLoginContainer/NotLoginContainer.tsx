import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import PressableSubmit from '../Pressables/PressableSubmit';
import {Container, ImageWrapper, SubmitWrapper, Title} from './NotLoginContainer.styles';
const NotLoginContainer = ({children}: PropsWithChildren) => {
  const navigation = useNavigation();
  return (
    <Container>
      <ImageWrapper />
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
