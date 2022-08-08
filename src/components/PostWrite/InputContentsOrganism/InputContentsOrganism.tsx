import React, {useState} from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container, WordCount, WordCountWrapper} from './InputContentsOrganism.styles';

import TextField from 'src/components/utils/TextField';
import {inputPostContents} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';

const InputContentsOrganism = () => {
  const {contents} = useSelector((state: RootState) => state.postWriteReducer);
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);

  const handleChangeTextField = ({nativeEvent}: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (nativeEvent.text.length > 300) {
      return;
    }
    dispatch(inputPostContents(nativeEvent.text));
  };

  return (
    <Container>
      <TextField
        placeholder="내용 입력"
        textAlignVertical="top"
        multiline={true}
        maxLength={300}
        focus={focus}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={handleChangeTextField}
        autoComplete="off"
      />
      <WordCountWrapper>
        <WordCount>{contents.length}/300</WordCount>
      </WordCountWrapper>
    </Container>
  );
};

export default InputContentsOrganism;
