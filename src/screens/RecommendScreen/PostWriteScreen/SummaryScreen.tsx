import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputFocusEventData,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import Boundary from 'src/components/PostWrite/Boundary';
import DirectTagSummaryOrganism from 'src/components/PostWrite/DirectTagSummaryOrganism';
import SelectSharedScopeOrganism from 'src/components/PostWrite/SelectSharedScopeOrganism/SelectSharedScopeOrganism';
import SelectTagSummaryOrganism from 'src/components/PostWrite/SelectTagSummaryOrganism';
import TextFieldOrganism from 'src/components/PostWrite/TextFieldOrganism';
import DismissKeyboardView from 'src/components/utils/DismissKeyboardScrollView';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useFocus from 'src/hooks/useFocus';
import {changeModifyMode, changeScreen, clearPostWrite} from 'src/redux/actions/PostWriteAction';
import {RootState} from 'src/redux/store';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type SummaryScreenProps = NativeStackScreenProps<PostWriteParamList, 'Summary'>;

const Header = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isPostModifyMode} = useSelector((state: RootState) => state.postWriteReducer);

  const handleBack = () => {
    if (isPostModifyMode) {
      dispatch(clearPostWrite());
    }
    navigation.goBack();
  };

  return <LeftBackHeader onPressBack={handleBack}>새 게시물</LeftBackHeader>;
};

const SummaryScreen = ({navigation}: SummaryScreenProps) => {
  const dispatch = useDispatch();
  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  const handleFocusTextField = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    scrollRef.current?.scrollToFocusedInput(e.target, heightPercentage(120));
  };

  useFocus(() => {
    dispatch(changeScreen(3));
    dispatch(changeModifyMode(false));
  });

  return (
    <SafeAreaView>
      <Header />
      <KeyboardAwareScrollView
        ref={scrollRef}
        style={{height: Dimensions.get('window').height - heightPercentage(220)}}>
        <DismissKeyboardView>
          <AddPhotoOrganism />
          <TextFieldOrganism isFlex={false} onFocus={handleFocusTextField} />
          <Boundary />
          <SelectTagSummaryOrganism navigation={navigation} />
          <DirectTagSummaryOrganism navigation={navigation} />
          <Boundary />
          <SelectSharedScopeOrganism />
        </DismissKeyboardView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SummaryScreen;
