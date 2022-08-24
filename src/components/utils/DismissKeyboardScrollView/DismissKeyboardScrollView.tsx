import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const DismissKeyboardView = ({children, ...props}: any) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView
      {...props}
      style={props.style}
      bounces={false}
      contentContainerStyle={{flexGrow: 1}}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
