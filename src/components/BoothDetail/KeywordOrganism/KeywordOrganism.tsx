import React, {useState} from 'react';
import {Text} from 'react-native';

import {
  ButtonWrapper,
  Container,
  Headline,
  KeywordContainer,
  ReviewWriteLink,
  TextContainer,
} from './KeywordOrganism.styles';

import BoothDetailData from 'src/BoothDetailData';
import PressableAddition from 'src/components/PressableAddition';
import KeywordBox from 'src/components/utils/KeywordBox';

const KeywordOrganism = () => {
  const [data] = useState(BoothDetailData);

  return (
    <Container>
      <TextContainer>
        <Text>
          <Headline>이 지점 키워드 </Headline>
        </Text>
        <ReviewWriteLink>나도 리뷰 쓰기</ReviewWriteLink>
      </TextContainer>
      <KeywordContainer>
        {data.tagSet.slice(0, 4).map(({id, title, reviewCount}) => (
          <KeywordBox key={id} keyword={title} count={reviewCount} />
        ))}
      </KeywordContainer>
      <ButtonWrapper>
        <PressableAddition>키워드 전체보기</PressableAddition>
      </ButtonWrapper>
    </Container>
  );
};

export default KeywordOrganism;
