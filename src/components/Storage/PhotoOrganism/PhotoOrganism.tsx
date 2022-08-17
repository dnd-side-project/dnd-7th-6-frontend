import React from 'react';
import {Dimensions, FlatList} from 'react-native';

import {Container} from './PhotoOrganism.styles';

import FeedCard from 'src/components/Recommend/FeedCard';
import {heightPercentage} from 'src/styles/ScreenResponse';
import {UserLikeImage} from 'src/types';

interface Props {
  photoList: UserLikeImage[];
}

const PhotoOrganism = ({photoList}: Props) => {
  return (
    <Container>
      <FlatList
        data={photoList}
        numColumns={2}
        style={{height: Dimensions.get('window').height - heightPercentage(215)}}
        renderItem={({index, item}) => <FeedCard key={index} imgUrl={item.imageUrl} />}
      />
    </Container>
  );
};

export default PhotoOrganism;
