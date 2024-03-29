import React from 'react';
import {Path, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

const BottomArrowIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.495 10.495C16.7683 10.2216 16.7683 9.77839 16.495 9.50503C16.2216 9.23166 15.7784 9.23166 15.505 9.50503L16.495 10.495ZM12 14L11.505 14.495C11.7784 14.7683 12.2216 14.7683 12.495 14.495L12 14ZM8.49497 9.50503C8.22161 9.23166 7.77839 9.23166 7.50503 9.50503C7.23166 9.77839 7.23166 10.2216 7.50503 10.495L8.49497 9.50503ZM15.505 9.50503L11.505 13.505L12.495 14.495L16.495 10.495L15.505 9.50503ZM12.495 13.505L8.49497 9.50503L7.50503 10.495L11.505 14.495L12.495 13.505Z"
        fill={theme.colors.grayscale[5]}
      />
    </Svg>
  );
};

export default BottomArrowIcon;
