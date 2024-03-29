import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CloseIcon = ({color}: {color: string}) => {
  const fill = color || '#E5E5E5';

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 18L6 6"
        stroke={fill}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 6L5.99997 18"
        stroke={fill}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
