import * as React from 'react';
import {Svg, Path, Ellipse} from 'react-native-svg';

const EclipseStarIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M10 .256s.807 4.619 2.687 6.644c1.881 2.024 6.364 3.1 6.364 3.1s-4.483.682-6.364 2.706C10.807 14.731 10 19.744 10 19.744s-1-5.013-2.88-7.038C5.239 10.682.948 10 .948 10S5.24 8.924 7.12 6.9C9 4.875 10 .256 10 .256Z"
      fill="#333"
    />
    <Ellipse cx={17.065} cy={3.461} rx={1.287} ry={1.237} fill="#333" />
  </Svg>
);

export default EclipseStarIcon;
