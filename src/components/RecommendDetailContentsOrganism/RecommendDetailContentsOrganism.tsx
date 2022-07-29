import React from 'react';

import Chip from '../Chip';
import {
  ChipContainer,
  ChipWrapper,
  Container,
  Contents,
  DateText,
  Header,
  IconContainer,
  IconWrapper,
  PressableLikeIcon,
  PressableUploadIcon,
  TextSection,
  Username,
} from './RecommendDetailContentsOrganism.styles';

import useGetPost from 'src/querys/useGetPost';
import toDateFormat from 'src/utils/toDateFormat';

const RecommendDetailContentsOrganism = () => {
  const {data} = useGetPost(1);

  return (
    <Container>
      <Header>
        <TextSection>
          <Username>{data?.user.email}</Username>
          <DateText>{toDateFormat(new Date(data?.createdAt || ''))}</DateText>
        </TextSection>
        <IconWrapper>
          <IconContainer>
            <PressableLikeIcon />
          </IconContainer>
          <IconContainer>
            <PressableUploadIcon />
          </IconContainer>
        </IconWrapper>
      </Header>
      <Contents>{data?.content}</Contents>
      <ChipWrapper>
        {data?.postTagSet.map(({tag}) => (
          <ChipContainer key={tag.id}>
            <Chip mode="bright" key={tag.id}>
              {tag.tag}
            </Chip>
          </ChipContainer>
        ))}
      </ChipWrapper>
    </Container>
  );
};

export default RecommendDetailContentsOrganism;
