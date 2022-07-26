import React from 'react';
import {Pressable} from 'react-native';

import {
  ChipWrapper,
  Container,
  Contents,
  Date,
  Header,
  IconWrapper,
  TextSection,
  Username,
} from './RecommendDetailContentsOrganisms.styles';

const RecommendDetailContentsOrganism = () => {
  /*
    username, date, contents, tags
  */
  return (
    <Container>
      <Header>
        <TextSection>
          <Username>minbberry</Username>
          <Date>2023. 12. 30</Date>
        </TextSection>
        <IconWrapper />
      </Header>
      <Contents>{'꿀팁 전수합니다 \n손을 입에 제대로 걸어야 예쁘게 나와요 ~'}</Contents>
      <ChipWrapper>
        <Pressable />
      </ChipWrapper>
    </Container>
  );
};

export default RecommendDetailContentsOrganism;
