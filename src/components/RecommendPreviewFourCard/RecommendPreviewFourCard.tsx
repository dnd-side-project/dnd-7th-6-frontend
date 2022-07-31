import React, {useCallback} from 'react';
import {FlatList} from 'react-native';

import RecommendFeedCard from '../RecommendFeedCard';
import {PreviewFourCardView} from './RecommendPreviewFourCard.styles';

interface Props {
  data: ReadonlyArray<renderItemList['item']>;
}

type renderItemList = {
  item: {
    url: string;
    id: string;
    title: string;
  };
};

const RecommendPreviewFourCard = ({data}: Props) => {
  const renderItem = useCallback(({item}: renderItemList) => {
    return <RecommendFeedCard imgUrl={item.url} />;
  }, []);
  return (
    <PreviewFourCardView>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={o => o.id}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </PreviewFourCardView>
  );
};

export default RecommendPreviewFourCard;
