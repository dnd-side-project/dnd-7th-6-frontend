import React from 'react';
import {Path, Svg} from 'react-native-svg';

const WarningIcon = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
        stroke="#999999"
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.9668 10.3003H8.03346V10.367H7.9668V10.3003Z"
        stroke="#999999"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M8 5.6333V8.29997"
        stroke="#999999"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default WarningIcon;
