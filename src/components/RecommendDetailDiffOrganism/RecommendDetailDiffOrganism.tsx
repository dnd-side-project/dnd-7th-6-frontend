import React from 'react';

import RecommendFeedCard from '../RecommendFeedCard';
import {PressableRightArrowIcon} from '../utils/Pressables/PressableIcons';
import {SubHeadline2} from '../utils/Text';
import {
  CardContainer,
  CardWrapper,
  Container,
  IconWrapper,
  NumOfDiff,
  Title,
  TitleContainer,
} from './RecommendDetailDiffOrganism.styles';

const RecommendDetailDiffOrganism = () => {
  return (
    <Container>
      <TitleContainer>
        <SubHeadline2>
          <Title>minbberry님의 다른 사진 </Title>
          <NumOfDiff> 33</NumOfDiff>
        </SubHeadline2>
        <IconWrapper>
          <PressableRightArrowIcon />
        </IconWrapper>
      </TitleContainer>
      <CardContainer>
        <CardWrapper>
          <RecommendFeedCard imgUrl="" />
        </CardWrapper>
        <CardWrapper>
          <RecommendFeedCard imgUrl="" />
        </CardWrapper>
        <CardWrapper>
          <RecommendFeedCard imgUrl="" />
        </CardWrapper>
        <CardWrapper>
          <RecommendFeedCard imgUrl="" />
        </CardWrapper>
      </CardContainer>
    </Container>
  );
};

export default RecommendDetailDiffOrganism;
