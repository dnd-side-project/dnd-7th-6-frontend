import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputFocusEventData,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import TextFieldOrganism from 'src/components/PostWrite/TextFieldOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useFocus from 'src/hooks/useFocus';
import {changeScreen} from 'src/redux/actions/PostWriteAction';
import {showTabBar} from 'src/redux/actions/TabBarAction';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type AddPhotoScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const PostWriteMainScreen = ({navigation}: AddPhotoScreenProps) => {
  const dispatch = useDispatch();
  const scroll = useRef<KeyboardAwareScrollView>(null);
  const [focus, setFocus] = useState(false);

  const scrollToInput = (node: any) => {
    scroll.current?.scrollToFocusedInput(node, heightPercentage(270));
  };
  const handleFocusInputField = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);
    scrollToInput(e.target);
  };
  const handleBlurInputField = () => {
    setFocus(false);
  };

  useFocus(() => {
    dispatch(changeScreen(0));
  });

  return (
    <SafeAreaView style={{marginBottom: heightPercentage(54)}}>
      <LeftBackHeader
        onPressBack={() => {
          dispatch(showTabBar());
          navigation.goBack();
        }}>
        글 작성
      </LeftBackHeader>
      <KeyboardAwareScrollView
        ref={scroll}
        style={{height: Dimensions.get('window').height - heightPercentage(220)}}>
        <AddPhotoOrganism />
        <TextFieldOrganism onBlur={handleBlurInputField} onFocus={handleFocusInputField} />
        {!focus || <View style={{height: 60}} />}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PostWriteMainScreen;
