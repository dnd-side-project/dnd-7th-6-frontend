import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import ExitCenterOrganism from 'src/components/PostWrite/ExitCenterOrganism';
import ExitNavigationOrganism from 'src/components/PostWrite/ExitNavigationOrganism/ExitNavigationOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useHideTabBar from 'src/hooks/useHideTabBar';
import {clearPostWrite} from 'src/redux/actions/PostWriteAction';

export type ExitPostWriteScreenProps = NativeStackScreenProps<PostWriteParamList, 'ExitPostWrite'>;

const ExitPostWriteScreen = ({navigation}: ExitPostWriteScreenProps) => {
  const dispatch = useDispatch();
  const handlePressBack = () => {
    dispatch(clearPostWrite());
    navigation.reset({
      index: 0,
      routes: [{name: 'Recommend' as never}],
    });
  };
  useHideTabBar();
  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={handlePressBack} />
      <ExitCenterOrganism />
      <ExitNavigationOrganism />
    </SafeAreaView>
  );
};

export default ExitPostWriteScreen;
