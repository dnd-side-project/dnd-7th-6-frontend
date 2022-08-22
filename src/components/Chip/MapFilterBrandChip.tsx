import React, {PropsWithChildren} from 'react';
import {GestureResponderEvent, PressableProps} from 'react-native';

import {PressableBottomArrowIcon} from '../utils/Pressables/PressableIcons';
import {Container, IconContainer, Title} from './MapFilterBrandChip.styles.';

interface Props {
  selected?: boolean;
  onPressIcon?: (event: GestureResponderEvent) => void;
}

const MapFilterBrandChip = ({
  children,
  selected = false,
  onPressIcon,
  ...props
}: PropsWithChildren<PressableProps & Props>) => {
  return (
    <Container {...props} selected={selected}>
      <IconContainer source={require('src/assets/images/Booth/brandDropdown.png')} />
      <Title selected={selected}>{children}</Title>

      <PressableBottomArrowIcon onPress={onPressIcon} />
    </Container>
  );
};

export default MapFilterBrandChip;
