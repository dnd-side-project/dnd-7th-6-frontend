import React from 'react';

import {Props} from '../PoseRecommendOrganism/PoseRecommendOrganism';
import RecommendFeedCard from '../RecommendFeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

const RecommendPreviewFourCard = ({data}: Props) => {
  return (
    <PreviewFourCardView>
      {data.map(({url, id}) => (
        <RecommendFeedCard imgUrl={url} key={id} />
      ))}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
