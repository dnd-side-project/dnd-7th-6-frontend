import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
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
import Alert from 'src/components/utils/Alert';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useFocus from 'src/hooks/useFocus';
import {changeScreen, clearPostWrite} from 'src/redux/actions/PostWriteAction';
import {
  closePostWrite,
  hideTabBar,
  openPostWrite,
  showTabBar,
} from 'src/redux/actions/TabBarAction';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type AddPhotoScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const PostWriteMainScreen = ({navigation}: AddPhotoScreenProps) => {
  const dispatch = useDispatch();
  const scroll = useRef<KeyboardAwareScrollView>(null);
  const [focus, setFocus] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);

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
  const openAlert = () => {
    dispatch(closePostWrite());
    dispatch(hideTabBar());
    setIsOpenAlert(true);
  };
  const closeAlert = () => {
    dispatch(openPostWrite());
    dispatch(hideTabBar());
    setIsOpenAlert(false);
  };

  useEffect(() => {
    const open = (e: any) => {
      e.preventDefault();
      openAlert();
    };
    navigation.addListener('beforeRemove', open);
    return navigation.removeListener('beforeRemove', open);
  });
  useFocus(() => {
    dispatch(changeScreen(0));
  });

  return (
    <SafeAreaView style={{marginBottom: heightPercentage(54)}}>
      <LeftBackHeader onPressBack={() => openAlert()}>글 작성</LeftBackHeader>
      <KeyboardAwareScrollView
        ref={scroll}
        style={{
          height:
            Dimensions.get('window').height -
            (isOpenAlert ? heightPercentage(50) : heightPercentage(220)),
        }}>
        <AddPhotoOrganism />
        <TextFieldOrganism onBlur={handleBlurInputField} onFocus={handleFocusInputField} />
        {!focus || <View style={{height: 60}} />}
      </KeyboardAwareScrollView>
      {!isOpenAlert || (
        <Alert
          cancelButtonText="나가기"
          checkButtonText="계속 작성하기"
          title="게시물 작성을 중단하시겠어요?"
          subTitle="입력한 내용은 저장되지 않아요!"
          onPressCheck={() => closeAlert()}
          onPressCancel={() => {
            dispatch(showTabBar());
            dispatch(clearPostWrite());
            navigation.goBack();
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default PostWriteMainScreen;
