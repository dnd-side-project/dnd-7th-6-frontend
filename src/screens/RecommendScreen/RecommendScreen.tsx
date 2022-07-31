import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import {RecommendHeaderStyle} from './RecommendScreen.header';

import {RecommendParamList} from '.';

import DefaultScrollView from 'src/components/DefaultScrollView';
import FrameRecommendOrganism from 'src/components/FrameRecommendOrganism';
import PoseRecommendOrganism from 'src/components/PoseRecommendOrganism';

export type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = ({navigation, route}: RecommendScreenProps) => {
  useLayoutEffect(() => {
    RecommendHeaderStyle({navigation, route});
  });

  return (
    <DefaultScrollView>
      <PoseRecommendOrganism>인기 있는 포즈</PoseRecommendOrganism>
      <FrameRecommendOrganism>프레임 추천</FrameRecommendOrganism>
    </DefaultScrollView>
  );
};

export default RecommendScreen;
