import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {
  Dimensions,
  NativeSyntheticEvent,
  SafeAreaView,
  TextInputFocusEventData,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {PostWriteParamList} from '.';

import AddPhotoOrganism from 'src/components/PostWrite/AddPhotoOrganism';
import Boundary from 'src/components/PostWrite/Boundary';
import DirectTagSummaryOrganism from 'src/components/PostWrite/DirectTagSummaryOrganism';
import SummaryNextButton from 'src/components/PostWrite/NextButtons/Summary';
import SelectSharedScopeOrganism from 'src/components/PostWrite/SelectSharedScopeOrganism/SelectSharedScopeOrganism';
import SelectTagSummaryOrganism from 'src/components/PostWrite/SelectTagSummaryOrganism';
import TextFieldOrganism from 'src/components/PostWrite/TextFieldOrganism';
import DismissKeyboardView from 'src/components/utils/DismissKeyboardScrollView';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type SummaryScreenProps = NativeStackScreenProps<PostWriteParamList, 'Summary'>;

const SummaryScreen = ({navigation}: SummaryScreenProps) => {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);

  const handleFocusTextField = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    scrollRef.current?.scrollToFocusedInput(e.target, heightPercentage(120));
  };

  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>새 게시물</LeftBackHeader>
      <KeyboardAwareScrollView
        ref={scrollRef}
        style={{height: Dimensions.get('window').height - heightPercentage(220)}}>
        <DismissKeyboardView>
          <AddPhotoOrganism />
          <TextFieldOrganism isFlex={false} onFocus={handleFocusTextField} />
          <Boundary />
          <SelectTagSummaryOrganism />
          <DirectTagSummaryOrganism />
          <Boundary />
          <SelectSharedScopeOrganism />
        </DismissKeyboardView>
      </KeyboardAwareScrollView>
      <SummaryNextButton />
    </SafeAreaView>
  );
};

export default SummaryScreen;
