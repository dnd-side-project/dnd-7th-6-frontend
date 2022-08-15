import {useNavigation} from '@react-navigation/native';
import React from 'react';

import PreviewFourCard from '../PreviewSixCard';
import {
  ButtonPressable,
  ButtonText,
  OrganismView,
  SubTitleText,
  TextnIconWrapper,
  TitleIcon,
  TitleText,
  TitleWrapper,
} from './PoseOrganism.styles';

import {TestData} from 'src/TestData';

const PoseRecommendOrganism = () => {
  const navigation = useNavigation();

  const handlePressCard = (id: number) => () => {
    navigation.navigate('RecommendDetail' as never, {postId: id} as never);
  };

  //TO-DO data fetching
  return (
    <OrganismView>
      <TitleWrapper>
        <TextnIconWrapper>
          <TitleIcon />
          <TitleText>지금 핫한 사진</TitleText>
        </TextnIconWrapper>
        <SubTitleText>인기있는 포톡커의 사진을 확인해보세요</SubTitleText>
      </TitleWrapper>
      <PreviewFourCard data={TestData} onPress={handlePressCard} />
      <ButtonPressable onPress={() => navigation.navigate('PostListDetail' as never)}>
        <ButtonText>인기 사진 더보기</ButtonText>
      </ButtonPressable>
    </OrganismView>
  );
};

export default PoseRecommendOrganism;
