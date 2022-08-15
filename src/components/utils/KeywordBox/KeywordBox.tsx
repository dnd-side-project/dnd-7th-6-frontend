import React from 'react';
import FastImage from 'react-native-fast-image';

import {Container, Count, Degree, Keyword, RowBox, style, TextWrapper} from './KeywordBox.styles';

interface Props {
  keyword: string;
  count: number;
  degree: number;
  iconUri?: string;
}

const KeywordBox = ({iconUri, keyword, count, degree}: Props) => {
  return (
    <Container>
      <Degree degree={degree} />
      <TextWrapper>
        <RowBox>
          {!iconUri || <FastImage source={{uri: iconUri}} style={style.fastImage} />}
          <Keyword>{keyword}</Keyword>
        </RowBox>
        <Count>{count}</Count>
      </TextWrapper>
    </Container>
  );
};

export default KeywordBox;
