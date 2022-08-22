import React from 'react';
import {Path, Svg} from 'react-native-svg';

import theme from 'src/styles/Theme';

interface Props {
  color?: string;
}

const LikeHeartIcon = ({color}: Props) => {
  const fill = color || theme.colors.primary[2].normal;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5704 5.44C20.4869 6.36024 21.0016 7.60616 21.0016 8.905C21.0016 10.2038 20.4869 11.4498 19.5704 12.37L12.0004 20L4.43035 12.37C3.7496 11.6846 3.28613 10.8137 3.09796 9.86623C2.90979 8.91874 3.00529 7.9368 3.3725 7.04333C3.73971 6.14985 4.36232 5.38455 5.16238 4.84321C5.96244 4.30188 6.9044 4.00857 7.87035 4C9.16199 4.00784 10.3983 4.52536 11.3104 5.44C11.5764 5.70322 11.8082 5.99888 12.0004 6.32C12.1925 5.99888 12.4243 5.70322 12.6904 5.44C13.1397 4.98405 13.6753 4.62199 14.2658 4.37486C14.8564 4.12774 15.4902 4.00047 16.1304 4.00047C16.7705 4.00047 17.4043 4.12774 17.9949 4.37486C18.5854 4.62199 19.121 4.98405 19.5704 5.44Z"
        fill={fill}
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LikeHeartIcon;
