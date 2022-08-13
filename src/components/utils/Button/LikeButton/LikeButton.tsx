import React from 'react';
import {PressableProps} from 'react-native';

import {Container} from './LikeButton.styles';

import LikeHeartIcon from 'src/icons/LikeHeartIcon';

const LikeButton = (props: PressableProps) => {
  return (
    <Container {...props}>
      <LikeHeartIcon />
    </Container>
  );
};

export default LikeButton;
