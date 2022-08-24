import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PermissionFileIcon = () => {
  return (
    <Svg width={24} height={24} fill="none">
      <Path
        d="M6.461 16.526H3.745a.905.905 0 0 1-.905-.905V4.757a.905.905 0 0 1 .905-.905h3.621a.905.905 0 0 1 .643.263l2.182 2.19a.905.905 0 0 0 .643.263h4.68a.905.905 0 0 1 .905.905v2.716"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.11 10.19H7.51c-.579 0-1.05.405-1.05.905v8.147c0 .5.471.906 1.05.906h12.6c.58 0 1.05-.405 1.05-.905v-8.148c0-.5-.47-.905-1.05-.905Z"
        stroke="#4C4C4C"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PermissionFileIcon;
