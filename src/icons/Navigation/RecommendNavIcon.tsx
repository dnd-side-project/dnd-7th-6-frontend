import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

import {widthPercentage} from 'src/styles/ScreenResponse';

const RecommendNavIcon = () => (
  <Svg width={widthPercentage(24)} height={widthPercentage(24)} fill="none">
    <Path
      d="M3.445 19.13v-9.129c0-.555.247-1.081.674-1.437l6.685-5.567a1.87 1.87 0 0 1 2.393 0l6.685 5.567c.427.356.674.882.674 1.437v9.129a1.87 1.87 0 0 1-1.87 1.87H5.316a1.87 1.87 0 0 1-1.87-1.87Z"
      stroke="#B2B2B2"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15 15a3.242 3.242 0 0 1-3 2 3.252 3.252 0 0 1-3-2"
      stroke="#B2B2B2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default RecommendNavIcon;
