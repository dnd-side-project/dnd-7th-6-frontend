import React, {useRef, useState} from 'react';
import {Text} from 'react-native';
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
  ViewMore,
} from './ReviewSummary.styles';

import {Review} from 'src/types';
import toDateFormat from 'src/utils/toDateFormat';

const ReviewSummary = (props: Review) => {
  const [visibleLine, setVisibleLine] = useState(props.content.length < 100);
  const [visibleTag, setVisibleTag] = useState(props.reviewTagSet.length < 5);
  const [content, setContent] = useState(props.content.slice(0, 100));
  const [tags, setTags] = useState(props.reviewTagSet.slice(0, 4));
  const contentRef = useRef<Text>(null);

  const isExistImage = props.reviewImageSet.length <= 0;
  const isExistTag = props.reviewTagSet.length <= 0;

  return (
    <Container>
      <UserName>@{props.user.name}</UserName>
      <RowView>
        <StarBox score={props.starScore} />
        <CreatedAt>{toDateFormat(new Date(props.createdAt))}</CreatedAt>
      </RowView>
      <Text>
        <Content ref={contentRef}>{content}</Content>
        {visibleLine || (
          <ViewMore
            onPress={() => {
              setVisibleLine(true);
              setContent(props.content);
            }}>
            <Content>...</Content> 더보기
          </ViewMore>
        )}
      </Text>
      {isExistImage || (
        <ImageContainer>
          {props.reviewImageSet.map(({id, imageUrl}) => (
            <FastImage key={id} source={{uri: imageUrl}} style={style.fastImage} />
          ))}
        </ImageContainer>
      )}
      {isExistTag || (
        <TagContainer>
          {tags.map(({tag}) => (
            <TagWrapper key={tag.id}>
              <ReviewTagChip tag={tag} />
            </TagWrapper>
          ))}
          {visibleTag || (
            <TagWrapper key="+">
              <ReviewTagChip
                tag={{
                  id: -1,
                  keyword: `+${props.reviewTagSet.length - 4}`,
                  title: `+${props.reviewTagSet.length - 4}`,
                  photoBoothCount: 0,
                  postCount: 0,
                  reviewCount: 0,
                  tagType: 'CUSTOM',
                }}
                props={{
                  onPress: () => {
                    setVisibleTag(true);
                    setTags(props.reviewTagSet);
                  },
                }}
              />
            </TagWrapper>
          )}
        </TagContainer>
      )}
    </Container>
  );
};

export default ReviewSummary;
