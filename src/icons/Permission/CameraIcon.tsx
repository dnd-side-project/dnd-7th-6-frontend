import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PermissionCameraIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM14.28 4H9.72a1 1 0 0 0-.948.684l-.333 1A1 1 0 0 0 9.387 7h5.226a1 1 0 0 0 .948-1.316l-.333-1A1 1 0 0 0 14.279 4Z"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PermissionCameraIcon;
