import React from 'react';
import {ScrollView} from 'react-native';

import SquareCard from '../SquareCard';
import {SquareText, SquareView} from './SituationPoseRecommendSwiper.styles';

import {SwiperData} from 'src/SwiperData';

const SituationPoseRecommendSwiper = () => {
  return (
    <>
      <ScrollView
        horizontal
        bounces={false}
        bouncesZoom={false}
        overScrollMode={'never'}
        showsHorizontalScrollIndicator={false}>
        {SwiperData.map(({url, id, title}, index) => (
          <SquareView key={id} index={index}>
            <SquareCard imgUrl={url} />
            <SquareText>{title}</SquareText>
          </SquareView>
        ))}
      </ScrollView>
    </>
  );
};

export default SituationPoseRecommendSwiper;
