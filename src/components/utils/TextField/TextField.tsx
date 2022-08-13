import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputFocusEventData, TextInputProps} from 'react-native';

import {Count, TextFieldInput, TextFieldWrapper} from './TextField.styles';

const TextField = ({isBorder = false, ...props}: TextInputProps & {isBorder?: boolean}) => {
  const [focus, setFocus] = useState(false);

  const handleFocusInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    if (props.onFocus) {
      props.onFocus(e);
    }
  };
  const handleBlurInput = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  return (
    <>
      <TextFieldWrapper focus={focus} isBorder={isBorder}>
        <TextFieldInput {...props} onFocus={handleFocusInput} onBlur={handleBlurInput} />
      </TextFieldWrapper>
      <Count>
        {props.value?.length}/{props.maxLength}
      </Count>
    </>
  );
};

export default TextField;
