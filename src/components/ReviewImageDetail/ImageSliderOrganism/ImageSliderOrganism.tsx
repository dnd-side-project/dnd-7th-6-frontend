import React, {useRef} from 'react';
import {PressableProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import * as Swiper from 'react-native-swiper';

import {NextContainer, PrevContainer} from './ImageSliderOrganism.styles';

import LeftArrowIcon from 'src/icons/LeftArrowIcon';
import RightArrowIcon from 'src/icons/RightArrowIcon';
import useGetReviewImages from 'src/querys/useGetReviewImages';
import {heightPercentage} from 'src/styles/ScreenResponse';
import theme from 'src/styles/Theme';
import {ReviewImage} from 'src/types';

interface Props {
  boothId?: number;
  targetImage: ReviewImage;
}

const NextButton = (props: PressableProps) => {
  return (
    <NextContainer {...props}>
      <RightArrowIcon color={theme.colors.grayscale[1]} />
    </NextContainer>
  );
};
const PrevButton = (props: PressableProps) => {
  return (
    <PrevContainer {...props}>
      <LeftArrowIcon color={theme.colors.grayscale[1]} />
    </PrevContainer>
  );
};

const ImageSliderOrganism = ({boothId, targetImage}: Props) => {
  const swiperRef = useRef<Swiper.default>(null);
  const {data, fetchNextPage} = useGetReviewImages(boothId as number, {enable: !!boothId});
  const flatedData = data?.pages.flatMap(({content}) => content) || [];
  const images = [targetImage, ...flatedData.filter(({id}) => targetImage.id !== id)];

  const handleIndexChange = (idx: number) => {
    if (idx >= images.length - 2) {
      fetchNextPage();
    }
  };

  if (!boothId) {
    return (
      <FastImage source={{uri: targetImage.imageUrl}} style={{height: heightPercentage(514)}} />
    );
  }

  return (
    <Swiper.default
      ref={swiperRef}
      horizontal={true}
      nextButton={<NextButton onPress={() => swiperRef.current?.scrollBy(1)} />}
      prevButton={<PrevButton onPress={() => swiperRef.current?.scrollBy(-1)} />}
      showsButtons
      loop={false}
      showsPagination={false}
      onIndexChanged={handleIndexChange}>
      {images.map(image => (
        <FastImage source={{uri: image.imageUrl}} style={{height: heightPercentage(514)}} />
      ))}
    </Swiper.default>
  );
};

export default ImageSliderOrganism;
