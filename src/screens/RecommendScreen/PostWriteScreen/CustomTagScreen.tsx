import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import InputCustomTagOrganism from 'src/components/PostWrite/InputCustomTagOrganism/InputCustomTagOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useFocus from 'src/hooks/useFocus';
import {changeModifyMode, changeScreen} from 'src/redux/actions/PostWriteAction';

export type CustomTagScreenProps = NativeStackScreenProps<PostWriteParamList, 'CustomTag'>;

const CustomTagScreen = ({navigation, route}: CustomTagScreenProps) => {
  const isModifyMode = route.params?.isModifyMode || false;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isModifyMode) {
      dispatch(changeModifyMode(true));
    }
  });

  useFocus(() => {
    if (!isModifyMode) {
      dispatch(changeScreen(2));
    }
  });

  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()}>태그 선택</LeftBackHeader>
      <InputCustomTagOrganism />
    </SafeAreaView>
  );
};

export default CustomTagScreen;
