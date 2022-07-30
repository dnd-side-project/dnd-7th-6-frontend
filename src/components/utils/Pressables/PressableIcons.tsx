import React from 'react';

import PressableIcon from '../PressableIcon';

import LikeIcon from 'src/icons/LikeIcon';
import RightArrowIcon from 'src/icons/RightArrowIcon';
import UploadIcon from 'src/icons/UploadIcon';

export const PressableUploadIcon = () => {
  return (
    <PressableIcon>
      <UploadIcon />
    </PressableIcon>
  );
};

export const PressableLikeIcon = () => {
  return (
    <PressableIcon>
      <LikeIcon />
    </PressableIcon>
  );
};

export const PressableRightArrowIcon = () => {
  return (
    <PressableIcon>
      <RightArrowIcon />
    </PressableIcon>
  );
};
