import React, {PropsWithChildren} from 'react';
import {Pressable, SafeAreaView} from 'react-native';

import {BackButtonWrapper, Container} from './LoginHeader.styles';

import CloseIcon from 'src/icons/CloseIcon';
import theme from 'src/styles/Theme';

interface Props {
  onPressBack: () => void;
}

const LoginHeader = ({onPressBack}: PropsWithChildren<Props>) => {
  return (
    <SafeAreaView>
      <Container>
        <BackButtonWrapper>
          <Pressable onPress={onPressBack}>
            <CloseIcon color={theme.colors.grayscale[8]} />
          </Pressable>
        </BackButtonWrapper>
      </Container>
    </SafeAreaView>
  );
};

export default LoginHeader;
