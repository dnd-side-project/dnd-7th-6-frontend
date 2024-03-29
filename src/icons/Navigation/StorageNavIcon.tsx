import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

const StorageNavIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M19.569 5.544C20.485 6.531 21 7.867 21 9.26c0 1.393-.515 2.729-1.431 3.716l-6.123 6.432a2 2 0 0 1-2.897 0l-6.122-6.432a5.395 5.395 0 0 1-1.333-2.685 5.62 5.62 0 0 1 .275-3.027 5.208 5.208 0 0 1 1.79-2.36c.8-.58 1.742-.895 2.708-.904 1.292.008 2.528.563 3.44 1.544.267.282.498.6.69.944.193-.344.425-.662.69-.944.45-.489.986-.877 1.576-1.142a4.55 4.55 0 0 1 1.865-.401c.64 0 1.274.136 1.865.401a4.83 4.83 0 0 1 1.576 1.142Z"
      stroke="#B2B2B2"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default StorageNavIcon;
