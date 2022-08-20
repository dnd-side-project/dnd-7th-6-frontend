import React from 'react';
import {PressableProps} from 'react-native';

import {Container} from './ScrollUpButton.styles';

import UpArrowIcon from 'src/icons/UpArrowIcon';

const ScrollUpButton = (props: PressableProps) => {
  return (
    <Container {...props}>
      <UpArrowIcon />
    </Container>
  );
};

export default ScrollUpButton;
