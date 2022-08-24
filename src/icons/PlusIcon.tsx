import React from 'react';
import {Rect, Svg} from 'react-native-svg';

interface Props {
  color?: string;
}

const PlusIcon = ({color = '#E5E5E5'}: Props) => {
  return (
    <Svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <Rect y="19.6001" width="42" height="2.8" fill={color} />
      <Rect x="22.4004" width="42" height="2.8" transform="rotate(90 22.4004 0)" fill={color} />
    </Svg>
  );
};

export default PlusIcon;
