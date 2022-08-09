import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {PostWriteParamList} from '.';

import NextButtonOrganism from 'src/components/PostWrite/NextButtonOrganism';
import SelectTagOrganism from 'src/components/PostWrite/SelectTagOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type PostWriteMainScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const SelectTagScreen = ({navigation}: PostWriteMainScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <SafeAreaView
      style={{
        marginBottom: heightPercentage(54),
        marginTop: -heightPercentage(4),
      }}>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>태그 선택</LeftBackHeader>
      <SelectTagOrganism />
      <NextButtonOrganism screenName="TagScreen" />
    </SafeAreaView>
  );
};

export default SelectTagScreen;
