import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

const FocusedRecordIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="m13.608 4.509-7.216 7.51c-.273.284-.537.846-.59 1.235l-.325 2.8c-.114 1.01.625 1.702 1.644 1.53l2.83-.476c.396-.07.95-.354 1.222-.648l7.216-7.51c1.248-1.296 1.81-2.773-.132-4.58-1.933-1.788-3.401-1.157-4.65.139Z"
      fill="#8048F8"
      stroke="#8048F8"
      strokeWidth={1.6}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.404 5.762c.378 2.385 2.347 4.208 4.79 4.45M4.59 20.41h15.82"
      stroke="#8048F8"
      strokeWidth={1.6}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FocusedRecordIcon;
