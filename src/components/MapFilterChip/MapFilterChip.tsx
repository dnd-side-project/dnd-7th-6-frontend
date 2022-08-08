import React, {PropsWithChildren} from 'react';

import {SelectPressable, SelectPressableText} from './MapFilterChip.styles';

interface Props {
  selected: boolean;
  onPress?: onPressSelectPressable;
}
type onPressSelectPressable = () => void;

const MapFilterChip = ({selected, onPress, children}: PropsWithChildren<Props>) => {
  return (
    <SelectPressable selected={selected} onPress={onPress}>
      <SelectPressableText selected={selected}>{children}</SelectPressableText>
    </SelectPressable>
  );
};

export default MapFilterChip;
