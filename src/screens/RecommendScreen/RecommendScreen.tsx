import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import {RecommendHeaderStyle} from './RecommendScreen.header';

import {RecommendParamList} from '.';

import DefaultScrollView from 'src/components/DefaultScrollView';
import RecommendPreviewFourCard from 'src/components/RecommendPreviewFourCard';
import {sData} from 'src/components/RecommendPreviewFourCard/TestData';

export type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = ({navigation, route}: RecommendScreenProps) => {
  useLayoutEffect(() => {
    RecommendHeaderStyle({navigation, route});
  });
  return (
    <DefaultScrollView>
      <RecommendPreviewFourCard data={sData} />
    </DefaultScrollView>
  );
};

export default RecommendScreen;
