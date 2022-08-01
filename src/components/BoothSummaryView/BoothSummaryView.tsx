import React from 'react';
import {Text} from 'react-native';

import RoundChip from '../Chip/RoundChip';
import {
  Container,
  DescriptionContainer,
  Distance,
  ImageContainer,
  Review,
  TagContainer,
  Title,
} from './BoothSummaryView.styles';

import {BoothSummary} from 'src/types';

const BoothSummaryView = (props: BoothSummary) => {
  return (
    <Container>
      <DescriptionContainer>
        <Title>{props.title}</Title>
        <Text>
          <Distance>{props.distance}</Distance>
          <Review>{props.review}</Review>
        </Text>
        <TagContainer>
          {props.tags.map(tag => (
            <RoundChip>{tag}</RoundChip>
          ))}
        </TagContainer>
      </DescriptionContainer>
      <ImageContainer />
    </Container>
  );
};

export default BoothSummaryView;
