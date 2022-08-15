import React from 'react';
import {Text} from 'react-native';

import {
  Container,
  Headline,
  KeywordContainer,
  KeywordWrapper,
  TextContainer,
} from './KeywordTagSection.styles';

import KeywordBox from 'src/components/utils/KeywordBox';
import {Tag} from 'src/types';

interface Props {
  id: number;
  title: string;
  keywords: {tag: Tag; reviewCount: number}[];
}

const KeywordTagSection = (props: Props) => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <Headline>{props.title}</Headline>
        </Text>
      </TextContainer>
      <KeywordContainer>
        {props.keywords.slice(0, 4).map(({tag, reviewCount}) => (
          <KeywordWrapper>
            <KeywordBox
              key={tag.id}
              keyword={tag.title}
              count={reviewCount}
              degree={
                (reviewCount /
                  props.keywords.reduce((sum, keyword) => sum + keyword.reviewCount, 0)) *
                150
              }
              iconUri={tag.tagIconImageUrl}
            />
          </KeywordWrapper>
        ))}
      </KeywordContainer>
    </Container>
  );
};

export default KeywordTagSection;
