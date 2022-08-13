import React from 'react';
import {Text} from 'react-native';

import {
  ChipWrapper,
  Container,
  DescriptionContainer,
  Distance,
  ImageContainer,
  Rating,
  ReviewCount,
  ReviewCountContainer,
  SubText,
  TagContainer,
  Title,
} from './BoothSummaryView.styles';

import RoundChip from 'src/components/Chip/RoundChip';
import ColorStarIcon14 from 'src/icons/ColorStarIcon14';
import {PhotoBoothContentData} from 'src/types';

const data = ['#넓은 촬영공간', '#홀수출력 가능'];

const BoothSummaryView = (item: PhotoBoothContentData) => {
  return (
    <Container>
      <DescriptionContainer>
        <Title>{item.photoBooth.name}</Title>
        <SubText>
          <Distance>{item.distance.toFixed(2)}km</Distance>
          <Text> | </Text>
          <ColorStarIcon14 />
          <Rating>4.9</Rating>
        </SubText>
        <TagContainer>
          {data.map(tag => (
            <ChipWrapper key={tag}>
              <RoundChip mode="gray">{tag}</RoundChip>
            </ChipWrapper>
          ))}
        </TagContainer>
      </DescriptionContainer>
      <ImageContainer>
        <ReviewCountContainer>
          <ReviewCount>999+</ReviewCount>
        </ReviewCountContainer>
      </ImageContainer>
    </Container>
  );
};

export default BoothSummaryView;
