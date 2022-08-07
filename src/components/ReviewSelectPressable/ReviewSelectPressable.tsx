import React, {PropsWithChildren} from 'react';

import {IconWrapper, SelectPressable, SelectPressableText} from './ReviewSelectPressable.styles';

import BlueHeartIcon from 'src/icons/BlueHeartIcon';

interface Props {
  selected: boolean;
  onPress?: onPressSelectPressable;
}
type onPressSelectPressable = () => void;

const ReviewSelectPressable = ({selected, onPress, children}: PropsWithChildren<Props>) => {
  return (
    <SelectPressable selected={selected} onPress={onPress}>
      <IconWrapper>
        <BlueHeartIcon />
      </IconWrapper>
      <SelectPressableText selected={selected}>{children}</SelectPressableText>
    </SelectPressable>
  );
};

export default ReviewSelectPressable;
