import React from 'react';

import RecommendFeedCard from '../RecommendFeedCard';
import {Props} from '../RecommendPreviewCardsOrganism/RecommendPreviewCardsOrganism';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

const RecommendPreviewFourCard = ({data}: Props) => {
  return (
    <PreviewFourCardView>
      {data.map(({url}) => (
        <RecommendFeedCard imgUrl={url} />
      ))}
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
