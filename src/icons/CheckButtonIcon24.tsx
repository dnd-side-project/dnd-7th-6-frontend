import React from 'react';
import {Path, Svg, Circle} from 'react-native-svg';

const CheckButtonIcon24 = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Circle cx={12} cy={12} r={12} fill="#CCC" />
      <Path
        d="m8 12 2.828 2.829 5.657-5.657"
        stroke="#fff"
        strokeWidth={1.333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CheckButtonIcon24;
