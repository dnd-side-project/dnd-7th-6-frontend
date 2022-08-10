import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';

import {PostWriteParamList} from '.';

import SelectTagOrganism from 'src/components/PostWrite/SelectTagOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import {heightPercentage} from 'src/styles/ScreenResponse';
import SelectTagNextButton from 'src/components/PostWrite/NextButtons/SelectTag';

export type PostWriteMainScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const SelectTagScreen = ({navigation}: PostWriteMainScreenProps) => {
  return (
    <SafeAreaView
      style={{
        marginBottom: heightPercentage(54),
        marginTop: -heightPercentage(4),
      }}>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>태그 선택</LeftBackHeader>
      <SelectTagOrganism />
      <SelectTagNextButton />
    </SafeAreaView>
  );
};

export default SelectTagScreen;
