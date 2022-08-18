import React, {useEffect} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useQueryClient} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';

import {Container, FlatListWrapper, PostDetailFlatList} from './CardListOrganism.styles';
import ListEmptyComponent from './ListEmptyComponent';
import SortingListHeader from './SortingListHeader';

import RecommendFeedCard from 'src/components/Recommend/FeedCard/RecommendFeedCard';
import useFilteredItem from 'src/hooks/useFilteredItem';
import useGetInfinitePosts from 'src/querys/useGetInfinitePosts';
import useMutatePostLike from 'src/querys/useMutatePostLike';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';

const CardListOrganism = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const {tagIdSet} = useFilteredItem();
  const {order, isOpenFilterSheet} = useSelector((state: RootState) => state.postReducer);
  const {userInfo} = useSelector((state: RootState) => state.userReducer);
  const {data, fetchNextPage} = useGetInfinitePosts(
    {tagIdSet, order},
    {
      enabled: !isOpenFilterSheet,
    },
  );
  const {mutate: likePost} = useMutatePostLike();
  const posts = data?.pages.flatMap(({content}) => content);

  const handleScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const curY = nativeEvent.velocity?.y;
    if (!curY) {
      return;
    }
    dispatch(curY > 0 ? hideTabBar() : showTabBar());
  };
  const handleLikePost = (id: number) => () => {
    likePost(id, {
      onSuccess: () => {
        queryClient.invalidateQueries(['post']);
        queryClient.invalidateQueries(['userLike']);
      },
    });
  };

  useEffect(() => {
    return () => {
      dispatch(showTabBar());
    };
  }, []);

  return (
    <Container>
      <FlatListWrapper>
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
            />
          )}
          onScroll={handleScroll}
          onEndReached={() => {
            fetchNextPage();
          }}
          ListHeaderComponent={<SortingListHeader />}
        />
      </FlatListWrapper>
    </Container>
  );
};

export default CardListOrganism;
