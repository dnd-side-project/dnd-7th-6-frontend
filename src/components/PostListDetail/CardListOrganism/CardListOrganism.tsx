import React from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useDispatch} from 'react-redux';

import {Container} from './CardListOrganism.styles';

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
