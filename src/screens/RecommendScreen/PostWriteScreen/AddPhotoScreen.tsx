import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputFocusEventData,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import AddPhotoNextButton from 'src/components/PostWrite/NextButtons/AddPhoto';
import TextFieldOrganism from 'src/components/PostWrite/TextFieldOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {showTabBar} from 'src/redux/actions/TabBarAction';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type AddPhotoScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const PostWriteMainScreen = ({navigation}: AddPhotoScreenProps) => {
  const dispatch = useDispatch();
  const scroll = useRef<KeyboardAwareScrollView>(null);

  const scrollToInput = (node: any) => {
    scroll.current?.scrollToFocusedInput(node, heightPercentage(120));
  };
  const handleFocusInputField = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    scrollToInput(e.target);
  };

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
        <TextFieldOrganism onFocus={handleFocusInputField} />
      </KeyboardAwareScrollView>
      <AddPhotoNextButton />
    </SafeAreaView>
  );
};

export default PostWriteMainScreen;
