import React, {PropsWithChildren} from 'react';
import {GestureResponderEvent, PressableProps} from 'react-native';

import {PressableBottomArrowIcon, PressableCancelIcon} from '../utils/Pressables/PressableIcons';
import {Container, Title} from './OptionChip.styles';

interface Props {
  active?: boolean;
  onPressIcon?: (event: GestureResponderEvent) => void;
}

const OptionChip = ({
  children,
  active = false,
  onPressIcon,
  ...props
}: PropsWithChildren<PressableProps & Props>) => {
  return (
    <Container {...props} active={active}>
      <Title active={active}>{children}</Title>
      {active ? (
        <PressableCancelIcon onPress={onPressIcon} />
      ) : (
        <PressableBottomArrowIcon onPress={onPressIcon} />
      )}
    </Container>
  );
};

export default OptionChip;
