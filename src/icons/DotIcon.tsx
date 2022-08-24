import React from 'react';
import {Circle, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

const DotIcon = ({color = theme.colors.grayscale[8]}) => {
  return (
    <Svg width="6" height="6" viewBox="0 0 6 6" fill="none">
      <Circle cx="3" cy="3" r="3" fill={color} />
    </Svg>
  );
};

export default DotIcon;
