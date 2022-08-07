import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';

import {PressableBottomArrowIcon, PressableCancelIcon} from '../utils/Pressables/PressableIcons';
import {Container, Title} from './OptionChip.styles';

interface Props {
  active?: boolean;
}

const OptionChip = ({
  children,
  active = false,
  ...props
}: PropsWithChildren<PressableProps & Props>) => {
  return (
    <Container {...props} active={active}>
      <Title active={active}>{children}</Title>
      {active ? <PressableCancelIcon /> : <PressableBottomArrowIcon />}
    </Container>
  );
};

export default OptionChip;
