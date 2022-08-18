import React from 'react';
import {PressableProps} from 'react-native';

import {Container} from './LikeButton.styles';

import LikeHeartIcon from 'src/icons/LikeHeartIcon';
import theme from 'src/styles/Theme';

interface Props extends PressableProps {
  isActive: boolean;
}

const LikeButton = (props: Props) => {
  return (
    <Container {...props}>
      <LikeHeartIcon
        color={props.isActive ? theme.colors.primary[2].normal : theme.colors.grayscale[0]}
      />
    </Container>
  );
};

export default LikeButton;
