import React from 'react';
import {Text} from 'react-native';

import RoundChip from '../Chip/RoundChip';
import {
  ChipWrapper,
  Container,
  DescriptionContainer,
  Distance,
  ImageContainer,
  Rating,
  SubText,
  TagContainer,
  Title,
} from './BoothSummaryView.styles';

import {PhotoBoothContentData} from 'src/types';
import toLocaleString from 'src/utils/toLocaleString';

const BoothSummaryView = (item: PhotoBoothContentData) => {
  return (
    <Container>
      <DescriptionContainer>
        <Title>{item.photoBooth.name}</Title>
        <SubText>
          <Distance>17km</Distance>
          <Text> | </Text>
          <Rating>부스리뷰 {toLocaleString(10)}개</Rating>
        </SubText>
        <TagContainer>
          {/* {props.tags.map(tag => (
            <ChipWrapper key={tag}>
              <RoundChip mode="gray">{tag}</RoundChip>
            </ChipWrapper>
          ))} */}
        </TagContainer>
      </DescriptionContainer>
      <ImageContainer />
    </Container>
  );
};

export default BoothSummaryView;
