import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface Props {
  color?: string;
}

const PlusIcon32 = ({color = '#F9F9F9'}: Props) => {
  return (
    <Svg width={36} height={36} fill="none">
      <Path
        d="M9 18h18M18 27V9"
        stroke={color}
        strokeWidth={2.362}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PlusIcon32;
