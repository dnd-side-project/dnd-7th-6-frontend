import React from 'react';
import {Path, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

interface Props {
  isActive?: boolean;
  color?: string;
}

const StarIcon20 = ({isActive = false, color}: Props) => {
  const fill = color || (isActive ? theme.colors.primary[1].normal : theme.colors.grayscale[3]);

  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Path
        d="M12.9882 7.06219L10.878 2.48726C10.7291 2.1644 10.2702 2.1644 10.1213 2.48726L8.01106 7.06219C7.95037 7.19378 7.82567 7.28438 7.68177 7.30144L2.67866 7.89464C2.32558 7.9365 2.18378 8.37291 2.44482 8.61432L6.14375 12.035C6.25014 12.1334 6.29777 12.28 6.26953 12.4221L5.28765 17.3636C5.21836 17.7124 5.58959 17.9821 5.89984 17.8084L10.2961 15.3476C10.4226 15.2768 10.5767 15.2768 10.7031 15.3476L15.0994 17.8084C15.4097 17.9821 15.7809 17.7124 15.7116 17.3636L14.7297 12.4221C14.7015 12.28 14.7491 12.1334 14.8555 12.035L18.5544 8.61432C18.8155 8.37291 18.6737 7.9365 18.3206 7.89464L13.3175 7.30144C13.1736 7.28438 13.0489 7.19378 12.9882 7.06219Z"
        fill={fill}
      />
    </Svg>
  );
};

export default StarIcon20;
