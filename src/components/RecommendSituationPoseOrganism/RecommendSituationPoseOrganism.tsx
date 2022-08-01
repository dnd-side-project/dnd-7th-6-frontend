import React from 'react';

import BannerView from '../Banner';
import SituationPoseRecommendSwiper from '../SituationPoseRecommendSwiper';
import {
  BannerViewWrapper,
  RecommendSituationPoseView,
  TitleText,
} from './RecommendSituationPoseOrganism.styles';
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
