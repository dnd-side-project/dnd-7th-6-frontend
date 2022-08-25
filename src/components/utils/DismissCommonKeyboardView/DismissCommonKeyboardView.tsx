import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DismissCommonKeyboardView = ({children, ...props}: any) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView
      {...props}
      style={props.style}
      bounces={false}
      enabled
      keyboardVerticalOffset={200}
      nestedScrollEnabled
      contentContainerStyle={{flexGrow: 1}}
      scrollEnabled={false}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissCommonKeyboardView;
