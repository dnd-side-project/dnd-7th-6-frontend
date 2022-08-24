import React, {PropsWithChildren} from 'react';
import {PressableProps} from 'react-native';

import {SelectPressable, SelectPressableText} from './MapFilterChip.styles';

interface Props extends PressableProps {
  selected: boolean;
}

const MapFilterChip = ({selected, children, ...props}: PropsWithChildren<Props>) => {
  return (
    <SelectPressable selected={selected} {...props}>
      <SelectPressableText selected={selected}>{children}</SelectPressableText>
    </SelectPressable>
  );
};

export default MapFilterChip;
