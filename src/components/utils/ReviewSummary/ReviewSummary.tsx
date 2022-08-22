import React, {useRef, useState} from 'react';
import {Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import DropdownMenu from '../DropdownMenu';
import {PressableMeetBallIcon} from '../Pressables/PressableIcons';
import ReviewTagChip from '../ReviewTagChip';
import StarBox from '../StarBox';
import {
  Container,
  Content,
  CreatedAt,
  DropdownWrapper,
  ImageContainer,
  RowView,
  style,
  TagContainer,
  TagWrapper,
  TextContainer,
  UserName,
  ViewMore,
} from './ReviewSummary.styles';

import {Review} from 'src/types';
import toDateFormat from 'src/utils/toDateFormat';

interface MenuItem {
  name: string;
  onPressItem: () => void;
}

type Props = Review & {menuItems?: MenuItem[]; isLast?: boolean};

const ReviewSummary = ({menuItems, ...props}: Props) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [visibleLine, setVisibleLine] = useState(props.content.length < 100);
  const [visibleTag, setVisibleTag] = useState(props.reviewTagSet.length < 5);
  const [content, setContent] = useState(props.content.slice(0, 100));
  const [tags, setTags] = useState(props.reviewTagSet.slice(0, 4));
  const contentRef = useRef<Text>(null);

  const isExistImage = props.reviewImageSet.length <= 0;
  const isExistTag = props.reviewTagSet.length <= 0;

  return (
    <Container isLast={props.isLast}>
      <UserName>@{props.user.name}</UserName>
      <RowView>
        <StarBox score={props.starScore} />
        <CreatedAt>{toDateFormat(new Date(props.createdAt))}</CreatedAt>
      </RowView>
      {!menuItems || (
        <PressableMeetBallIcon
          style={style.menu}
          onPress={() => setIsOpenDropdown(prev => !prev)}
        />
      )}
      {!(!!menuItems && isOpenDropdown) || (
        <DropdownWrapper>
          <DropdownMenu items={menuItems} />
        </DropdownWrapper>
      )}
      <TextContainer>
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
      </TextContainer>
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
                  tagIconImageUrl: '',
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
