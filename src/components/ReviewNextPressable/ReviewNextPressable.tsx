import React from 'react';

import {ReviewNextPressableContainer, ReviewNextPressableText} from './ReviewNextPressable.styles';
interface Props {
  onPress?: onPressNextPressable;
  disable: boolean;
}
type onPressNextPressable = () => void;
const ReviewNextPressable = ({onPress, disable}: Props) => {
  return (
    <ReviewNextPressableContainer onPress={disable ? () => {} : onPress} disable={disable}>
      <ReviewNextPressableText disable={disable}>다음</ReviewNextPressableText>
    </ReviewNextPressableContainer>
  );
};

export default ReviewNextPressable;
