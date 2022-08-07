import React, {useState} from 'react';
import {NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {Container, FlatListWrapper, PostDetailFlatList} from './CardListOrganism.styles';
import SortingListHeader from './SortingListHeader';

import RecommendFeedCard from 'src/components/Recommend/FeedCard/RecommendFeedCard';

const CardListOrganism = () => {
  const [isVisibleTabBar, setIsVisibleTabBar] = useState(true);

  const handleScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const curY = nativeEvent.velocity?.y;
    if (!curY) {
      return;
    }
    setIsVisibleTabBar(curY > 0);
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
