import React, {PropsWithChildren} from 'react';

import {PressableLeftArrowIcon} from '../Pressables/PressableIcons';
import {BackButtonWrapper, Container, Title} from './LeftBackHeader.styles';

interface Props {
  onPressBack: () => void;
}

const LeftBackHeader = ({children, onPressBack}: PropsWithChildren<Props>) => {
  return (
    <Container>
      <BackButtonWrapper>
        <PressableLeftArrowIcon onPress={onPressBack} />
      </BackButtonWrapper>
      <Title>{children}</Title>
    </Container>
  );
};

export default LeftBackHeader;
