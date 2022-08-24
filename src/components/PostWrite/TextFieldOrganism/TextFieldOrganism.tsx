import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from './TextFieldOrganism.styles';

import TextField from 'src/components/utils/TextField';
import {inputPostContents} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

const TextFieldOrganism = ({isFlex = true, ...props}: TextInputProps & {isFlex?: boolean}) => {
  const [focus, setFocus] = useState(false);
  const {contents} = useSelector((state: RootState) => state.postWriteReducer);
  const dispatch = useDispatch();

  const handleChangeTextField = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    dispatch(inputPostContents(e.nativeEvent.text));
  };
  const handleFocusTextField = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (props.onFocus) {
      props.onFocus(e);
    }
    setFocus(true);
  };
  const handleBlurTextField = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
    setFocus(false);
  };

  return (
    <Container focus={focus} isFlex={isFlex}>
      <TextField
        {...props}
        textAlignVertical="top"
        maxLength={300}
        value={contents}
        onChange={handleChangeTextField}
        onFocus={e => handleFocusTextField(e)}
        onBlur={e => handleBlurTextField(e)}
        placeholder="내용을 입력해주세요."
      />
    </Container>
  );
};

export default TextFieldOrganism;
