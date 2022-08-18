import React, {useEffect, useMemo} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container, FlatListWrapper, PostDetailFlatList} from './CardListOrganism.styles';
import ListEmptyComponent from './ListEmptyComponent';
import SortingListHeader from './SortingListHeader';

import RecommendFeedCard from 'src/components/Recommend/FeedCard/RecommendFeedCard';
import useFilteredItem from 'src/hooks/useFilteredItem';
import useGetInfinitePosts from 'src/querys/useGetInfinitePosts';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';
import {RootState} from 'src/redux/store';

const CardListOrganism = () => {
  const dispatch = useDispatch();
  const {tagIdSet} = useFilteredItem();
  const {order} = useSelector((state: RootState) => state.postReducer);
  const {data, fetchNextPage} = useGetInfinitePosts({tagIdSet, order});
  const posts = useMemo(() => {
    return data?.pages.reduce((allOfPosts: any, page: any) => {
      return [...allOfPosts, ...page.result.content];
    }, []);
  }, [data]);

  const handleScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const curY = nativeEvent.velocity?.y;
    if (!curY) {
      return;
    }
    dispatch(curY > 0 ? hideTabBar() : showTabBar());
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
          data={posts?.map(post => ({imgUrl: post.postImageSet[0].imageUrl}))}
          renderItem={({item}: any) => <RecommendFeedCard imgUrl={item.imgUrl} />}
          onScroll={handleScroll}
          onEndReached={() => {
            fetchNextPage();
            console.log('end');
          }}
          ListHeaderComponent={<SortingListHeader />}
        />
      </FlatListWrapper>
    </Container>
  );
};

export default CardListOrganism;
