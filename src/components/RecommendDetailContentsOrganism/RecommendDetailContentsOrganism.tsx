import React, {useState} from 'react';

import Chip from '../Chip';
import {PressableUploadIcon, PressableLikeIcon} from '../utils/Pressables/PressableIcons';
import {
  ChipContainer,
  ChipWrapper,
  Container,
  Contents,
  Date,
  Header,
  IconContainer,
  IconWrapper,
  TextSection,
  Username,
} from './RecommendDetailContentsOrganisms.styles';

const RecommendDetailContentsOrganism = () => {
  /*
    username, date, contents, tags
  */
  const [data, setData] = useState({
    username: 'minbberry',
    date: '2023. 12. 30',
    contents: '꿀팁 전수합니다 \n손을 입에 제대로 걸어야 예쁘게 나와요 ~',
    tags: ['4인 이상', '코믹', '커플포즈', '신규이벤트프레임', '인생네컷 익선동지점'],
  });

  return (
    <Container>
      <Header>
        <TextSection>
          <Username>{data.username}</Username>
          <Date>{data.date}</Date>
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
      <Contents>{data.contents}</Contents>
      <ChipWrapper>
        {data.tags.map(tag => (
          <ChipContainer>
            <Chip mode="bright">{tag}</Chip>
          </ChipContainer>
        ))}
      </ChipWrapper>
    </Container>
  );
};

export default RecommendDetailContentsOrganism;
