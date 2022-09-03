import React, {PropsWithChildren} from 'react';
import {ScrollViewProps} from 'react-native';

import {DefaultScroll} from './DefaultScrollView.styles';

const DefaultScrollView = ({children, ...props}: PropsWithChildren<ScrollViewProps>) => {
  return <DefaultScroll {...props}>{children}</DefaultScroll>;
};

export default DefaultScrollView;
