import React from 'react';
import {Path, Svg} from 'react-native-svg';

const DeleteIcon = () => {
  return (
    <Svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <Path
        d="M1 1L6.99987 6.99987"
        stroke="#999999"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 7.00012L6.99987 1.00024"
        stroke="#999999"
        strokeWidth="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default DeleteIcon;
