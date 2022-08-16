import React from 'react';
import {FlatList, LayoutChangeEvent} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Container,
  Count,
  Headline,
  style,
  TextContainer,
  TotalPhoto,
} from './GridPhotoOrganism.styles';

import useGetReviewImagesMock from 'src/querys/useGetReviewImages';
import toLocaleString from 'src/utils/toLocaleString';

interface Props {
  id: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const GridPhotoOrganism = ({id, onLayout}: Props) => {
  const data = useGetReviewImagesMock(id);

  return (
    <Container onLayout={onLayout}>
      <TextContainer>
        <Headline>이 매장에서 찍은 사진 </Headline>
        <Count> {toLocaleString(data.totalElements)}</Count>
      </TextContainer>
      <FlatList
        data={data.content.slice(0, 6)}
        numColumns={3}
        renderItem={uri => (
          <FastImage
            key={uri.item.id}
            source={{uri: uri.item.imageUrl}}
            style={{...style.fastImage, ...{opacity: uri.index === 5 ? 0.5 : 1}}}>
            {uri.index !== 5 || <TotalPhoto>{data.totalElements}</TotalPhoto>}
          </FastImage>
        )}
      />
    </Container>
  );
};

export default GridPhotoOrganism;
