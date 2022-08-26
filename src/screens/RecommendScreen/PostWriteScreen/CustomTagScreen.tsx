import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import InputCustomTagOrganism from 'src/components/PostWrite/InputCustomTagOrganism/InputCustomTagOrganism';
import DismissCommonKeyboardView from 'src/components/utils/DismissCommonKeyboardView';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useFocus from 'src/hooks/useFocus';
import {changeModifyMode, changeScreen} from 'src/redux/actions/PostWriteAction';
import {heightPercentage} from 'src/styles/ScreenResponse';

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
      <DismissCommonKeyboardView>
        <LeftBackHeader onPressBack={() => navigation.goBack()}>태그 직접 입력</LeftBackHeader>
        <InputCustomTagOrganism />
        <View style={{height: heightPercentage(300)}} />
      </DismissCommonKeyboardView>
    </SafeAreaView>
  );
};

export default CustomTagScreen;
