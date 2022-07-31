import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useLayoutEffect} from 'react';

import {RecommendHeaderStyle} from './RecommendScreen.header';

import {RecommendParamList} from '.';

import DefaultScrollView from 'src/components/DefaultScrollView';
import RecommendPreviewCardsOrganism from 'src/components/RecommendPreviewCardsOrganism';

export type RecommendScreenProps = NativeStackScreenProps<RecommendParamList, 'RecommendScreen'>;

const RecommendScreen = ({navigation, route}: RecommendScreenProps) => {
  useLayoutEffect(() => {
    RecommendHeaderStyle({navigation, route});
  });
  return (
    <DefaultScrollView>
      {/*여기 검색창 추가 됩니다.*/}
      <RecommendPreviewCardsOrganism>요즘 뜨는 포즈!</RecommendPreviewCardsOrganism>
      <RecommendPreviewCardsOrganism>이벤트 프레임 추천</RecommendPreviewCardsOrganism>
    </DefaultScrollView>
  );
};

export default RecommendScreen;
