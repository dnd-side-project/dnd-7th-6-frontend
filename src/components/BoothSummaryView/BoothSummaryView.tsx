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

import {BoothSummary} from 'src/types';
import toLocaleString from 'src/utils/toLocaleString';

const BoothSummaryView = (props: BoothSummary) => {
  return (
    <Container>
      <DescriptionContainer>
        <Title>{props.title}</Title>
        <SubText>
          <Distance>{props.distance}km</Distance>
          <Text> | </Text>
          <Review>부스리뷰 {toLocaleString(props.review)}개</Review>
        </SubText>
        <TagContainer>
          {props.tags.map(tag => (
            <ChipWrapper key={tag}>
              <RoundChip mode="gray">{tag}</RoundChip>
            </ChipWrapper>
          ))}
        </TagContainer>
      </DescriptionContainer>
      <ImageContainer />
    </Container>
  );
};

export default BoothSummaryView;
