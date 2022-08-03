import React, {useState} from 'react';
import {FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  ButtonWrapper,
  Container,
  Count,
  Headline,
  style,
  TextContainer,
} from './GridPhotoOrganism.styles';

import BoothDetailData from 'src/BoothDetailData';
import PressableAddition from 'src/components/PressableAddition';
import toLocaleString from 'src/utils/toLocaleString';

const GridPhotoOrganism = () => {
  const [data] = useState(BoothDetailData);

  return (
    <Container>
      <TextContainer>
        <Headline>포톡커들의 사진 </Headline>
        <Count> {toLocaleString(data.boothPhoto.total)}</Count>
      </TextContainer>
      <FlatList
        data={data.boothPhoto.elements.slice(0, 6)}
        numColumns={3}
        renderItem={uri => (
          <FastImage key={uri.item.id} source={{uri: uri.item.uri}} style={style.fastImage} />
        )}
      />
      <ButtonWrapper>
        <PressableAddition>사진 더보기</PressableAddition>
      </ButtonWrapper>
    </Container>
  );
};

export default GridPhotoOrganism;
