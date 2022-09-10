import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import PreviewFourCard from '../PreviewSixCard';
import {
  ButtonPressable,
  ButtonText,
  CardContainer,
  ListWrapper,
  OrganismView,
  SubTitleText,
  TextnIconWrapper,
  TitleIcon,
  TitleText,
  TitleWrapper,
} from './PoseOrganism.styles';

import useGetInfinitePosts from 'src/querys/useGetInfinitePosts';
import {RootState} from 'src/redux/store';

const PoseRecommendOrganism = () => {
  const {accessToken} = useSelector((state: RootState) => state.userReducer);
  const {data, isLoading, refetch} = useGetInfinitePosts({
    order: 'popular',
    key: 'pose',
    accessToken,
  });
  const navigation = useNavigation();
  const handlePressCard = (id: number) => () => {
    navigation.navigate('RecommendDetail' as never, {postId: id} as never);
  };

  useEffect(() => {
    setImmediate(() => {
      refetch();
    });
  }, [accessToken]);

  return (
    <OrganismView>
      <TitleWrapper>
        <TextnIconWrapper>
          <TitleIcon source={require('src/assets/images/RecommendScreen/Icon_Home_Hot.png')} />
          <TitleText>지금 이 사진이 핫해요</TitleText>
        </TextnIconWrapper>
        <SubTitleText>인기있는 포톡커의 사진을 확인해보세요</SubTitleText>
      </TitleWrapper>
      <CardContainer>
        <ListWrapper>
          <PreviewFourCard
            isLoading={isLoading}
            data={data?.pages.flatMap(response => response.content) as any}
            onPress={handlePressCard}
          />
        </ListWrapper>
      </CardContainer>
      <ButtonPressable onPress={() => navigation.navigate('PostListDetail' as never)}>
        <ButtonText>인기 사진 더보기</ButtonText>
      </ButtonPressable>
    </OrganismView>
  );
};

export default PoseRecommendOrganism;
