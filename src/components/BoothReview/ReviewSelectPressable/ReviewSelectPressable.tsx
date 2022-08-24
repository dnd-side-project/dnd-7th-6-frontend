import React, {PropsWithChildren} from 'react';
import FastImage from 'react-native-fast-image';

import {
  IconWrapper,
  SelectPressable,
  SelectPressableText,
  styles,
} from './ReviewSelectPressable.styles';

interface Props {
  selected: boolean;
  onPress?: onPressSelectPressable;
  imageUrl?: string;
}
type onPressSelectPressable = () => void;

const ReviewSelectPressable = ({
  selected,
  onPress,
  imageUrl,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <SelectPressable selected={selected} onPress={onPress}>
      <IconWrapper>
        <FastImage source={{uri: imageUrl}} style={styles.iconImage} />
      </IconWrapper>
      <SelectPressableText selected={selected}>{children}</SelectPressableText>
    </SelectPressable>
  );
};

export default ReviewSelectPressable;
