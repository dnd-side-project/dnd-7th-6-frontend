import React from 'react';
import {PressableProps} from 'react-native';

import {PressableGeneralHeartIcon, PressableLikeIcon} from '../../Pressables/PressableIcons';

interface Props extends PressableProps {
  isActive: boolean;
}

const SimpleLikeButton = ({isActive, ...props}: Props) => {
  if (isActive) {
    return <PressableLikeIcon {...props} />;
  } else {
    return <PressableGeneralHeartIcon {...props} />;
  }
};

export default SimpleLikeButton;
