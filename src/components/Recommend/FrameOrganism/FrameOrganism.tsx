import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {ButtonText, TextnIconWrapper} from '../PoseOrganism/PoseOrganism.styles';
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
import {changeFilteredFrame} from 'src/redux/actions/PostAction';
import {RootState} from 'src/redux/store';

const FrameRecommendOrganism = () => {
  const dispatch = useDispatch();
  const {accessToken} = useSelector((state: RootState) => state.userReducer);
  const {data, isLoading, refetch} = useGetInfinitePosts({
    tagIdSet: [41],
    order: 'popular',
    key: 'frame',
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
          <TitleIcon
            source={require('src/assets/images/RecommendScreen/Icon_Home__Character.png')}
          />
          <TitleText>요즘 인기있는 캐릭터 프레임!</TitleText>
        </TextnIconWrapper>
        <SubTitleText>요즘 포톡커들이 많이 찾는 프레임이에요</SubTitleText>
      </TitleWrapper>
      {!!data && (
        <ListWrapper>
          <RecommendPreviewFourCard
            isLoading={isLoading}
            data={data.pages.flatMap(response => response.content) as any}
            onPress={handlePressCard}
          />
        </ListWrapper>
      )}
      <ButtonPressable
        onPress={() => {
          dispatch(changeFilteredFrame(41));
          navigation.navigate('PostListDetail' as never);
        }}>
        <ButtonText>캐릭터 프레임 더보기</ButtonText>
      </ButtonPressable>
    </OrganismView>
  );
};

export default FrameRecommendOrganism;
