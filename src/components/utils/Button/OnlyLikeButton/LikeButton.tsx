import React from 'react';
import {PressableProps} from 'react-native';

import {Container} from './LikeButton.styles';

import BorderLikeHeartIcon from 'src/icons/BorderLikeHeartIcon';
import LikeHeartIcon from 'src/icons/LikeHeartIcon';
import theme from 'src/styles/Theme';

interface Props extends PressableProps {
  isActive: boolean;
}

const OnlyLikeButton = (props: Props) => {
  return (
    <Container {...props}>
      {props.isActive ? (
        <LikeHeartIcon
          color={props.isActive ? theme.colors.primary[2].normal : theme.colors.grayscale[0]}
        />
      ) : (
        <BorderLikeHeartIcon />
      )}
    </Container>
  );
};

export default OnlyLikeButton;
