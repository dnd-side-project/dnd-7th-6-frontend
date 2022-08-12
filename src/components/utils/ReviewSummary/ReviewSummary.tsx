import React from 'react';
import FastImage from 'react-native-fast-image';

import ReviewTagChip from '../ReviewTagChip';
import StarBox from '../StarBox';
import {
  Container,
  Content,
  CreatedAt,
  ImageContainer,
  RowView,
  style,
  TagContainer,
  TagWrapper,
  UserName,
} from './ReviewSummary.styles';

import {Review} from 'src/types';
import toDateFormat from 'src/utils/toDateFormat';

const ReviewSummary = (props: Review) => {
  const isExistImage = props.reviewImageSet.length <= 0;
  const isExistTag = props.reviewTagSet.length <= 0;

  return (
    <Container>
      <UserName>@{props.user.name}</UserName>
      <RowView>
        <StarBox score={props.starScore} />
        <CreatedAt>{toDateFormat(new Date(props.createdAt))}</CreatedAt>
      </RowView>
      <Content>{props.content}</Content>
      {isExistImage || (
        <ImageContainer>
          {props.reviewImageSet.map(({imageUrl}) => (
            <FastImage source={{uri: imageUrl}} style={style.fastImage} />
          ))}
        </ImageContainer>
      )}
      {isExistTag || (
        <TagContainer>
          {props.reviewTagSet.map(({tag}) => (
            <TagWrapper>
              <ReviewTagChip {...tag} />
            </TagWrapper>
          ))}
        </TagContainer>
      )}
    </Container>
  );
};

export default ReviewSummary;
