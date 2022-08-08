import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren} from 'react';

import PreviewFourCard from '../PreviewFourCard';
import {ButtonWrapper, OrganismView, TitleText, TitleWrapper} from './PoseOrganism.styles';

import PressableAddition from 'src/components/PressableAddition';
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
      <PreviewFourCard data={TestData} onPress={handlePressCard} />
      <ButtonWrapper>
        <PressableAddition onPress={() => navigation.navigate('PostListDetail' as never)}>
          사진 더보기
        </PressableAddition>
      </ButtonWrapper>
    </OrganismView>
  );
};

export default PoseRecommendOrganism;
