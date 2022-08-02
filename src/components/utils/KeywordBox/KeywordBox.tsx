import React from 'react';

import {Container, Count, Keyword, TextWrapper} from './KeywordBox.styles';

interface Props {
  keyword: string;
  count: number;
}

const KeywordBox = ({keyword, count}: Props) => {
  return (
    <Container>
      <TextWrapper>
        <Keyword>{keyword}</Keyword>
        <Count>{count}</Count>
      </TextWrapper>
    </Container>
  );
};

export default KeywordBox;
