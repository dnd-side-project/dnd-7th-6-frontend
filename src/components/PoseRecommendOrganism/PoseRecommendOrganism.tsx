import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import PressableAddition from '../PressableAddition';
import RecommendPreviewFourCard from '../RecommendPreviewFourCard';
import {SubHeadline2} from '../utils/Text';
import {ButtonWrapper, OrganismView, TitleWrapper} from './PoseRecommendOrganism.styles';

import {TestData} from 'src/TestData';

const PoseRecommendOrganism = ({children}: PropsWithChildren) => {
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

export default PoseRecommendOrganism;
