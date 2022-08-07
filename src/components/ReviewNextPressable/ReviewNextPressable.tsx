import React, {PropsWithChildren} from 'react';

import {ReviewNextPressableContainer, ReviewNextPressableText} from './ReviewNextPressable.styles';
interface Props {
  onPress?: onPressNextPressable;
  disable?: boolean;
  children?: PropsWithChildren<string>;
  onlyColordisable?: boolean;
}
type onPressNextPressable = () => void;
const ReviewNextPressable = ({
  onPress,
  disable = false,
  children,
  onlyColordisable = false,
}: Props) => {
  return (
    <ReviewNextPressableContainer
      onPress={disable ? () => {} : onPress}
      disable={onlyColordisable ? onlyColordisable : disable}>
      <ReviewNextPressableText disable={onlyColordisable ? onlyColordisable : disable}>
        {children ? children : '다음'}
      </ReviewNextPressableText>
    </ReviewNextPressableContainer>
  );
};

export default ReviewNextPressable;
