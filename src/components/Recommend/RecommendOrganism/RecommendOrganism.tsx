import React, {useCallback, useState} from 'react';
import {RefreshControl} from 'react-native';
import {useQueryClient} from 'react-query';

import AddPostButton from '../AddPostButton';
import FrameOrganism from '../FrameOrganism';
import PoseRecommendOrganism from '../PoseOrganism/PoseOrganism';
import RecommendCommonBanner from '../RecommendCommonBanner';
import RecommendHeader from '../RecommendHeader';
import RecommendKeywordQuest from '../RecommendKeywordQuest';
import ReviewBoothPressableBanner from '../ReviewBoothPressableBanner';

import DefaultScrollView from 'src/components/DefaultScrollView';
const RecommendOrganism = () => {
  const queryClient = useQueryClient();
  const wait = async (timeout: number) => {
    await queryClient.invalidateQueries(['post']);
    return new Promise<void>(resolve => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await wait(1000);
    setRefreshing(false);
  }, []);
  return (
    <>
      <RecommendHeader />
      <DefaultScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <PoseRecommendOrganism />
        <ReviewBoothPressableBanner />
        <RecommendKeywordQuest />
        <RecommendCommonBanner />
        <FrameOrganism />
      </DefaultScrollView>
      <AddPostButton />
    </>
  );
};

export default RecommendOrganism;
