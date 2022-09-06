import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';

import {RecommendParamList} from '.';

import RecommendOrganism from 'src/components/Recommend/RecommendOrganism';
import useFocus from 'src/hooks/useFocus';
import {showTabBar} from 'src/redux/actions/TabBarAction';

export type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = () => {
  const dispatch = useDispatch();

  useFocus(() => {
    dispatch(showTabBar());
  });

  return (
    <SafeAreaView>
      <RecommendOrganism />
    </SafeAreaView>
  );
};

export default RecommendScreen;
