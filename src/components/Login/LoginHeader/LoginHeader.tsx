import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

import {BackButtonWrapper, Container} from './LoginHeader.styles';

import {PressableCancelIcon} from 'src/components/utils/Pressables/PressableIcons';

interface Props {
  onPressBack: () => void;
}

const LoginHeader = ({onPressBack}: PropsWithChildren<Props>) => {
  return (
    <SafeAreaView>
      <Container>
        <BackButtonWrapper>
          <PressableCancelIcon onPress={onPressBack} />
        </BackButtonWrapper>
      </Container>
    </SafeAreaView>
  );
};

export default LoginHeader;
