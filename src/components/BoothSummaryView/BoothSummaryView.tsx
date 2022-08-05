import React from 'react';
import {Text} from 'react-native';

import RoundChip from '../Chip/RoundChip';
import {
  ChipWrapper,
  Container,
  DescriptionContainer,
  Distance,
  ImageContainer,
  Review,
  SubText,
  TagContainer,
  Title,
} from './BoothSummaryView.styles';

import {PhotoBooth} from 'src/types';
import toLocaleString from 'src/utils/toLocaleString';

const BoothSummaryView = (item: PhotoBooth) => {
  return (
    <Container>
      <DescriptionContainer>
        <Title>{item.name}</Title>
        <SubText>
          <Distance>17km</Distance>
          <Text> | </Text>
          <Review>부스리뷰 {toLocaleString(10)}개</Review>
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
