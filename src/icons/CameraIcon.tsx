import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CameraIcon = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Path
        d="M15 20C17.0711 20 18.75 18.3211 18.75 16.25C18.75 14.1789 17.0711 12.5 15 12.5C12.9289 12.5 11.25 14.1789 11.25 16.25C11.25 18.3211 12.9289 20 15 20Z"
        stroke="#666666"
        strokeWidth={1.75}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <Path
        d="M25 8.75H5C4.30964 8.75 3.75 9.30964 3.75 10V22.5C3.75 23.1904 4.30964 23.75 5 23.75H25C25.6904 23.75 26.25 23.1904 26.25 22.5V10C26.25 9.30964 25.6904 8.75 25 8.75Z"
        stroke="#666666"
        strokeWidth={1.75}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
      <Path
        d="M17.8501 5H12.152C11.614 5 11.1363 5.34429 10.9661 5.85472L10.5495 7.10472C10.2797 7.91413 10.8821 8.75 11.7353 8.75H18.2668C19.12 8.75 19.7224 7.91413 19.4526 7.10472L19.036 5.85472C18.8658 5.34429 18.3881 5 17.8501 5Z"
        stroke="#666666"
        strokeWidth={1.75}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};

export default CameraIcon;
