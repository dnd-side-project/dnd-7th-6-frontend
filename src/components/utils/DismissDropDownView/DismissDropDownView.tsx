import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

const DismissDropDownView = ({setBrandDropdown, children}: any) => (
  <TouchableWithoutFeedback onPress={() => setBrandDropdown(false)} accessible={false}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
);

export default DismissDropDownView;
