import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PermissionLocationIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 21s7-4.846 7-11.077a6.885 6.885 0 0 0-2.05-4.895A7.04 7.04 0 0 0 12 3a7.04 7.04 0 0 0-4.95 2.028A6.885 6.885 0 0 0 5 9.923C5 16.153 12 21 12 21Z"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PermissionLocationIcon;
