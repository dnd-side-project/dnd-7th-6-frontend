import React from 'react';
import {PressableProps} from 'react-native';

import PressableIcon from '../PressableIcon';

import BottomArrowIcon from 'src/icons/BottomArrowIcon';
import ColorStarIcon from 'src/icons/ColorStarIcon';
import DeleteIcon from 'src/icons/DeleteIcon';
import LeftArrowIcon from 'src/icons/LeftArrowIcon';
import LikeIcon from 'src/icons/LikeIcon';
import RightArrowIcon from 'src/icons/RightArrowIcon';
import SearchIcon from 'src/icons/SearchIcon';
import StarIcon from 'src/icons/StarIcon';
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
export const PressableSearchIcon = makePressableComponent(SearchIcon);
export const PressableLeftArrowIcon = makePressableComponent(LeftArrowIcon);
export const PressableDeleteIcon = makePressableComponent(DeleteIcon);
export const PressableBottomArrowIcon = makePressableComponent(BottomArrowIcon);
export const PressableStarIcon = makePressableComponent(StarIcon);
export const PressableColorStarIcon = makePressableComponent(ColorStarIcon);
