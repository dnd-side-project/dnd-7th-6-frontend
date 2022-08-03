import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {DetailHeaderStyle} from './BoothDetailScreen.styles';

import {BoothParamList} from '.';

import DescriptionOrganism from 'src/components/BoothDetail/DescriptionOrganism';
import ImageSliderOrganism from 'src/components/BoothDetail/ImageSliderOrganism';
import KeywordOrganism from 'src/components/BoothDetail/KeywordOrganism';
import ReviewOrganism from 'src/components/BoothDetail/ReviewOrganism';

export type DetailScreenProps = NativeStackScreenProps<BoothParamList, 'BoothDetailScreen'>;

const BoothDetailScreen = ({navigation, route}: DetailScreenProps) => {
  useLayoutEffect(() => {
    DetailHeaderStyle({navigation, route});
  });

  return (
    <ScrollView>
      <ImageSliderOrganism />
      <DescriptionOrganism />
      <KeywordOrganism />
      <ReviewOrganism />
    </ScrollView>
  );
};

export default BoothDetailScreen;
