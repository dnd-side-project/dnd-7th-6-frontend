import React, {useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useDispatch} from 'react-redux';

import {Container, FlatListWrapper, PostDetailFlatList} from './CardListOrganism.styles';
import SortingListHeader from './SortingListHeader';

import RecommendFeedCard from 'src/components/Recommend/FeedCard/RecommendFeedCard';
import {hideTabBar, showTabBar} from 'src/redux/actions/TabBarAction';

const CardListOrganism = () => {
  const dispatch = useDispatch();

  const handleScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const curY = nativeEvent.velocity?.y;
    if (!curY) {
      return;
    }
    dispatch(curY > 0 ? hideTabBar() : showTabBar());
  };

  return (
    <Container>
      <FlatListWrapper>
        <PostDetailFlatList
          numColumns={2}
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={() => <RecommendFeedCard imgUrl="" />}
          onScroll={handleScroll}
          ListHeaderComponent={<SortingListHeader>인기순</SortingListHeader>}
        />
      </FlatListWrapper>
    </Container>
  );
};

export default CardListOrganism;
