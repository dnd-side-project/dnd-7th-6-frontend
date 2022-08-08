import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {RecommendParamList} from '..';

import InputContentsOrganism from 'src/components/PostWrite/InputContentsOrganism';
import DismissKeyboardView from 'src/components/utils/DismissKeyboardScrollView';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

export type DetailScreenProps = NativeStackScreenProps<RecommendParamList, 'PostWrite'>;

const PostWriteMainScreen = ({navigation}: DetailScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>새 게시물</LeftBackHeader>
      <DismissKeyboardView>
        <InputContentsOrganism />
      </DismissKeyboardView>
    </SafeAreaView>
  );
};

export default PostWriteMainScreen;
