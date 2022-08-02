import React, {PropsWithChildren} from 'react';

import {RefreshPressable, RefreshPressableText} from './MapRefreshSearchPressable.styles';
interface Props {
  onPress?: onPressMapRefreshHandler;
}
type onPressMapRefreshHandler = () => void;
const MapRefreshSearchPressable = ({onPress, children}: PropsWithChildren<Props>) => {
  return (
    <RefreshPressable onPress={onPress}>
      <RefreshPressableText>{children}</RefreshPressableText>
    </RefreshPressable>
  );
};
export default MapRefreshSearchPressable;
