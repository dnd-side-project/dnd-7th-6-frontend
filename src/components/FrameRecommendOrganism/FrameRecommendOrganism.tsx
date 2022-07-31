import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import PressableAddition from '../PressableAddition';
import RecommendPreviewFourCard from '../RecommendPreviewFourCard';
import {SubHeadline2} from '../utils/Text';
import {ButtonWrapper, OrganismView, TitleWrapper} from './FrameRecommendOrganism.styles';

import {TestData} from 'src/TestData';

export interface Props {
  data: ReadonlyArray<renderItemList['item']>;
}

export type renderItemList = {
  item: {
    url: string;
    id: string;
    title: string;
  };
};

const FrameRecommendOrganism = ({children}: PropsWithChildren) => {
  const navigation = useNavigation();

  const handlePressCard = (id: number) => () => {
    navigation.navigate('RecommendDetail' as never, {postId: id} as never);
  };

  //TO-DO data fetching
  return (
    <OrganismView>
      <TitleWrapper>
        <SubHeadline2>{children}</SubHeadline2>
      </TitleWrapper>
      <RecommendPreviewFourCard data={TestData} onPress={handlePressCard} />
      <ButtonWrapper>
        <PressableAddition>사진 더보기</PressableAddition>
      </ButtonWrapper>
    </OrganismView>
  );
};

export default FrameRecommendOrganism;
