import React from 'react';
import {Path, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

interface Props {
  isActive?: boolean;
}

const StarIcon16 = ({isActive = false}: Props) => {
  const color = isActive ? theme.colors.primary[1].normal : theme.colors.grayscale[3];

  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M9.99036 5.64956L8.3022 1.98962C8.18306 1.73133 7.81596 1.73133 7.69682 1.98962L6.00866 5.64956C5.9601 5.75483 5.86034 5.82731 5.74522 5.84096L1.74273 6.31552C1.46027 6.34901 1.34683 6.69814 1.55566 6.89126L4.5148 9.62779C4.59991 9.70649 4.63802 9.82377 4.61543 9.93748L3.82992 13.8907C3.77449 14.1697 4.07148 14.3855 4.31968 14.2465L7.8367 12.2779C7.93785 12.2212 8.06117 12.2212 8.16232 12.2779L11.6793 14.2465C11.9275 14.3855 12.2245 14.1697 12.1691 13.8907L11.3836 9.93748C11.361 9.82377 11.3991 9.70649 11.4842 9.62779L14.4434 6.89126C14.6522 6.69814 14.5387 6.34901 14.2563 6.31552L10.2538 5.84096C10.1387 5.82731 10.0389 5.75483 9.99036 5.64956Z"
        fill={color}
      />
    </Svg>
  );
};

export default StarIcon16;
