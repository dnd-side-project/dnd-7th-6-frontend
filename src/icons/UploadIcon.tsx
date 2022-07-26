import React from 'react';
import {Path, Svg} from 'react-native-svg';

const UploadIcon = () => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <Path
        d="M12 9L16 5L20 9"
        stroke="#CCCCCC"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M16 7V21.2868M26 12.4496V24.8217C26 25.1342 25.8683 25.4339 25.6339 25.6549C25.3995 25.8759 25.0815 26 24.75 26H7.25C6.91848 26 6.60054 25.8759 6.36612 25.6549C6.1317 25.4339 6 25.1342 6 24.8217V12.4496"
        stroke="#CCCCCC"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default UploadIcon;
