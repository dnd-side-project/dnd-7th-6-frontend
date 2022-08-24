import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const CrosshairIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx={12.0014} cy={12.0001} r={10.56} stroke="#333333" strokeWidth={1.76} />
      <Path d="M1.44141 11.8788H7.18265" stroke="#333333" strokeWidth={1.76} />
      <Path d="M16.0547 11.8788H21.7959" stroke="#333333" strokeWidth={1.76} />
      <Path d="M11.6201 1.70142L11.6201 7.44266" stroke="#333333" strokeWidth={1.76} />
      <Path d="M11.6201 16.3149L11.6201 22.0562" stroke="#333333" strokeWidth={1.76} />
      <Circle cx={11.6372} cy={11.6359} r={1.45655} fill="#333333" />
    </Svg>
  );
};

export default CrosshairIcon;
