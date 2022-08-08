import React from 'react';
import {TextInputProps} from 'react-native';

import {TextFieldInput, TextFieldWrapper} from './TextField.styles';

const TextField = (props: TextInputProps & {focus: boolean}) => {
  return (
    <TextFieldWrapper focus={props.focus}>
      <TextFieldInput {...props} />
    </TextFieldWrapper>
  );
};

export default TextField;
