import React from 'react';

import PressableIcon from '../PressableIcon';

import LikeIcon from 'src/icons/LikeIcon';
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
