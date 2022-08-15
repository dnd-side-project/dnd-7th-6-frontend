import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import {Container} from './PhotoOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import {heightPercentage} from 'src/styles/ScreenResponse';

const PhotoOrganism = () => {
  const data = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Container>
      <FlatList
        data={data}
        numColumns={2}
        style={{height: Dimensions.get('window').height - heightPercentage(215)}}
        renderItem={({index}) => <FeedCard key={index} imgUrl="" />}
      />
    </Container>
  );
};

export default PhotoOrganism;
