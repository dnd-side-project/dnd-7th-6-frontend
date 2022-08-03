import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';

import {PressableBottomArrowIcon} from '../utils/Pressables/PressableIcons';
import {Container, Title} from './OptionChip.styles';

const OptionChip = ({children, ...props}: PropsWithChildren<PressableProps>) => {
  return (
    <Container {...props}>
      <Title>{children}</Title>
      <PressableBottomArrowIcon />
    </Container>
  );
};

export default OptionChip;
