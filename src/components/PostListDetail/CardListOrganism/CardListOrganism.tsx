import React, {useState} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {Container} from './CardListOrganism.styles';

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
      <FlatList
        numColumns={2}
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={() => <RecommendFeedCard imgUrl="" />}
        onScroll={handleScroll}
      />
    </Container>
  );
};

export default CardListOrganism;
