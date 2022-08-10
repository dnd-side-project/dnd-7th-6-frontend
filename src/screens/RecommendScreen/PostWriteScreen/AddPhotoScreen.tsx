import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect, useRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputFocusEventData,
} from 'react-native';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';
import AddPhotoNextButton from 'src/components/PostWrite/NextButtons/AddPhoto';
import {useDispatch} from 'react-redux';
import {showTabBar} from 'src/redux/actions/TabBarAction';
import {ScrollView} from 'react-native-gesture-handler';
import TextFieldOrganism from 'src/components/PostWrite/TextFieldOrganism';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export type AddPhotoScreenProps = NativeStackScreenProps<PostWriteParamList, 'AddPhoto'>;

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
