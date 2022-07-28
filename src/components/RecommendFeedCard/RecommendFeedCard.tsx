import React from 'react';

import {PressableLikeIcon} from '../utils/Pressables/PressableIcons';
import {FeedCardContainer, IconContainer} from './RecommendFeedCard.styles';
const RecommendFeedCard = () => {
  return (
    <FeedCardContainer>
      <IconContainer>
        <PressableLikeIcon />
      </IconContainer>
    </FeedCardContainer>
  );
};

export default RecommendFeedCard;
