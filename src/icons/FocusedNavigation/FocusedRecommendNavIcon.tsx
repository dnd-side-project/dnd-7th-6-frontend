import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

const FocusedRecommendNavIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M3.945 19.13v-9.129c0-.555.246-1.081.673-1.437l6.685-5.567a1.87 1.87 0 0 1 2.394 0l6.685 5.567c.426.356.673.882.673 1.437v9.129a1.87 1.87 0 0 1-1.87 1.87H5.815a1.87 1.87 0 0 1-1.87-1.87Z"
      fill="#8048F8"
      stroke="#8048F8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5 15a3.242 3.242 0 0 1-3 2 3.252 3.252 0 0 1-3-2"
      stroke="#fff"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FocusedRecommendNavIcon;
