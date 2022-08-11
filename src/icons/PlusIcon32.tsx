import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  color?: string;
}

const PlusIcon32 = ({color = '#F9F9F9'}: Props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M8 16H24"
        stroke={color}
        stroke-width="1.86667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 24L16 8"
        stroke={color}
        stroke-width="1.86667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon32;
