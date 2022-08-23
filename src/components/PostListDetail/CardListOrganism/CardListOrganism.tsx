import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import {Container, FlatListWrapper, PostDetailFlatList} from './CardListOrganism.styles';
import ListEmptyComponent from './ListEmptyComponent';
import SortingListHeader from './SortingListHeader';

import RecommendFeedCard from 'src/components/Recommend/FeedCard/RecommendFeedCard';
import useFilteredItem from 'src/hooks/useFilteredItem';
import useGetInfinitePosts from 'src/querys/useGetInfinitePosts';
import useMutatePostLike from 'src/querys/useMutatePostLike';
import {showTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';

const CardListOrganism = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const {tagIdSet} = useFilteredItem();
  const {order, isOpenFilterSheet} = useSelector((state: RootState) => state.postReducer);
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const {data, fetchNextPage, isLoading, refetch} = useGetInfinitePosts({
    tagIdSet,
    order,
    key: 'postList',
  });
  const {mutate: likePost} = useMutatePostLike();
  const posts = data?.pages.flatMap(({content}) => content);

  const handleLikePost = (id: number) => () => {
    likePost(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['post']);
        queryClient.invalidateQueries(['userLike']);
      },
    });
  };
  const handlePressPost = (id: number) => () => {
    navigation.navigate('RecommendDetail' as never, {postId: id} as never);
  };

  useEffect(() => {
    if (isOpenFilterSheet) {
      return;
    }
    refetch();
  }, [tagIdSet]);

  useEffect(() => {
    return () => {
      dispatch(showTabBar());
    };
  }, []);

  return (
    <Container>
      <FlatListWrapper>
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <PostDetailFlatList
            ListEmptyComponent={ListEmptyComponent}
            numColumns={2}
            data={posts || []}
            renderItem={({item}: any) => (
              <RecommendFeedCard
                imgUrl={item.postImageSet[0].imageUrl}
                isLike={item.like}
                onLike={handleLikePost(item.id)}
                isMine={item.user.id === userInfo.id}
                onPress={handlePressPost(item.id)}
              />
            )}
            onEndReached={() => {
              fetchNextPage();
            }}
            alwaysBounceVertical={true}
            ListHeaderComponent={<SortingListHeader />}
          />
        )}
      </FlatListWrapper>
    </Container>
  );
};

export default CardListOrganism;
