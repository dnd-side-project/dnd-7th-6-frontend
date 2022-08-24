import React from 'react';
import {Path, Svg} from 'react-native-svg';

const FocusedBoothBrandIcon = () => {
  return (
    <Svg width={18} height={18} fill="none">
      <Path
        d="M9 12a2.25 2.25 0 1 0 0-4.5A2.25 2.25 0 0 0 9 12Z"
        stroke="#6947EE"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 5.25H3a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75ZM10.71 3H7.29a.75.75 0 0 0-.71.513l-.25.75a.75.75 0 0 0 .71.987h3.92a.75.75 0 0 0 .711-.987l-.25-.75A.75.75 0 0 0 10.71 3Z"
        stroke="#6947EE"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FocusedBoothBrandIcon;
