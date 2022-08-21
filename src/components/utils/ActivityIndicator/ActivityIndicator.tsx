import React from 'react';
import {View} from 'react-native';

import {BackdropView, UIActivityIndicator} from './ActivityIndicator.styles';
const ActivityIndicator = ({children, loading}: any) => {
  return loading ? (
    <BackdropView>
      <UIActivityIndicator />
      {children}
    </BackdropView>
  ) : (
    <View>{children}</View>
  );
};

export default ActivityIndicator;
