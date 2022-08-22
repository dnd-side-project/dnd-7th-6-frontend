import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {ButtonText, CardContainer, TextnIconWrapper} from '../PoseOrganism/PoseOrganism.styles';
import RecommendPreviewFourCard from '../PreviewSixCard';
import {
  OrganismView,
  TitleWrapper,
  TitleText,
  ButtonPressable,
  TitleIcon,
  SubTitleText,
  ListWrapper,
} from './FrameOrganism.styles';

import useGetInfinitePosts from 'src/querys/useGetInfinitePosts';

const FrameRecommendOrganism = () => {
  const {data, isLoading} = useGetInfinitePosts({tagIdSet: [41], order: 'popular'});
  const navigation = useNavigation();

  const handlePressCard = (id: number) => () => {
    navigation.navigate('RecommendDetail' as never, {postId: id} as never);
  };

  return (
    <OrganismView>
      <TitleWrapper>
        <TextnIconWrapper>
          <TitleIcon
            source={require('src/assets/images/RecommendScreen/Icon_Home__Character.png')}
          />
          <TitleText>요즘 인기있는 캐릭터 프레임!</TitleText>
        </TextnIconWrapper>
        <SubTitleText>요즘 포톡커들이 많이 찾는 프레임이에요</SubTitleText>
      </TitleWrapper>
      <CardContainer>
        {!!data && (
          <ListWrapper>
            <RecommendPreviewFourCard
              isLoading={isLoading}
              data={data.pages.flat().map(response => response.content) as any}
              onPress={handlePressCard}
            />
          </ListWrapper>
        )}
      </CardContainer>
      <ButtonPressable onPress={() => navigation.navigate('PostListDetail' as never)}>
        <ButtonText>캐릭터 프레임 더보기</ButtonText>
      </ButtonPressable>
    </OrganismView>
  );
};

export default FrameRecommendOrganism;
