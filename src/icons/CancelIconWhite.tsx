import React from 'react';
import {Path, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

const CancelIconWhite = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        d="M16 16L8 8"
        stroke={theme.colors.grayscale[2]}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 8L8 16"
        stroke={theme.colors.grayscale[2]}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CancelIconWhite;
