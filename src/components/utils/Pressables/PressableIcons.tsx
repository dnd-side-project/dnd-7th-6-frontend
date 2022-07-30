import React from 'react';
import {PressableProps} from 'react-native';

import PressableIcon from '../PressableIcon';

import LikeIcon from 'src/icons/LikeIcon';
import RightArrowIcon from 'src/icons/RightArrowIcon';
import UploadIcon from 'src/icons/UploadIcon';

const makePressableComponent = (IconComponent: React.FC) => (props: PressableProps) => {
  return (
    <PressableIcon {...props}>
      <IconComponent />
    </PressableIcon>
  );
};

export const PressableUploadIcon = makePressableComponent(UploadIcon);
export const PressableLikeIcon = makePressableComponent(LikeIcon);
export const PressableRightArrowIcon = makePressableComponent(RightArrowIcon);
