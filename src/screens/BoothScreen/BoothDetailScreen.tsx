import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {DetailHeaderStyle} from './BoothDetailScreen.styles';

import {BoothParamList} from '.';

import DescriptionOrganism from 'src/components/BoothDetail/DescriptionOrganism';
import HeaderOrganism from 'src/components/BoothDetail/HeaderOrganism';
import ImageSliderOrganism from 'src/components/BoothDetail/ImageSliderOrganism';
import KeywordOrganism from 'src/components/BoothDetail/KeywordOrganism';
import ReviewOrganism from 'src/components/BoothDetail/ReviewOrganism';

export type DetailScreenProps = NativeStackScreenProps<BoothParamList, 'BoothDetailScreen'>;

const BoothDetailScreen = ({navigation, route}: DetailScreenProps) => {
  const {id, distance} = {id: 1, distance: 17.7};

  useLayoutEffect(() => {
    DetailHeaderStyle({navigation, route});
  });

  return (
    <SafeAreaView>
      <HeaderOrganism id={id} navigation={navigation} />
      <ScrollView>
        <ImageSliderOrganism id={id} />
        <DescriptionOrganism id={id} distance={distance} />
        <KeywordOrganism />
        <ReviewOrganism />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BoothDetailScreen;
