import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import SelectTagOrganism from 'src/components/PostWrite/SelectTagOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useFocus from 'src/hooks/useFocus';
import {changeScreen} from 'src/redux/actions/PostWriteAction';
import {heightPercentage} from 'src/styles/ScreenResponse';

export type PostWriteMainScreenProps = NativeStackScreenProps<PostWriteParamList, 'PostWriteMain'>;

const SelectTagScreen = ({navigation}: PostWriteMainScreenProps) => {
  const dispatch = useDispatch();

  useFocus(() => {
    dispatch(changeScreen(1));
  });

  return (
    <SafeAreaView
      style={{
        marginBottom: heightPercentage(54),
        marginTop: -heightPercentage(4),
      }}>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>태그 선택</LeftBackHeader>
      <SelectTagOrganism />
    </SafeAreaView>
  );
};

export default SelectTagScreen;
