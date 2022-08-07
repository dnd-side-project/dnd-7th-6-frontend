import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {RecommendParamList} from '.';

import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';

export type DetailScreenProps = NativeStackScreenProps<RecommendParamList, 'PostWrite'>;

const PostWriteScreen = ({navigation}: DetailScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>새 게시물</LeftBackHeader>
      <ScrollView />
    </SafeAreaView>
  );
};

export default PostWriteScreen;
