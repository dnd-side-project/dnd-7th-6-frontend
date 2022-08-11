import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import {PostWriteParamList} from '.';

import ExitCenterOrganism from 'src/components/PostWrite/ExitCenterOrganism';
import ExitNavigationOrganism from 'src/components/PostWrite/ExitNavigationOrganism/ExitNavigationOrganism';
import LeftBackHeader from 'src/components/utils/Header/LeftBackHeader';
import useHideTabBar from 'src/hooks/useHideTabBar';
import {closePostWrite} from 'src/redux/actions/TabBarAction';

export type ExitPostWriteScreenProps = NativeStackScreenProps<PostWriteParamList, 'ExitPostWrite'>;

const ExitPostWriteScreen = ({navigation}: ExitPostWriteScreenProps) => {
  const dispatch = useDispatch();

  useHideTabBar();

  useEffect(() => {
    dispatch(closePostWrite());
  }, []);

  return (
    <SafeAreaView>
      <LeftBackHeader onPressBack={() => navigation.goBack()} />
      <ExitCenterOrganism />
      <ExitNavigationOrganism />
    </SafeAreaView>
  );
};

export default ExitPostWriteScreen;
