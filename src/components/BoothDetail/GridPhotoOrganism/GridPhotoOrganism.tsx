import React from 'react';
import {LayoutChangeEvent} from 'react-native';
import FastImage from 'react-native-fast-image';

import {
  Container,
  Count,
  GridView,
  Headline,
  OpacityView,
  style,
  TextContainer,
  TotalPhoto,
} from './GridPhotoOrganism.styles';

import useGetReviewImages from 'src/querys/useGetReviewImages';
import toLocaleString from 'src/utils/toLocaleString';

interface Props {
  id: number;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const GridPhotoOrganism = ({id, onLayout}: Props) => {
  const {data} = useGetReviewImages(id);

  if (!data) {
    return <></>;
  }

  return (
    <Container onLayout={onLayout}>
      <TextContainer>
        <Headline>이 매장에서 찍은 사진 </Headline>
        <Count> {toLocaleString(data.totalElements)}</Count>
      </TextContainer>
      <GridView>
        {data.content.slice(0, 6).map(({id: reviewId, imageUrl}, i) => (
          <>
            <FastImage
              key={reviewId}
              source={{uri: imageUrl}}
              style={{
                ...style.fastImage,
              }}
            />
            {i === 5 && data.content.length > 6 && (
              <OpacityView>
                <TotalPhoto>{data.totalElements - 6}+</TotalPhoto>
              </OpacityView>
            )}
          </>
        ))}
      </GridView>
    </Container>
  );
};

export default GridPhotoOrganism;
