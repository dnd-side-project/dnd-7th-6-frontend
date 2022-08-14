import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import {RecommendHeaderStyle} from './RecommendScreen.header';

import {RecommendParamList} from '.';

import DefaultScrollView from 'src/components/DefaultScrollView';
import AddPostButton from 'src/components/Recommend/AddPostButton';
import FrameOrganism from 'src/components/Recommend/FrameOrganism';
import PoseRecommendOrganism from 'src/components/Recommend/PoseOrganism/PoseOrganism';
import RecommendSituationPoseOrganism from 'src/components/Recommend/SituationPoseOrganism';

export type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = ({navigation, route}: RecommendScreenProps) => {
  useLayoutEffect(() => {
    RecommendHeaderStyle({navigation, route});
  });

  return (
    <>
      <DefaultScrollView>
        <PoseRecommendOrganism>인기 있는 포즈</PoseRecommendOrganism>
        <RecommendSituationPoseOrganism />
        <FrameOrganism>프레임 추천</FrameOrganism>
      </DefaultScrollView>
      <AddPostButton />
    </>
  );
};

export default RecommendScreen;
