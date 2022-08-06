import React from 'react';

import {ImageCountText, SelectPressableContainer} from './ImageSelectPressable.styles';

import CameraIcon from 'src/icons/CameraIcon';
interface Props {
  onPress?: onPressImageSelect;
  imageSelectCount?: number;
}
type onPressImageSelect = () => void;
const ImageSelectPressable = ({onPress, imageSelectCount = 0}: Props) => {
  return (
    <SelectPressableContainer onPress={imageSelectCount >= 4 ? () => {} : onPress}>
      <CameraIcon />
      <ImageCountText>{imageSelectCount}/4</ImageCountText>
    </SelectPressableContainer>
  );
};

export default ImageSelectPressable;
