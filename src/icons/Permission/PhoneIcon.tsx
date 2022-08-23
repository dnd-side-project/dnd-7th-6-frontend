import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PermissionPhoneIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M11.95 17h.1M17 21H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM14 3h-4l.5 2h3l.5-2Z"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PermissionPhoneIcon;
