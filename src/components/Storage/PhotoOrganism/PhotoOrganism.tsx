import React from 'react';
import {FlatList, View} from 'react-native';

import FeedCard from 'src/components/Recommend/FeedCard';

const PhotoOrganism = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({index}) => <FeedCard key={index} imgUrl="" />}
      />
    </View>
  );
};

export default PhotoOrganism;
