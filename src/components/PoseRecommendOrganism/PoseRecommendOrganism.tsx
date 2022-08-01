import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import PressableAddition from '../PressableAddition';
import RecommendPreviewFourCard from '../RecommendPreviewFourCard';
import {ButtonWrapper, OrganismView, TitleText, TitleWrapper} from './PoseRecommendOrganism.styles';

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
        <TitleText>{children}</TitleText>
      </TitleWrapper>
      <RecommendPreviewFourCard data={TestData} onPress={handlePressCard} />
      <ButtonWrapper>
        <PressableAddition>사진 더보기</PressableAddition>
      </ButtonWrapper>
    </OrganismView>
  );
};

export default PoseRecommendOrganism;
