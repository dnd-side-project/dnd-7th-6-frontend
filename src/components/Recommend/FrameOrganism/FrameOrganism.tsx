import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {ButtonText, TextnIconWrapper} from '../PoseOrganism/PoseOrganism.styles';
import RecommendPreviewFourCard from '../PreviewSixCard';
import {
  OrganismView,
  TitleWrapper,
  TitleText,
  ButtonPressable,
  TitleIcon,
  SubTitleText,
} from './FrameOrganism.styles';

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

const FrameRecommendOrganism = () => {
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
          <TitleText>인기있는 캐릭터 프레임!</TitleText>
        </TextnIconWrapper>
        <SubTitleText>요즘 포톡커들이 많이 찾는 프레임이에요</SubTitleText>
      </TitleWrapper>
      <RecommendPreviewFourCard data={TestData} onPress={handlePressCard} />
      <ButtonPressable onPress={() => navigation.navigate('PostListDetail' as never)}>
        <ButtonText>캐릭터 프레임 더보기</ButtonText>
      </ButtonPressable>
    </OrganismView>
  );
};

export default FrameRecommendOrganism;
