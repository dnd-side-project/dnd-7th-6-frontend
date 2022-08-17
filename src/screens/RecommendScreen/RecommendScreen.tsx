import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {SafeAreaView} from 'react-native';

import {RecommendParamList} from '.';

import DefaultScrollView from 'src/components/DefaultScrollView';
import AddPostButton from 'src/components/Recommend/AddPostButton';
import FrameOrganism from 'src/components/Recommend/FrameOrganism';
import PoseRecommendOrganism from 'src/components/Recommend/PoseOrganism/PoseOrganism';
import RecommendCommonBanner from 'src/components/Recommend/RecommendCommonBanner';
import RecommendHeader from 'src/components/Recommend/RecommendHeader';
import RecommendKeywordQuest from 'src/components/Recommend/RecommendKeywordQuest';
import ReviewBoothPressableBanner from 'src/components/Recommend/ReviewBoothPressableBanner';

export type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = () => {
  return (
    <SafeAreaView>
      <RecommendHeader />
      <DefaultScrollView>
        <PoseRecommendOrganism />
        <ReviewBoothPressableBanner />
        <RecommendKeywordQuest />
        <RecommendCommonBanner />
        <FrameOrganism />
      </DefaultScrollView>
      <AddPostButton />
    </SafeAreaView>
  );
};

export default RecommendScreen;
