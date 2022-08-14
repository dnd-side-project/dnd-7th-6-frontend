import React from 'react';
import {Path, Rect, Svg} from 'react-native-svg';

const RecordUploadIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.1 16.5C11.1 16.9971 11.5029 17.4 12 17.4C12.4971 17.4 12.9 16.9971 12.9 16.5H11.1ZM12.9 7.5C12.9 7.00294 12.4971 6.6 12 6.6C11.5029 6.6 11.1 7.00294 11.1 7.5H12.9ZM12.9 16.5V7.5H11.1V16.5H12.9Z"
        fill="#333333"
      />
      <Path
        d="M7.5 11.1C7.00294 11.1 6.6 11.5029 6.6 12C6.6 12.4971 7.00294 12.9 7.5 12.9L7.5 11.1ZM16.5 12.9C16.9971 12.9 17.4 12.4971 17.4 12C17.4 11.5029 16.9971 11.1 16.5 11.1V12.9ZM7.5 12.9L16.5 12.9V11.1L7.5 11.1L7.5 12.9Z"
        fill="#333333"
      />
      <Rect x={3} y={3} width={18} height={18} rx={2} stroke="#333333" strokeWidth={1.8} />
    </Svg>
  );
};

export default RecordUploadIcon;
