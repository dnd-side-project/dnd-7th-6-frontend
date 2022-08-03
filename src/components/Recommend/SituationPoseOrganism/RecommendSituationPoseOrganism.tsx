import React from 'react';

import SituationPoseRecommendSwiper from '../SituationPoseSwiper';
import {
  BannerViewWrapper,
  RecommendSituationPoseView,
  TitleText,
} from './RecommendSituationPoseOrganism.styles';

import BannerView from 'src/components/Banner';
const RecommendSituationPoseOrganism = () => {
  return (
    <RecommendSituationPoseView>
      <TitleText>상황별 포즈 추천</TitleText>
      <SituationPoseRecommendSwiper />
      <BannerViewWrapper>
        <BannerView />
      </BannerViewWrapper>
    </RecommendSituationPoseView>
  );
};

export default RecommendSituationPoseOrganism;
